import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import logoS from '../assets/sempiterno.png';
import axios from "axios";
import { senData } from '../api/login';
import {useNavigation} from '@react-navigation/native';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const send = async () =>{
        try{
            const url = 'https://d71d-2806-2f0-91a1-850d-e0ad-1c4c-139f-88c1.ngrok-free.app/login';
            const data = {
                "user":username,
                "password":password
            }
            const response = await axios.post(url, data);
            navigation.navigate("Home");
        }catch(err){
            console.log(err);
        }
    }



  return (
    <View style={styles.container}>
      <Image source={logoS} style={styles.logo} />

      <TextInput 
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
      />

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




