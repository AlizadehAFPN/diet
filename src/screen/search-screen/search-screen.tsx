import React, {useRef, useState} from 'react';
import {Button, Screen, Row, Text} from '../../component';
import {MealPlansTab} from './meal-plans-tab';
import {
  Dimensions,
  ScrollView,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {setRecipesModal} from '../../redux/search-slice';
import {RecipesTab} from './recipes-tab';
import {stylesTab} from './styles';
import {ScrollViewEvent} from '../../Interface';

const {width} = Dimensions.get('window');

export const SearchScreen = () => {
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
  const onMomentumScrollEnd = ({
    nativeEvent,
  }: {
    nativeEvent: ScrollViewEvent;
  }) => {
    const index = Math.round(nativeEvent.contentOffset.x / width);
    onPressTab(index);
  };

  const onPressfilter = () => {
    if (activeIndex === 0) {
      dispatch(setRecipesModal(true));
    }
  };
  return (
    <Screen withoutScroll style={stylesTab.container}>
      <Row style={stylesTab.tabbar}>
        <Button onPress={() => onPressTab(0)} style={stylesTab.tab}>
          <Text>Recipes</Text>
        </Button>
        <Button onPress={() => onPressTab(1)} style={stylesTab.tab}>
          <Text>Meal Plans</Text>
        </Button>
      </Row>
      <View style={stylesTab.paddingWidth}>
        <Animated.View
          style={{...stylesTab.indicator, transform: [{translateX: transX}]}}
        />
      </View>

      <View style={stylesTab.scrollContainer}>
        <TouchableOpacity onPress={onPressfilter} style={stylesTab.box}>
          <View style={stylesTab.inputContainer}>
            <Icon name="filter" size={18} color="black" />
          </View>
        </TouchableOpacity>
        <ScrollView
          onMomentumScrollEnd={onMomentumScrollEnd}
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}
          scrollEventThrottle={5}
          style={stylesTab.cartRecipe}
          pagingEnabled
          horizontal>
          <RecipesTab />
          <MealPlansTab />
        </ScrollView>
      </View>
    </Screen>
  );
};
