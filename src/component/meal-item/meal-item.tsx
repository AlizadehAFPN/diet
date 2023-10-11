import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {Row, Text} from '../';
import {colors} from '../../Styles';
import FastImage from 'react-native-fast-image';
const {width} = Dimensions.get('window');

export const MealItem = () => {

  return (
    <Row style={styles.container}>
      <View style={styles.imgContainer}>
        <FastImage
          style={styles.img}
          source={{
            uri: 'https://cookingwithbliss.com/wp-content/uploads/2020/02/cast-iron-skillet-chicken-breast-6.jpg',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.outerBadge}>
          <View style={styles.innerBadge}>
            <View style={styles.d} />
          </View>
        </View>
      </View>
      <View style={styles.middelview}>
        <Text size={25} numberOfLines={2}>
          skillet chicken breast with cherry tomatoes
        </Text>
        {/* <Divider height={8} />
            <Row >
                <ClockIcon style={{marginRight: 5}} fill={colors.gray3} width={18} height={18} />
                <Text size={10} color={colors.gray3} >30 min</Text>
                <View style={styles.line} />
                <Text size={10} color={colors.gray3}>Easy</Text>
            </Row> */}
      </View>
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  img: {width: '100%', height: '100%'},
  imgContainer: {
    width: width / 3,
    aspectRatio: 1,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: colors.gray2,
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
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: '#0a0908',
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBadge: {
    width: 18,
    height: 18,
    borderTopRightRadius: 15,
    borderColor: 'white',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
  },
  d: {
    width: 12,
    height: 12,
    borderTopRightRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
    borderBottomRightRadius: 15,
  },
});
