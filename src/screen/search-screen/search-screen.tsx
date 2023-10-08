import React, { FC } from 'react';
import {Screen, TopTabBar} from '../../component';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RicepesTab} from './ricepes-tab';
import {MealPlansTab} from './meal-plans-tab';
import {StyleSheet} from 'react-native';

const Stack = createMaterialTopTabNavigator();
interface page {
  name:string;
  component:FC
}
const pages : page[] = [
  {name: 'ricepes', component: RicepesTab},
  {name: 'meal', component: MealPlansTab},
];

export function SearchScreen() {
  return (
    <Screen withoutScroll style={styles.container}>
      <Stack.Navigator
        style={styles.stack}
        backBehavior="none"
        tabBar={props => <TopTabBar {...props} />}>
        {pages.map((item: page)=> (
          <Stack.Screen {...item} key={item.name} />
        ))}
      </Stack.Navigator>
    </Screen>
  );
}

// Styles and other definitions here

const styles = StyleSheet.create({
  container: {flex: 1},
  stack: {backgroundColor: 'transparent'},
});
