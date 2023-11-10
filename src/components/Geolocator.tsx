import React from 'react';
import {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {requestLocationPermission} from '../services/geolocation';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

function Geolocator(): JSX.Element {
  const [granted, setGranted] = useState(false);
  const [location, setLocation] = useState<GeoPosition | null>(null);

  useEffect(() => {
    requestLocationPermission().then(result => setGranted(result));
  }, []);

  useEffect(() => {
    if (granted) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          setLocation(position);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [granted]);

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
