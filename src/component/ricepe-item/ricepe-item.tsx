import {Animated, Dimensions, Easing, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Row, Button, Text, Divider} from '../';
import {colors} from '../../Styles';
import Icon from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');

export function RicepeItem({index1}:{index1:number}) {
  // const opacityValue = new Animated.Value(0); // Initialize opacity value

  // React.useEffect(() => {
  //   // Animate opacity when the component mounts
  //   Animated.timing(opacityValue, {
  //     toValue: 1,
  //     duration: 1000, // Animation duration in milliseconds
  //     easing: Easing.exp, // Easing function
  //     useNativeDriver: true, // Use native driver for performance
  //   }).start();
  // }, []);
  const animatedValues = React.useRef([1, 2, 3, 4, 5, 6, 7].map((_, index) => new Animated.Value(0))).current;

  const animateItem = (index: number) => {
    Animated.timing(animatedValues[index], {
      toValue: 1,
      duration: 500, // Adjust animation duration as needed
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    [1, 2, 3, 4, 5, 6, 7].forEach((_: any, index: number) => {
      setTimeout(() => {
        animateItem(index);
      }, index * 100); // Delay each item's animation
    });
  }, []);

  const animatedStyle = {
    opacity: animatedValues[index1],
  };

  return (
    <Animated.View style={animatedStyle}>

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
            <Text size={10} color="black">
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
          <Icon
            name="clockcircle"
            style={styles.iconClock}
            size={18}
            color={colors.gray3}
          />
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
        <Icon name="ellipsis1" size={18} color={colors.gray3} />
      </Button>
    </Row>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconClock: {marginRight: 8},
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
