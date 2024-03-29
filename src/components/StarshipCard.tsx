import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Starship} from '../queries/starships';

type StarshipProps = {
  starship: Starship;
};

function StarshipCard({starship}: StarshipProps): JSX.Element {
  return (
    <View style={styles.starshipContainer}>
      <Text style={styles.starshipTitle}>{starship.name}</Text>
      <View style={styles.starshipStatRow}>
        <View style={styles.starshipStat}>
          <Icon id="99268" size={20} />
          <Text>{starship.passengers}</Text>
        </View>
        <View style={styles.starshipStat}>
          <Icon id="8294" size={20} />
          <Text>{starship.costInCredits}</Text>
        </View>
        <View style={styles.starshipStat}>
          <Icon id="11252" size={20} />
          <Text>{starship.length}</Text>
        </View>
      </View>
    </View>
  );
}

type IconProps = {
  id: string;
  size: number;
};

function Icon({id, size = 20}: IconProps) {
  return (
    <Image
      height={size}
      width={size}
      source={{
        // Would use FontAwesome but this was quicker
        uri: `https://img.icons8.com/?size=${size * 3}&id=${id}&format=png`,
      }}
    />
  );
}

const styles = StyleSheet.create({
  starshipContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: '#00007711',
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00000044',
  },
  starshipTitle: {
    fontWeight: '500',
    fontSize: 20,
  },
  starshipStatRow: {
    flexDirection: 'row',
    gap: 16,
  },
  starshipStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default StarshipCard;
