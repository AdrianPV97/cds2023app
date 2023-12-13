import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import logoS from '../assets/sempiterno.png';
import {Picker} from '@react-native-picker/picker';
import axios from "axios";
import { senData } from '../api/login';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MY_STORAGE_KEY = 'user';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();


    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem(MY_STORAGE_KEY, value);
      } catch (e) {
        console.log("Login error: ", e);
      }
    };

    const send = async () =>{
        try{
            await storeData(selectedUser);
            navigation.navigate("Home", {selectedUser});
        }catch(err){
            console.log(err);
        }
    }


    const [selectedUser, setSelectedUser] = useState('Penelope Aceves');
  return (
    <View style={styles.container}>
      <Image source={logoS} style={styles.logo} />


      <Picker
      style={{marginTop:30, width:'80%', textAlign:'center', marginTop:50}}
      selectedValue={selectedUser}
      onValueChange={(itemValue, itemIdex) => setSelectedUser(itemValue)}
      >
        <Picker.Item label="Jennifer González" value="Jennifer González"/>
        <Picker.Item label="Carlos Alvarado" value="Carlos Alvarado"/>
        <Picker.Item label="Melanny Venegas" value="Melanny Venegas"/>
        <Picker.Item label="Oscar Cortes" value="Oscar Cortes"/>
        <Picker.Item label="Ulises Ibarra" value="Ulises Ibarra"/>
        <Picker.Item label="Evenly Velazco" value="Evenly Velazco"/>
        <Picker.Item label="Jan" value="Jan"/>
        <Picker.Item label="Otro" value="Otro"/>
      </Picker>
      {/* <TextInput 
        style={styles.input}
        placeholder='Correo electronico'
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <TextInput
        style={styles.input}
        placeholder='contraseña'
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true} // Esto oculta la entrada del texto
      /> */}

      <Button title='Iniciar Sesion' style={styles.button} onPress={send}/>


    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    logo:{
        width:100,
        height:100,
        marginBottom:30
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
        width: '70%',
        borderRadius:5
    },
    button:{
        width:'70%',
        color:'green'
    }
})

export default Login




