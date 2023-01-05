
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const styles = StyleSheet.create({
  container: {

  },
  tinyLogo: {
    width: 90,
    height: 90,
    backgroundColor:'transparent',
    marginBottom:30
  },
});

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://logospng.org/download/react/logo-react-512.png'
        }}
      />
    </View>
  );
}

export default Logo;


