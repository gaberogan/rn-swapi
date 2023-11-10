import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {STARSHIPS_QUERY, StarshipsQuery} from '../queries/starships';
import Starship from '../components/Starship';

const backgroundStyle = {
  backgroundColor: Colors.lighter,
};

function HomeScreen(): JSX.Element {
  const starshipsResponse = useQuery<StarshipsQuery>(STARSHIPS_QUERY);

  const starships = starshipsResponse.data?.allStarships.edges.map(
    edge => edge.node,
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        data={starships}
        renderItem={({item}) => <Starship starship={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
