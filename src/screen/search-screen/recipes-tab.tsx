import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {Divider, FilterBadgeClose, RicepeItem, Text} from '../../component';
import {colors} from '../../Styles';
import {useDispatch, useSelector} from 'react-redux';
import {setRecipesModal, setRecipesTags} from '../../redux/search-slice';
import {FlashList} from '@shopify/flash-list';
import {Recipe, tag} from '../../Interface';
import {useQuery} from '@apollo/client';
import {GetRecipes} from '../../services/graphQluries';
import {FilterModal} from './filter-modal';
import {RootState} from '../../redux/store';
const {width} = Dimensions.get('window');
const queryOptions = {
  variables: {
    page: 1,
    pageSize: 20,
    tagFilters: [],
    premiumOnly: false,
    notifyOnNetworkStatusChange: true,
    includePremiumPreview: false,
  },
};

export const RecipesTab = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);

  const renderItem = ({item, index}: {item: Recipe; index: number}) => (
    <RicepeItem item={item} key={String(index + 50)} />
  );

  const {recipesTags, recipesModal} = useSelector((s: RootState) => s.search);
  const onSelect = (label: tag) => {
    const selectedItem: tag[] = recipesTags.filter(
      (item: tag) => item?.id !== label?.id,
    );
    dispatch(setRecipesTags(selectedItem));
  };

  const {loading, data, refetch, fetchMore } = useQuery(GetRecipes, queryOptions);

  const onEndReached = () => {
    if (data?.listRecipes?.nextPage) {
      setIsLoading(true); // Set loading state to true
  
      fetchMore({
        variables: {
          page: data?.listRecipes?.nextPage,
          pageSize: 20,
          tagFilters: [],
          premiumOnly: false,
          includePremiumPreview: false,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
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
  

  useEffect(() => {
    refetch({ 
      page: 1,
      pageSize: 20,
      tagFilters: recipesTags.map((item: tag) => item?.id),
      premiumOnly: false,
      includePremiumPreview: false,
    });
  }, [recipesTags]);

  const handleCloseModal = () => {
    dispatch(setRecipesModal(false));
  };

  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.divider} />,
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cart}>
        <View style={styles.fc}>
          {recipesTags.length > 0 &&
            recipesTags.map((item: tag) => (
              <FilterBadgeClose key={item.id} onSelect={onSelect} item={item} />
            ))}
        </View>
        <FlashList
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.flashStyle}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          estimatedItemSize={160}
          keyExtractor={item => item.id}
          ListHeaderComponent={<>{isLoading && <ActivityIndicator/>}</>}
          data={data?.listRecipes?.recipes}
          ListFooterComponent={<>{isLoading && <ActivityIndicator/>}</>}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />

      </View>
      <FilterModal
        visible={recipesModal}
        resultNumbs={data?.listRecipes?.totalSize}
        type="recipes"
        onClose={handleCloseModal}
        loading={loading}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  flashStyle: {
    paddingHorizontal: 15,
  },
  cart: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  fc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray2,
  },
});
