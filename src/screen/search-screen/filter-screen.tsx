import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Divider, FilterBadge, Row, Screen, Text} from '../../component';
import {colors} from '../../Styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setMealsTags, setRecipesTags} from '../../redux/search-slice';
import Icon from 'react-native-vector-icons/AntDesign';

const opts = [
  {
    title: 'Cooking time',
    lists: ['< 15 min', '15 - 30 min', '30+ min'],
  },
  {
    title: 'Satiety score',
    lists: ['< 40', '40-50', '>60'],
  },
  {
    title: 'Type',
    lists: [
      'Meal',
      'Side dish',
      'Breakfast',
      'Bread',
      'Condiments',
      'Desert',
      'Snack',
      'Appetizer',
      'Main course',
      'Beverage',
      'Lunch',
      'Dinner',
    ],
  },
  {
    title: 'Protein',
    lists: [
      'Fish',
      'Beef',
      'Pork',
      'Pouitry',
      'Lamb',
      'Seafood',
      'Egg',
      'Game',
    ],
  },
];

export function FilterScreen() {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const {params} = useRoute<any>();
  const {recipesTags, mealsTags} = useSelector((s: any) => s.search);
  const [state, setState] = useState({
    selected: params.type === 'recipes' ? recipesTags : mealsTags,
  });

  const handleSelect = (label: any) => {
    console.log(label, 'label');
    const isSelected = state.selected.findIndex((l: any) => l === label);
    if (isSelected > -1) {
      setState(s => ({
        ...s,
        selected: s.selected.filter((item: any) => item !== label),
      }));
    } else {
      setState(s => ({...s, selected: [...s.selected, label]}));
    }
  };

  const onShow = () => {
    if (params.type === 'recipes') {
      dispatch(setRecipesTags(state.selected));
    } else {
      dispatch(setMealsTags(state.selected));
    }
    goBack();
  };

  return (
    <Screen withoutScroll>
      <Row px={15}>
        <Button onPress={goBack}>
          <Icon name="back" size={18} color="black" />
        </Button>
        <Text size={16} mx={10} color={colors.gray3}>
          {params.type === 'recipes' ? 'RECIPE FILTERS' : 'MEALS FILTER'}
        </Text>
      </Row>
      <Divider />
      <Screen style={styles.screen} unsafe>
        {opts.map((item, indexOpt) => (
          <View key={String(indexOpt + 20)}>
            <Text size={18}>{item.title}</Text>
            <Divider height={8} />
            <View style={styles.section}>
              {item.lists.map((elem, index) => (
                <FilterBadge
                  key={String(index + 100)}
                  selected={state.selected}
                  onSelect={handleSelect}
                  label={elem}
                />
              ))}
            </View>
            <Divider />
          </View>
        ))}
      </Screen>
      <Button onPress={onShow} style={styles.button}>
        <Text size={18} color="white">
          show recipes
        </Text>
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    position: 'absolute',
    left: 30,
    right: 30,
    height: 40,
    bottom: 80,
    borderRadius: 30,
    backgroundColor: colors.green1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
