import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const graphqlInstance =(token?: string)=>  new ApolloClient({
    uri: 'https://ddapi.production.dietdoctor.com/v1/',
    headers:{
        Authorization: token? `Bearer ${token}`: '',
        'GraphQL-Query-Plan':'1'
    },
    cache: new InMemoryCache(),
  });