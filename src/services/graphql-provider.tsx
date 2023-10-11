import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {graphqlInstance} from './graphqlConfig';
import {GraphQlProviderPrps} from '../Interface';

export const GraphQlProvider = ({children}: GraphQlProviderPrps) => {
  return <ApolloProvider client={graphqlInstance()}>{children}</ApolloProvider>;
};
