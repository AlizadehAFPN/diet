import {View} from 'react-native';
import React from 'react';
import {Row, Button, Text, Divider} from '../';
import {colors} from '../../Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import {Recipestyles} from './recipe-styles';
import {RecipeItemPrp} from '../../Interface';

const RecipeItem = ({item}: {item: RecipeItemPrp}) => {
  return (
    <Row style={Recipestyles.container}>
      <View style={Recipestyles.imgContainer}>
        <RecipeImage
          imageUrl={`https://i.dietdoctor.com${item.images.vt}?auto=compress%2Cformat`}
        />
      </View>
      <View style={Recipestyles.middelview}>
        <Text size={25} numberOfLines={2}>
          {item.title}
        </Text>
        <Divider height={8} />
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
          <View style={Recipestyles.line} />
          <Text size={10} color={colors.gray3}>
            {item?.difficulty?.rating}
          </Text>
        </Row>
      </View>
      {renderMoreButton()}
    </Row>
  );
};

const RecipeImage = ({imageUrl}: {imageUrl: string}) => (
  <FastImage
    style={Recipestyles.img}
    resizeMode={FastImage.resizeMode.cover}
    source={{uri: imageUrl}}
  />
);

const renderMoreButton = () => (
  <Button style={Recipestyles.moreButton}>
    <Icon name="ellipsis1" size={18} color={colors.gray3} />
  </Button>
);

export {RecipeItem};
