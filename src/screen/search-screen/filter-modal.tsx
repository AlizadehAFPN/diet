import { Modal, StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Divider, FilterBadge, Row, Screen, Text } from '../../component';
import { colors } from '../../Styles';
import { useDispatch, useSelector } from 'react-redux';
import { setMealsTags, setRecipesTags } from '../../redux/search-slice';
import Icon from 'react-native-vector-icons/AntDesign';
import { tag } from '../../Interface';

const opts = [
  {
    title: 'recipe_tag',
    lists: [
      { id: 'wp-us-tag-1247', title: 'Beverage', type: 'recipe_type' },
      {
        'id': 'wp-us-tag-586',
        'type': 'recipe_tag',
        'title': 'egg-free'
      },
      {
        'id': 'wp-us-tag-1441',
        'type': 'recipe_tag',
        'title': 'mealplan-ready'
      }
    ],
  },
  {
    title: 'recipe_diet',
    lists: [
      {
        'id': 'wp-us-tag-1392',
        'type': 'recipe_diet',
        'title': 'Vegan'
      },
      {
        'id': 'wp-us-tag-1393',
        'type': 'recipe_diet',
        'title': 'Vegetarian'
      },
      {
        'id': 'wp-us-tag-1394',
        'type': 'recipe_diet',
        'title': 'Dairy Free'
      },
    ],
  },
  {
    title: 'energy',
    lists: [
      {
        'id': 'wp-us-tag-3',
        'type': 'energy',
        'title': 'liberal'
      },
    ],
  },
  {
    title: 'energy',
    lists: [
      {
        'id': 'wp-us-tag-4',
        'type': 'ease',
        'title': 'beginner'
      }
    ],
  },
];


interface FilterModalPrp {
  visible?: boolean
  onClose?: () => void
  resultNumbs?: number,
  type?: string,
  loading?: boolean
}
export function FilterModal({ visible, onClose, resultNumbs, type, loading }: FilterModalPrp) {
  const dispatch = useDispatch();
  const { recipesTags, mealsTags } = useSelector((s: any) => s.search);

  const handleSelect = (tag: tag) => {
    const tags = type == "recipes" ? recipesTags : mealsTags
    const isSelected = tags.findIndex((l: tag) => l === tag);
    if (isSelected > -1) {
      if (type == "recipes") {
        dispatch(setRecipesTags(tags?.filter((item: tag) => item !== tag)))
      } else {
        dispatch(setMealsTags(tags?.filter((item: tag) => item !== tag)))
      }

      // setState(s => ({
      //   ...s,
      //   selected: s.selected.filter((item: tag) => item !== tag),
      // }));
    } else {
      if (type == "recipes") {
        dispatch(setRecipesTags(tags.concat(tag)))
      } else {
        dispatch(setMealsTags(tags.concat(tag)))
      }
      // setState(s => ({ ...s, selected: [...s.selected, tag] }));
    }
  };

  const onShow = () => {
    // if (type === 'recipes') {
    //   dispatch(setRecipesTags(state.selected));
    // } else {
    //   dispatch(setMealsTags(state.selected));
    // }
    onClose
    // goBack();
  };

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <Screen withoutScroll>
        <Row px={15}>
          <Button onPress={onClose}>
            <Icon name="back" size={18} color="black" />
          </Button>
          <Text size={16} mx={10} color={colors.gray3}>
            {type === 'recipes' ? 'RECIPE FILTERS' : 'MEALS FILTER'}
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
                    selected={type == "recipes" ? recipesTags : mealsTags}
                    onSelect={handleSelect}
                    item={elem}
                  />
                ))}
              </View>
              <Divider />
            </View>
          ))}
        </Screen>
        <Button loading={loading} onPress={onClose} style={styles.button}>
          <Text size={18} color="white">
            {resultNumbs} show recipes
          </Text>
        </Button>
      </Screen>
    </Modal>
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
