import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

type StarshipProps = {
  starship: Starship;
};

function Starship({starship}: StarshipProps): JSX.Element {
  return (
    <ImageBackground
      source={{uri: 'https://wallpapercave.com/wp/wp3654351.jpg'}}
      imageStyle={{opacity: 0.06}}
      style={styles.starshipContainer}>
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
    </ImageBackground>
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

export default Starship;
