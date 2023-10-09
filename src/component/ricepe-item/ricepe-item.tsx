import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Row, Button, Text, Divider} from '../';
import {colors} from '../../Styles';
import  Icon  from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import { Recipe } from '../../Interface';

const {width} = Dimensions.get('window');
interface RicepeItemPrp{
  item: Recipe
}
export function RicepeItem({item}: RicepeItemPrp) {
  return (
    <Row style={styles.container}>
      <View style={styles.imgContainer}>
        <FastImage
          style={styles.img}
          source={{
            uri: `https://i.dietdoctor.com${item.images.hz}`,
          }}
        />
        <View style={styles.outerBadge}>
          <View style={styles.innerBadge}>
            <Text size={10} color="black">
              13g
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.middelview}>
        <Text size={25} numberOfLines={2}>
          {item.title}
        </Text>
        <Divider height={8} />
        <Row>
          <Icon
            name="clockcircle"
            style={styles.iconClock}
            size={18}
            color={colors.gray3}
          />
          <Text size={10} color={colors.gray3}>
            {item.time?.preparation} min
          </Text>
          <View style={styles.line} />
          <Text size={10} color={colors.gray3}>
            {item?.difficulty?.rating}
          </Text>
        </Row>
      </View>
      <Button style={styles.moreButton}>
        <Icon name="ellipsis1" size={18} color={colors.gray3} />
      </Button>
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconClock:{marginRight: 8},
  img: {width: width / 3, height: width / 3},
  imgContainer: {
    width: width / 3,
    aspectRatio: 1,
    borderRadius: 5,
    overflow: 'hidden',
    // backgroundColor: colors.gray2,
  },
  middelview: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: width / 3,
  },
  moreButton: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: colors.gray2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 1,
    height: 15,
    backgroundColor: colors.gray3,
    marginHorizontal: 8,
  },
  outerBadge: {
    width: 30,
    height: 30,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'blue',
    position: 'absolute',
    left: 8,
    bottom: 8,
  },
  innerBadge: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#FFB800',
    justifyContent: 'center',
  },
});
