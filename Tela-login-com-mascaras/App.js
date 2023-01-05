import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Logo from './src/Images/Logo';




export default function App() {

  //escondendo o teclado

  const logo = URL

  const [cell, setCell] = useState("");
  const [cpf, setCpf] = useState("");


  function cadastrado() {
    Alert("cadastro concluído com sucesso!");
  }



  return (



    <TouchableWithoutFeedback

      onPress={() => {
        Keyboard.dismiss()
      }}>

      <View
        style={styles.container}
      >


        <ScrollView

          style={styles.scrollView}
        >
          <View
            style={styles.box}
          >
            <View>
              <Logo />

            </View>
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
                onPress={cadastrado}
              >
                <Text style={styles.title}
                  
                >
                  Cadastrar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>


    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  box: {
    alignItems: 'center',
    paddingTop:120,
    height:780
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
    position: 'relative'
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
  },
  logo: {
    height: 50,
    width: 50
  }
});
