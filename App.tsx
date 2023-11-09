import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import HomeScreen from './src/screens/HomeScreen';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
}

export default App;
