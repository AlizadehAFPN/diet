import React, {useRef, useState} from 'react';
import {Button, Screen, Row, Text} from '../../component';
import {RecipesTab} from './recipes-tab';
import {MealPlansTab} from './meal-plans-tab';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Animated,
} from 'react-native';
import {colors} from '../../Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {setRecipesModal} from '../../redux/search-slice';

const {width} = Dimensions.get('window');

export function SearchScreen() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const transX = useRef(new Animated.Value(0)).current;

  const onPressTab = (index: number) => {
    if (index !== activeIndex) {
      Animated.timing(transX, {
        toValue: index ? width - 180 : 0,
        useNativeDriver: true,
        duration: 500,
      }).start(() => {
        scrollRef?.current?.scrollTo({x: index * width});
        setActiveIndex(index);
      });
    }
  };
  const onMomentumScrollEnd = ({nativeEvent}: {nativeEvent: any}) => {
    const index = Math.round(nativeEvent.contentOffset.x / width);
    onPressTab(index);
  };

  const onPressfilter = () => {
    if (activeIndex == 0) {
      dispatch(setRecipesModal(true));
    }
  };
  return (
    <Screen withoutScroll style={styles.container}>
      <Row style={styles.tabbar}>
        <Button onPress={() => onPressTab(0)} style={styles.tab}>
          <Text>Ricepes</Text>
        </Button>
        <Button onPress={() => onPressTab(1)} style={styles.tab}>
          <Text>Meal Plans</Text>
        </Button>
      </Row>
      <View style={{paddingHorizontal: 15}}>
        <Animated.View
          style={{...styles.indicator, transform: [{translateX: transX}]}}
        />
      </View>

      <View style={styles.scrollContainer}>
        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              value={text}
              onChangeText={textInput => setText(textInput)}
            />
            {text && (
              <Button onPress={() => setText('')}>
                <Icon name="close" size={18} color="black" />
              </Button>
            )}
            <Button onPress={onPressfilter} style={{...styles.filterContainer}}>
              <Icon name="filter" size={18} color="black" />
            </Button>
          </View>
        </View>
        <ScrollView
          onMomentumScrollEnd={onMomentumScrollEnd}
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}
          scrollEventThrottle={5}
          style={styles.cart}
          pagingEnabled
          horizontal>
          <RecipesTab />
          <MealPlansTab />
        </ScrollView>
      </View>
    </Screen>
  );
}

// Styles and other definitions here

const styles = StyleSheet.create({
  container: {flex: 1},
  stack: {backgroundColor: 'transparent'},
  scrollContainer: {
    flex: 1,
    width,
    backgroundColor: colors.lightGreen,
  },
  flashStyle: {paddingHorizontal: 15},
  cart: {
    backgroundColor: 'white',
    paddingTop: 20,
    // flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  btn: {
    borderBottomWidth: 3,
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    marginVertical: 5,
    marginBottom: 10,
  },
  box: {
    backgroundColor: colors.lightGreen,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textinput: {
    flex: 1,
    fontSize: 14,
  },
  filterContainer: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.green1,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbar: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
  },
  tab: {
    paddingHorizontal: 20,
    height: 60,
    justifyContent: 'center',
    width: 150,
    alignItems: 'center',
  },
  indicator: {
    height: 3,
    width: 150,
    backgroundColor: 'black',
  },
});
