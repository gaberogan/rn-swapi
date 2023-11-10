import React from 'react';
import {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {requestLocationPermission} from '../services/geolocation';
import Geolocation from 'react-native-geolocation-service';
import {getDistance} from 'geolib';

function Geolocator(): JSX.Element {
  const [granted, setGranted] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    requestLocationPermission().then(result => setGranted(result));
  }, []);

  useEffect(() => {
    if (granted) {
      Geolocation.getCurrentPosition(
        position => {
          const _distance = getDistance(
            {latitude: 33.814831976267016, longitude: -117.92057887641796},
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          );
          setDistance(_distance);
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

  if (distance === null) {
    return (
      <View style={styles.geoContainer}>
        <Text>Calculating distance...</Text>
      </View>
    );
  }

  return (
    <View style={styles.geoContainer}>
      <Text>
        You are {Math.floor((distance / 1000) * 0.621371)} miles from Star Wars
        World!
      </Text>
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
