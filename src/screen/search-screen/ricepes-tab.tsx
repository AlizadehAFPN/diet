import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Divider,
  FilterBadgeClose,
  RicepeItem,
  Screen,
  Text,
} from '../../component';
import { colors } from '../../Styles';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipesTags } from '../../redux/search-slice';
import { FlashList } from '@shopify/flash-list';
import { storeInterface } from '../../Interface';
import { useQuery } from '@apollo/client';
import { GetRecipes } from '../../services/graphQluries';

export function RicepesTab() {
  const dispatch = useDispatch();
  const token: string = useSelector(
    (state: storeInterface) => state.auth.token,
  );

  const renderItem = ({ index }: { index: number }) => (
    <RicepeItem key={String(index + 50)} />
  );

  const { recipesTags } = useSelector((s: storeInterface) => s.search);

  const onSelect = (label: string) => {
    const selectedItem: (string | undefined)[] = recipesTags.filter(
      (item?: string) => item !== label,
    );
    dispatch(setRecipesTags(selectedItem));
  };

  const { loading, error, data, refetch, fetchMore, client } = useQuery(GetRecipes, {
    variables: {
      page: 1,
      pageSize: 20,
    },
  })

  if(data)console.log(data, 'data===')
  if(error)console.log(error, 'erorooo')

  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Screen unsafe style={styles.screenContainer}>
          <Divider />
          <View style={styles.fc}>
            {recipesTags.length > 0 && recipesTags.map((item?: string, index?: number) => (
              <FilterBadgeClose
                key={String(index)}
                onSelect={onSelect}
                label={item}
              />
            ))}
          </View>
          <FlashList
            contentContainerStyle={styles.flashStyle}
            renderItem={renderItem}
            estimatedItemSize={160}
            keyExtractor={index => String(index + 70)}
            ListHeaderComponent={
              <View>
                <Text color={colors.gray3}>75 recipe</Text>
              </View>
            }
            data={[1, 2, 3, 4, 5, 6, 7]}
          />
        </Screen>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
  },
  flashStyle: { paddingHorizontal: 15 },
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
