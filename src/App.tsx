import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigator';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {GraphQlProvider} from './layouts';
import {PersistGate} from 'redux-persist/integration/react';
import { ActivityIndicator, View } from 'react-native';
import { Text } from './component/text/text';

const queryClient: QueryClient = new QueryClient();


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator/>} persistor={persistor}>
        <GraphQlProvider>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </QueryClientProvider>
        </GraphQlProvider>
      </PersistGate>
    </Provider>
  );
}
