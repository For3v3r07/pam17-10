import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  TextInput, 
  Pressable, 
  Alert 
} from 'react-native';

import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


Parse.setAsyncStorage(AsyncStorage);
const Api_ID = 'yRspv6kXPp55Hl6mR2gJ841HRzusgPji2oR8v1OS';
const JS_Key = 'drRYqqOqnZ2gnL1Lyt49ivP4t9zGHnHhlIGInfA7';
Parse.initialize(Api_ID,JS_Key);
Parse.serverURL = 'https://parseapi.back4app.com/';

import 'react-native-get-random-values';

export default function Cadastrar() {
 
  return (
    <SafeAreaView style={styles.container__safe}>
      <View style={styles.container}>

        <TextInput  
          placeholder={'Produto'}
          style={styles.input}          
        />
       
        <TextInput          
          placeholder={'Valor R$0,00'}
          style={styles.input}
          numeric
          keyboardType={'numeric'}
        />

        <TextInput
          placeholder={'Quantidade'}
          style={styles.input}
          numeric
          keyboardType={'numeric'}
        />

      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container__safe:{
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 44,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
});
