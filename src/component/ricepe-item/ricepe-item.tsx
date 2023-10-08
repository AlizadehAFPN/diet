import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Row, Button, Text, Divider} from '../';
import {colors} from '../../Styles';
// import HDots from '../../assets/svg/hdots.svg'
// import ClockIcon from '../../assets/svg/clock.svg'
const {width} = Dimensions.get('window');

export function RicepeItem() {
  return (
    <Row style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://cookingwithbliss.com/wp-content/uploads/2020/02/cast-iron-skillet-chicken-breast-6.jpg',
          }}
        />
        <View style={styles.outerBadge}>
          <View style={styles.innerBadge}>
            <Text size={10} color="white">
              13g
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.middelview}>
        <Text size={25} numberOfLines={2}>
          skillet chicken breast with cherry tomatoes
        </Text>
        <Divider height={8} />
        <Row>
          {/* <ClockIcon style={{marginRight: 5}} fill={colors.gray3} width={18} height={18} /> */}
          <Text size={10} color={colors.gray3}>
            30 min
          </Text>
          <View style={styles.line} />
          <Text size={10} color={colors.gray3}>
            Easy
          </Text>
        </Row>
      </View>
      <Button style={styles.moreButton}>
        {/* <HDots width={18} height={18} /> */}
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
