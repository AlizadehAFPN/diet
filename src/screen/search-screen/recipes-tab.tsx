import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';
import {FilterBadgeClose, RecipeItem, Text} from '../../component';
import {useDispatch, useSelector} from 'react-redux';
import {setRecipesModal, setRecipesTags} from '../../redux/search-slice';
import {FlashList} from '@shopify/flash-list';
import {Recipe, tag} from '../../Interface';
import {useQuery} from '@apollo/client';
import {GetRecipes} from '../../services/graphQluries';
import {FilterModal} from './filter-modal';
import {RootState} from '../../redux/store';
import {stylesTab} from './styles';
import {queryOptions} from '../../constant';

// RecipesTab component
export const RecipesTab = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const flashListRef = React.useRef<any>(null);
  // Function to render each recipe item
  const renderItem = ({item}: {item: Recipe}) => (
    <RecipeItem item={item} key={String(item?.id)} />
  );

  // Get recipesTags and recipesModal from the Redux store
  const {recipesTags, recipesModal} = useSelector((s: RootState) => s.search);

  // Function to handle selection of a filter badge
  const onDelete = (label: tag) => {
    // Filter out the selected item and update the Redux state
    const selectedItem: tag[] = recipesTags.filter(
      (item: tag) => item?.id !== label?.id,
    );
    dispatch(setRecipesTags(selectedItem));
    onScrollToTp()
  };

  // Use Apollo Client's useQuery hook to fetch data
  const {data, refetch, fetchMore} = useQuery(GetRecipes, queryOptions);

  // Function to handle reaching the end of the list
  const onEndReached = () => {
    if (data?.listRecipes?.nextPage) {
      setIsLoading(true); // Set loading state to true

      fetchMore({
        variables: {...queryOptions, page: data?.listRecipes?.nextPage},
        updateQuery: (previousResult, {fetchMoreResult}) => {
          // Don't do anything if there weren't any new items
          if (!fetchMoreResult || fetchMoreResult.listRecipes.recipes === 0) {
            return previousResult;
          }
          return {
            // Append the new feed results to the old one
            ...fetchMoreResult,
            listRecipes: {
              ...fetchMoreResult.listRecipes,
              recipes: previousResult.listRecipes.recipes.concat(
                fetchMoreResult.listRecipes.recipes,
              ),
            },
          };
        },
      }).then(() => {
        setIsLoading(false); // Reset loading state when finished
      });
    }
  };

  // Use the useEffect hook to refetch data when recipesTags change
  useEffect(() => {
    setIsLoading(true);
    refetch({
      page: 1,
      pageSize: 20,
      tagFilters: recipesTags.map((item: tag) => item?.id),
    }).then(() => setIsLoading(false));
  }, [recipesTags, refetch]);

  // Function to handle modal closure
  const handleCloseModal = () => {
    dispatch(setRecipesModal(false));
    onScrollToTp()
  };

  const onScrollToTp = () => {
    flashListRef?.current?.scrollToOffset({ animated: true, offset: 0 })
  }

  // Define a separator component for the recipe items
  const ItemSeparatorComponent = useCallback(
    () => <View style={stylesTab.divider} />,
    [],
  );

  return (
    <SafeAreaView style={stylesTab.container}>
      <Text mx={24}>{data?.listRecipes?.totalSize} - Recipe</Text>
      <View style={stylesTab.cart}>
        <View style={stylesTab.fc}>
          {recipesTags.length > 0 &&
            recipesTags.map((item: tag) => (
              <FilterBadgeClose
                key={item.id}
                onSelect={onDelete}
                item={item}
                selected={[]}
              />
            ))}
        </View>
        <FlashList
          onEndReached={onEndReached}
          ref={flashListRef}
          onEndReachedThreshold={0.5}
          contentContainerStyle={stylesTab.flashStyle}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          estimatedItemSize={160}
          keyExtractor={item => item.id}
          data={data?.listRecipes?.recipes}
          ListFooterComponent={<>{isLoading && <ActivityIndicator />}</>}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>
      <FilterModal
        visible={recipesModal}
        resultNumbs={data?.listRecipes?.totalSize}
        type="recipes"
        onClose={handleCloseModal}
        loading={isLoading}
      />
    </SafeAreaView>
  );
};
