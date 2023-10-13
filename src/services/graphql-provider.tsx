import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {graphqlInstance} from './graphqlConfig';
import {GraphQlProviderPrps} from '../Interface';
// import {useSelector} from 'react-redux';
// import {RootState} from '../redux/store';

export const GraphQlProvider = ({children}: GraphQlProviderPrps) => {
  // const token = useSelector((state: RootState) => state.auth.token);
  return <ApolloProvider client={graphqlInstance()}>{children}</ApolloProvider>;
};
