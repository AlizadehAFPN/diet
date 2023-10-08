import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Divider,
  FilterBadgeClose,
  RicepeItem,
  Screen,
  Text,
} from '../../component';
import {colors} from '../../Styles';
import {useDispatch, useSelector} from 'react-redux';
import {setRecipesTags} from '../../redux/search-slice';
import {FlashList} from '@shopify/flash-list';
import { storeInterface } from '../../Interface';

export function RicepesTab() {
  const dispatch = useDispatch();
  const token : string = useSelector((state: storeInterface) => state.auth.token);

  console.log(token , '----state-----');

  const renderItem = ({index}: {index: number}) => (
    <RicepeItem key={String(index + 50)} />
  );

  const {recipesTags} = useSelector((s: any) => s.search);

  const onSelect = (label: any) => {
    dispatch(setRecipesTags(recipesTags.filter((item: any) => item !== label)));
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Screen unsafe style={styles.screenContainer}>
          <Divider />
          <View style={styles.fc}>
            {recipesTags.map((item: any, index: number) => (
              <FilterBadgeClose
                key={String(index + 90)}
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