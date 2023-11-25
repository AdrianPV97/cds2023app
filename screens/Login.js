import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import logoS from '../assets/sempiterno.png';
import {Picker} from '@react-native-picker/picker';
import axios from "axios";
import { senData } from '../api/login';
import {useNavigation} from '@react-navigation/native';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const send = async () =>{
        try{
            // const url = 'https://b359-38-123-196-127.ngrok-free.app/login';
            // const data = {
            //     "user":username,
            //     "password":password
            // }
            // const response = await axios.post(url, data);
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
        <Picker.Item label="Penelope Aceves" value="Penelope Aceves"/>
        <Picker.Item label="Jennifer González" value="Jennifer González"/>
        <Picker.Item label="Carlos Alvarado" value="Carlos Alvarado"/>
        <Picker.Item label="Melanny Venegas" value="Melanny Venegas"/>
        <Picker.Item label="Oscar Cortes" value="Oscar Cortes"/>
        <Picker.Item label="Adrian Paredes" value="Adrian Paredes"/>
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




