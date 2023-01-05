import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback
} from 'react-native';





export default function App() {

  //escondendo o teclado



  const [cell, setCell] = useState("");
  const [cpf, setCpf] = useState("");


  function cadastrado() {
    Alert("cadastro concluído com sucesso!r")
  }

  return (



    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
    <View style={styles.container}>
      <Text> Digite seu celular </Text>
      
        <TextInputMask
          style={styles.input}
          type={"cel-phone"}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          value={cell}
          onChangeText={text => setCell(text)}

        />
     
      <Text> Digite o seu CPF </Text>

        <TextInputMask
          style={styles.input}
          type={"cpf"}
          value={cpf}
          onChangeText={text => setCpf(text)}
        />

    
      <View style={styles.buttonView}>

        <TouchableOpacity
          style={styles.cadastradoBtn}

        >
          <Text style={styles.title}
            onPress={cadastrado}
          >
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>


    </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 5,
    fontSize: 20,
    padding: 5,
    marginTop: 6,
    marginBottom: 20,
    position:'relative'
  },
  buttonView: {
    width: "90%",
    marginTop: 20

  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  cadastradoBtn: {
    height: 40,
    width: '100%',
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
