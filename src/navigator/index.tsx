import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../Interface';
import {FilterScreen, SearchScreen} from '../screen';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="filter" component={FilterScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
