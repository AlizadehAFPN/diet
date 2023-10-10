import React, {useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {
  Divider,
  FilterBadgeClose,
  RicepeItem,
  Screen,
  Text,
} from '../../component';
import {useDispatch, useSelector} from 'react-redux';
import {setRecipesModal, setRecipesTags} from '../../redux/search-slice';
import {FlashList} from '@shopify/flash-list';
import {useQuery} from '@apollo/client';
import {GetRecipes} from '../../services/graphQluries';
import {FilterModal} from './filter-modal';
import {RootState} from '../../redux/store';
import {tag} from '../../Interface';
import {colors} from '../../Styles/colors';

function RecipeItem({item, index}: {item: any; index: number}) {
  return <RicepeItem item={item} key={String(index + 50)} />;
}

function FilterTags({recipesTags}: {recipesTags: tag[]}) {
  const dispatch = useDispatch();

  const onSelect = (label: tag) => {
    const selectedItem: tag[] = recipesTags.filter(
      (item: tag) => item?.id !== label?.id,
    );
    dispatch(setRecipesTags(selectedItem));
  };

  return (
    <View style={styles.fc}>
      {recipesTags.length > 0 &&
        recipesTags.map((item: tag) => (
          <FilterBadgeClose key={item.id} onSelect={onSelect} item={item} />
        ))}
    </View>
  );
}

function RecipeList({data, loading, onEndReached}: any) {
  return (
    <FlashList
      onEndReached={onEndReached}
      onEndReachedThreshold={50}
      contentContainerStyle={styles.flashStyle}
      renderItem={RecipeItem}
      estimatedItemSize={160}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item.id}
      ListHeaderComponent={
        <View>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text color={colors.gray3}>
              {data?.listRecipes?.totalSize} recipe
            </Text>
          )}
        </View>
      }
      data={data?.listRecipes?.recipes}
    />
  );
}

export function RicepesTab() {
  const dispatch = useDispatch();

  const {recipesTags, recipesModal} = useSelector((s: RootState) => s.search);

  const {loading, data, refetch, fetchMore} = useQuery(GetRecipes, {
    variables: {
      page: 1,
      pageSize: 50,
      tagFilters: [],
      premiumOnly: false,
      includePremiumPreview: false,
    },
  });

  const onEndReached = () => {
    if (data?.listRecipes?.nextPage) {
      fetchMore({
        variables: {
          page: data?.listRecipes?.nextPage,
          pageSize: 50,
          tagFilters: [],
          premiumOnly: false,
          includePremiumPreview: false,
        },
        updateQuery: (previousResult: any, {fetchMoreResult}: any) => {
          if (!fetchMoreResult || fetchMoreResult.listRecipes.recipes === 0) {
            return previousResult;
          }
          return {
            ...fetchMoreResult,
            listRecipes: {
              ...fetchMoreResult.listRecipes,
              recipes: previousResult.listRecipes.recipes.concat(
                fetchMoreResult.listRecipes.recipes,
              ),
            },
          };
        },
      });
    }
  };

  useEffect(() => {
    refetch({
      page: 1,
      pageSize: 50,
      tagFilters: recipesTags.map((item: tag) => item?.id),
      premiumOnly: false,
      includePremiumPreview: false,
    });
  }, [recipesTags]);

  const handleCloseModal = () => {
    dispatch(setRecipesModal(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Screen withoutScroll unsafe style={styles.screenContainer}>
          <Divider />
          <FilterTags recipesTags={recipesTags} />
          <RecipeList
            data={data}
            loading={loading}
            onEndReached={onEndReached}
          />
        </Screen>
      </View>
      <FilterModal
        visible={recipesModal}
        resultNumbs={data?.listRecipes?.totalSize}
        type="recipes"
        onClose={handleCloseModal}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
  },
  flashStyle: {paddingHorizontal: 15},
  cart: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
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
});
