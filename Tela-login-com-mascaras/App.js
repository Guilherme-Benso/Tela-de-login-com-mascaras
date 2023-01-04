import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='(99) 99999-9999'
      style={styles.input}
      keyboardType='numeric'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:'90%',
    height:40,
    backgroundColor:'#ddd',
    borderRadius:5,
    fontSize:20,
    padding:5,
  }
});
