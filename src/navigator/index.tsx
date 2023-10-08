import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorParamList, loginInterface} from '../Interface';
import {FilterScreen, SearchScreen} from '../screen';
import {useDispatch} from 'react-redux';
import {useQuery} from 'react-query';
import {tempLogin} from '../services';
import {authState, setToken} from '../redux/authSlice';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const auth: loginInterface = {
  username: 'stas.testuser1@dietdoctor.com',
  password: 'C5(Pg5qwrwP^(WJ!eS%d38FI',
};

const AppNavigator = () => {

  const dispatch = useDispatch();

  useQuery('getToken', () => tempLogin(auth), {
    onSuccess: (data: authState) => {
      dispatch(setToken(data?.token));
    },
    onError: error => { console.log(error) },
  });

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="filter" component={FilterScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
