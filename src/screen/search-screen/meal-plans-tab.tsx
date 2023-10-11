import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import { Screen, Text} from '../../component';

const {width} = Dimensions.get("window")
export function MealPlansTab() {
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Screen withoutScroll unsafe style={styles.screenContainer}>
        <Text>meal</Text>
        </Screen>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  flashlist: {paddingHorizontal: 15},
  cart: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
  },
  fc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
});
