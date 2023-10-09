
import React, { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client';
import { graphqlInstance } from '../../services/graphqlConfig';
interface GraphQlProviderPrps {
    children: ReactNode
}
export function GraphQlProvider({children} :GraphQlProviderPrps) {
    return (
        <ApolloProvider client={graphqlInstance()}>
            {children}
        </ApolloProvider>
    )
}