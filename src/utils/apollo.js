import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: import.meta.env.VITE_DATABASE_URL,
    cache: new InMemoryCache()
})