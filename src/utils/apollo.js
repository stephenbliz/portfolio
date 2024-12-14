import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: import.meta.env.VITE_DATABASE_URL,
    cache: new InMemoryCache(),
    headers: {
        Authorization : `Bearer ${import.meta.env.VITE_PERMANENT_AUTH_TOKEN}`
    }
})