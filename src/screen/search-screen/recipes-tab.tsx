import React, { useCallback, useEffect} from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import {
  Divider,
  FilterBadgeClose,
  RicepeItem,
  Screen,
  Text,
} from '../../component';
import { colors } from '../../Styles';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipesModal, setRecipesTags } from '../../redux/search-slice';
import { FlashList } from '@shopify/flash-list';
import { Recipe, storeInterface, tag } from '../../Interface';
import { useQuery } from '@apollo/client';
import { GetRecipes } from '../../services/graphQluries';
import { FilterModal } from './filter-modal';
import { RootState } from '../../redux/store';

const {width} = Dimensions.get("window")
export function RecipesTab() {
  const dispatch = useDispatch();
  const token: string = useSelector(
    (state: RootState) => state.auth.token,
  );
  
  const renderItem = ({ item, index }: { item: Recipe, index: number }) => (
    <RicepeItem item={item} key={String(index + 50)} />
  );

  const { recipesTags, recipesModal } = useSelector((s: RootState) => s.search);
  const onSelect = (label: tag) => {
    const selectedItem: tag[] = recipesTags.filter(
      (item: tag) => item?.id !== label?.id,
    );
    dispatch(setRecipesTags(selectedItem));
  };

  const { loading, error, data, refetch, fetchMore, client } = useQuery(
    GetRecipes, {
    variables: {
      page: 1,
      pageSize: 20,
      tagFilters: [],
      premiumOnly: false,
      includePremiumPreview: false,
    },
  })

  const onEndReached = () => {
    if (data?.listRecipes?.nextPage) {
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
          } return {
            // Append the new feed results to the old one
            ...fetchMoreResult,
            listRecipes: {
              ...fetchMoreResult.listRecipes,
              recipes: previousResult.listRecipes.recipes.concat(fetchMoreResult.listRecipes.recipes),
            }

          };
        },
      })
    }
  }
  useEffect(() => {
    refetch({
      page: 1,
      pageSize: 20,
      tagFilters: recipesTags.map((item: tag) => item?.id),
      premiumOnly: false,
      includePremiumPreview: false,
    })
  }, [recipesTags])

  const handleCloseModal = () => {
    dispatch(setRecipesModal(false))
  }

  const ItemSeparatorComponent = useCallback(()=>
    <View style={styles.divider} />
  , [])

  return (
    <View style={styles.container}>
      <View style={styles.cart}>
          <Divider />
          <View style={styles.fc}>
            {
              recipesTags.length > 0 && recipesTags.map((item: tag) => (
                <FilterBadgeClose
                  key={item.id}
                  onSelect={onSelect}
                  item={item}
                />
              ))
            }
          </View >
          <FlashList
            onEndReached={onEndReached}
            onEndReachedThreshold={50}
            contentContainerStyle={styles.flashStyle}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            estimatedItemSize={100}
            keyExtractor={item => item.id}
            ListHeaderComponent={
              <View>
                {loading ? <ActivityIndicator /> : <Text color={colors.gray3}>{data?.listRecipes?.totalSize} recipe</Text>}
              </View>
            }
            data={data?.listRecipes?.recipes}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
      </View >
      <FilterModal
        visible={recipesModal}
        resultNumbs={data?.listRecipes?.totalSize}
        type="recipes"
        onClose={handleCloseModal}
        loading={loading}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  flashStyle: { 
    paddingHorizontal: 15 ,
  },
  cart: {
    flex:1
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
  divider:{
    height:1,
    backgroundColor: colors.gray2
  }
});
