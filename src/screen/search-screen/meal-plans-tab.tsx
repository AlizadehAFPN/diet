import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../Styles';
import {FilterBadgeClose, MealItem, Screen, Text} from '../../component';
import {useDispatch, useSelector} from 'react-redux';
import {setMealsTags} from '../../redux/search-slice';
import {FlashList} from '@shopify/flash-list';

export function MealPlansTab() {
  const renderItem = ({index}: {index: number}) => (
    <MealItem key={String(index + 30)} />
  );
  const dispatch = useDispatch();
  const {mealsTags} = useSelector((s: any) => s.search);
  const onSelect = (label: any) => {
    dispatch(setMealsTags(mealsTags.filter((item: any) => item !== label)));
  };
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Screen withoutScroll unsafe style={styles.screenContainer}>
          <View style={styles.fc}>
            {mealsTags.map((item: any, index: number) => (
              <FilterBadgeClose
                key={String(index + 150)}
                onSelect={onSelect}
                label={item}
              />
            ))}
          </View>
          <FlashList
            contentContainerStyle={styles.flashlist}
            renderItem={renderItem}
            keyExtractor={index => String(index + 40)}
            estimatedItemSize={160}
            ListHeaderComponent={
              <Text color={colors.gray3}>218 meal plans</Text>
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
  flashlist: {paddingHorizontal: 15},
  cart: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
  },
  fc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
});
