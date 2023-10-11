import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorParamList, loginType, authState} from '../Interface';
import {SearchScreen} from '../screen';
import {useDispatch, useSelector} from 'react-redux';
import {useQuery} from 'react-query';
import {tempLogin} from '../services';
import {setToken} from '../redux/authSlice';
import {selectTokenExists} from '../redux/authSlice/authSelector';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const auth: loginType = {
  username: 'stas.testuser1@dietdoctor.com',
  password: 'C5(Pg5qwrwP^(WJ!eS%d38FI',
};

const AppNavigator = () => {
  const dispatch = useDispatch();
  const hasToken = useSelector(selectTokenExists);

  useQuery(
    'getToken',
    () => tempLogin(auth), // Replace with your API function
    {
      enabled: !hasToken, // Only enable the query when there is no token
      onSuccess: (data: authState) => {
        dispatch(setToken(data?.token));
      },
      onError: error => {
        console.log(error);
      },
    },
  );

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="search" component={SearchScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
