import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigator';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator} from 'react-native';
import {GraphQlProvider} from './services/graphql-provider';

const queryClient: QueryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
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
