import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigator';
import { Provider } from 'react-redux';
import store from './redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GraphQlProvider } from './layouts';

const queryClient: QueryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <GraphQlProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </GraphQlProvider>
    </Provider>
  );
}
