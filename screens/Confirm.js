import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from "axios";

const Confirm = () => {


  const[data, setData] = useState(null);
  const loadInfo = async () =>{
    try{
        const url = `http://146.190.48.91:3000/paqueteid`;
        const response = await axios.get(url);
        //console.log(response.data)
        setData(response.data);
    }catch(err){
        console.log("Erros");
    }
  }

  useEffect(()=>{
    loadInfo();
  },[]);


    const navigation = useNavigation();
    const send = () =>{    
      
              navigation.navigate("Donacion");
        }


  return (
    <View>
      <View style={styles.mainCont}>
        <Text style={styles.titles}>paquete guardado con exito :D</Text>

        {data ? (
          <Text>{data.grupo} - {data.tipo.charAt(0)} - {data.indice}</Text>
          ) : (
          <Text>cargando</Text> 
          )}

        <TouchableOpacity style={styles.button} onPress={send}>
            <Text style={{fontWeight:'bold', fontSize:20}}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainCont:{
        height:'90%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        marginTop:50
    },
    titles:{
        fontSize:25,
        fontWeight:'bold',
        color:'green'
    },
    button:{
        height:50,
        width:'80%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:20,
        backgroundColor:'#FEDC33'
    }
});


export default Confirm