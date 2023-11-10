import {useQuery} from '@apollo/client';
import React, {useCallback, useMemo} from 'react';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {STARSHIPS_QUERY, StarshipsQuery} from '../queries/starships';
import StarshipCard from '../components/StarshipCard';
import Geolocator from '../components/Geolocator';

const backgroundStyle = {
  backgroundColor: Colors.lighter,
};

function HomeScreen(): JSX.Element {
  const starshipsResponse = useQuery<StarshipsQuery>(STARSHIPS_QUERY);

  const starships = useMemo(
    () => starshipsResponse.data?.allStarships.edges.map(edge => edge.node),
    [starshipsResponse.data],
  );

  const renderHeader = useCallback(() => <Geolocator />, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        ListHeaderComponent={renderHeader}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        data={starships}
        renderItem={({item}) => <StarshipCard starship={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
