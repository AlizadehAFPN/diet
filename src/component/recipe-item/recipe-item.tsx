import {View} from 'react-native';
import React from 'react';
import {Row, Button, Text, Divider} from '../'; // Import necessary components
import {colors} from '../../Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import {Recipestyles} from './recipe-styles'; // Import styles specific to this component
import {RecipeItemPrp} from '../../Interface';

const RecipeItem = ({item}: {item: RecipeItemPrp}) => {
  return (
    // A container row for the recipe item
    <Row style={Recipestyles.container}>
      {/* Container for the recipe image */}
      <View style={Recipestyles.imgContainer}>
        {/* A component for displaying the recipe image */}
        <RecipeImage
          imageUrl={`https://i.dietdoctor.com${item.images.vt}?auto=compress%2Cformat`}
        />
      </View>
      {/* Container for recipe details */}
      <View style={Recipestyles.middelview}>
        {/* Display the recipe title */}
        <Text size={25} numberOfLines={2}>
          {item.title}
        </Text>
        {/* Add some spacing */}
        <Divider height={8} />
        {/* Display recipe preparation time and difficulty rating */}
        <Row>
          <Icon
            name="clockcircle"
            style={Recipestyles.iconClock}
            size={18}
            color={colors.gray3}
          />
          <Text size={10} color={colors.gray3}>
            {item.time?.preparation} min
          </Text>
          {/* Add a line separator */}
          <View style={Recipestyles.line} />
          <Text size={10} color={colors.gray3}>
            {item?.difficulty?.rating}
          </Text>
        </Row>
      </View>
      {/* Render a button for more options */}
      {renderMoreButton()}
    </Row>
  );
};

// A component for displaying the recipe image
const RecipeImage = ({imageUrl}: {imageUrl: string}) => (
  <FastImage
    style={Recipestyles.img}
    resizeMode={FastImage.resizeMode.cover}
    source={{uri: imageUrl}}
  />
);

// A function to render a button for more options
const renderMoreButton = () => (
  <Button style={Recipestyles.moreButton}>
    <Icon name="ellipsis1" size={18} color={colors.gray3} />
  </Button>
);

export {RecipeItem};
