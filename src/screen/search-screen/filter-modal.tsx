import {Modal, View} from 'react-native';
import React from 'react';
import {Button, Divider, FilterBadge, Row, Screen, Text} from '../../component';
import {colors} from '../../Styles';
import {useDispatch, useSelector} from 'react-redux';
import {setRecipesTags} from '../../redux/search-slice';
import Icon from 'react-native-vector-icons/AntDesign';
import {FilterModalPrp, tag} from '../../Interface';
import {stylesTab} from './styles';
import {RootState} from '../../redux/store';

const opts = [
  {
    title: 'recipe_tag',
    lists: [
      {id: 'wp-us-tag-1247', title: 'Beverage', type: 'recipe_type'},
      {
        id: 'wp-us-tag-586',
        type: 'recipe_tag',
        title: 'egg-free',
      },
      {
        id: 'wp-us-tag-1441',
        type: 'recipe_tag',
        title: 'mealplan-ready',
      },
    ],
  },
  {
    title: 'recipe_diet',
    lists: [
      {
        id: 'wp-us-tag-1392',
        type: 'recipe_diet',
        title: 'Vegan',
      },
      {
        id: 'wp-us-tag-1393',
        type: 'recipe_diet',
        title: 'Vegetarian',
      },
      {
        id: 'wp-us-tag-1394',
        type: 'recipe_diet',
        title: 'Dairy Free',
      },
    ],
  },
  {
    title: 'energy',
    lists: [
      {
        id: 'wp-us-tag-3',
        type: 'energy',
        title: 'liberal',
      },
    ],
  },
  {
    title: 'energy',
    lists: [
      {
        id: 'wp-us-tag-4',
        type: 'ease',
        title: 'beginner',
      },
    ],
  },
];

// UI rendering for the FilterModal component
export const FilterModal = ({
  visible, // A flag indicating whether the modal is visible
  onClose, // Callback function to close the modal
  resultNumbs, // The number of results
  type, // The type of the filter (e.g., 'recipes' or 'meals')
  loading, // A flag indicating loading state
}: FilterModalPrp) => {
  const dispatch = useDispatch();
  const {recipesTags, mealsTags} = useSelector(
    (state: RootState) => state.search,
  );

  // Function to handle tag selection
  const handleSelect = (selectedTag: tag) => {
    const tags = type === 'recipes' ? recipesTags : mealsTags;
    const isSelected = tags.findIndex(
      (loopTag: tag) => loopTag === selectedTag,
    );
    if (isSelected > -1) {
      // If tag is already selected, remove it
      dispatch(
        setRecipesTags(tags?.filter((item: tag) => item !== selectedTag)),
      );
    } else {
      // If tag is not selected, add it
      dispatch(setRecipesTags(tags.concat(selectedTag)));
    }
  };

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <Screen withoutScroll>
        <Row px={15}>
          {/* Back button */}
          <Button onPress={onClose}>
            <Icon name="back" size={18} color="black" />
          </Button>
          <Text size={16} mx={10} color={colors.gray3}>
            {type === 'recipes' ? 'RECIPE FILTERS' : 'MEALS FILTER'}
          </Text>
        </Row>
        <Divider />
        <Screen style={stylesTab.screen} unsafe>
          {/* Render filter options */}
          {opts.map((item, indexOpt) => (
            <View key={String(indexOpt + 20)}>
              <Text size={18}>{item.title}</Text>
              <Divider height={8} />
              <View style={stylesTab.section}>
                {item.lists.map((elem, index) => (
                  // Render FilterBadge components for each tag
                  <FilterBadge
                    key={String(index + 100)}
                    selected={type === 'recipes' ? recipesTags : mealsTags}
                    onSelect={handleSelect}
                    item={elem}
                  />
                ))}
              </View>
              <Divider />
            </View>
          ))}
        </Screen>
        {/* Show the number of results and a loading button */}
        <Button
          loading={loading}
          onPress={onClose}
          style={stylesTab.buttonModal}>
          <Text size={18} color="white">
            {<Text color="white">{resultNumbs} </Text>} show recipes
          </Text>
        </Button>
      </Screen>
    </Modal>
  );
};
