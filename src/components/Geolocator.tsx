import {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {requestLocationPermission} from '../services/geolocation';

function Geolocator(): JSX.Element {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    requestLocationPermission().then(result => setGranted(result));
  }, []);

  if (!granted) {
    return (
      <View style={styles.geoContainer}>
        <Text>
          Location permisssions not granted.{' '}
          {Platform.OS === 'ios'
            ? 'This feature is not yet available on iOS. See geolocation.ts for details.'
            : ''}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.geoContainer}>
      <Text>Location permisssions granted</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  geoContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: '#00007711',
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00000044',
  },
});

export default Geolocator;
