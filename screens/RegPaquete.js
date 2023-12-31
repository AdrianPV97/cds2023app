import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserCard from '../components/userCard';
import {Picker} from '@react-native-picker/picker';
import axios from "axios";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MY_STORAGE_KEY = 'user';

const RegPaquete = ({route}) => {
  const [selectedGroup, setSelectedGroup] = useState('F1');
  const [selectedTipo, setSelectedTipo] = useState('Juguetes');
  const [register, setRegister] = useState('null');
  const imgSaved = route.params.imgSaved;
  const navigation = useNavigation();
  
  const send = async () =>{

    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem(MY_STORAGE_KEY, value);
      } catch (e) {
        console.log("Login error: ", e);
      }
    };
    
    try{
        const url = 'http://146.190.48.91:3000/registropaquete';
        const data = {
            "foto":imgSaved,
            "group":selectedGroup,
            "tipo": selectedTipo,
            "voluntario":MY_STORAGE_KEY
        }
        const response = await axios.post(url, data);
        
        if(response.status === 200){
          setRegister('success');
          navigation.navigate("Confirm", {selectedGroup, selectedTipo});
        }
        
    }catch(err){
        console.log(err);
    }
}

useEffect(()=>{
  loadNinos();
},[]);

  return (
    <View>
      <View style={{marginTop:30}}><UserCard/></View>
      
      <View style={styles.formContainer}>
        <Text style={styles.title}>Imagen registrada correctamente</Text>
        <Text style={styles.secondText}>Completa los siguientes datos para el registro</Text>

        <Picker
        style={{marginTop:5, width:'80%', textAlign:'center'}}
        selectedValue={selectedGroup}
        onValueChange={(itemValue, itemIdex) => setSelectedGroup(itemValue)}
        >
          <Picker.Item label="F0" value="F0"/>
          <Picker.Item label="F1" value="F1"/>
          <Picker.Item label="F2" value="F2"/>
          <Picker.Item label="F3" value="F3"/>
          <Picker.Item label="F4" value="F4"/>
          <Picker.Item label="F5" value="F5"/>
          <Picker.Item label="F6" value="F6"/>
          <Picker.Item label="F7" value="F7"/>
          <Picker.Item label="F8" value="F8"/>
          <Picker.Item label="F9" value="F9"/>
          <Picker.Item label="F10" value="F10"/>
          <Picker.Item label="F11" value="F11"/>
          <Picker.Item label="F12" value="F12"/>

          <Picker.Item label="M0" value="M0"/>
          <Picker.Item label="M1" value="M1"/>
          <Picker.Item label="M2" value="M2"/>
          <Picker.Item label="M3" value="M3"/>
          <Picker.Item label="M4" value="M4"/>
          <Picker.Item label="M5" value="M5"/>
          <Picker.Item label="M6" value="M6"/>
          <Picker.Item label="M7" value="M7"/>
          <Picker.Item label="M8" value="M8"/>
          <Picker.Item label="M9" value="M9"/>
          <Picker.Item label="M10" value="M10"/>
          <Picker.Item label="M11" value="M11"/>
          <Picker.Item label="M12" value="M12"/>
        </Picker>
        

        <Picker
        style={{marginTop:5, width:'90%', textAlign:'center'}}
        selectedValue={selectedTipo}
        onValueChange={(itemValue, itemIdex) => setSelectedTipo(itemValue)}
        >
          <Picker.Item label="Juguetes" value="Juguetes"/>
          <Picker.Item label="Libros" value="Libros"/>
          <Picker.Item label="Ropa" value="Ropa"/>
          <Picker.Item label="Zapatos" value="Zapatos"/>
          <Picker.Item label="Kit Completo" value="Kit Completo"/>
          <Picker.Item label="Otro" value="Otro"/>    
        </Picker>

        <TouchableOpacity style={styles.button} onPress={send}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Registrar</Text>
        </TouchableOpacity>

        <View>
          {(register === 'success') ? 
          <Text style={{marginTop:20, color:'green'}}>Registrado correctamente :D</Text>
          : 
          <Text></Text>
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer:{
    height:'60%',
    width:'100%',
    marginTop:30,
    borderRadius:20,
    paddingTop:50,
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  title:{
    fontSize:18,
    fontWeight:'bold'
  },
  secondText:{
    fontSize:15
  },
  button:{
    height:60,
    width:'70%',
    marginTop:50,
    borderRadius:50,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FEDC33'
  }
});

export default RegPaquete
