import {ActivityIndicator, Modal, View} from 'react-native';
import React from 'react';
import {Button, Divider, FilterBadge, Row, Screen, Text} from '../../component';
import {colors} from '../../Styles';
import {useDispatch, useSelector} from 'react-redux';
import {setRecipesTags} from '../../redux/search-slice';
import Icon from 'react-native-vector-icons/AntDesign';
import {FilterModalPrp, TagCategory, tag} from '../../Interface';
import {stylesTab} from './styles';
import {RootState} from '../../redux/store';
import {offlineOptions} from '../../constant';

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
      (loopTag: tag) => loopTag.id === selectedTag.id,
    );
    if (isSelected > -1) {
      // If tag is already selected, remove it
      dispatch(
        setRecipesTags(tags?.filter((item: tag) => item.id !== selectedTag.id)),
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
          {offlineOptions.map((item: TagCategory) => (
            <View key={String(item?.title)}>
              <Text size={18}>{item.title}</Text>
              <Divider height={8} />
              <View style={stylesTab.section}>
                {item.lists.map((elem: tag) => (
                  // Render FilterBadge components for each tag
                  <FilterBadge
                    key={String(elem?.title)}
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
        <Button onPress={onClose} style={stylesTab.buttonModal}>
          {loading ? (
            <ActivityIndicator size={18} color={'white'} />
          ) : (
            <Text size={18} color="white">
              {resultNumbs}{' '}
            </Text>
          )}
          <Text size={18} mx={4} color="white">
            show recipes
          </Text>
        </Button>
      </Screen>
    </Modal>
  );
};
