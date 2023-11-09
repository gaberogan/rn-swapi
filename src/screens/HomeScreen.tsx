import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {STARSHIPS_QUERY} from '../queries/starships';
import Starship from '../components/Starship';

const backgroundStyle = {
  backgroundColor: Colors.lighter,
};

function HomeScreen(): JSX.Element {
  const starshipsResponse = useQuery<StarshipsResponse>(STARSHIPS_QUERY);

  const starships = starshipsResponse.data?.allStarships.edges.map(
    edge => edge.node,
  );

  console.log(JSON.stringify(starships, null, 2));

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        data={[]}
        renderItem={({item}) => <Starship starship={item} />}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
