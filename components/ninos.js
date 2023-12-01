import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import NinosList from './ninosList';
import Menu from './menu';
import axios from "axios";


const Ninos = () => {

    const[nn, setNino] = useState([]);
  
    const loadNinos = async () =>{
      try{
          const url = 'http://146.190.48.91:3000/ninos';
          const response = await axios.get(url);
          
          setNino(response.data);
      }catch(err){
          console.log(err);
      }
    }

    useEffect(()=>{
        loadNinos();
      },[])


  return (
    <View style={styles.container}>
        <NinosList usuario={nn}/>
        <Menu />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height:'83%',
        width:'100%',
        marginTop:10,
        paddingRight:20,
        backgroundColor:'#ffffff',
        borderTopLeftRadius:30,
        paddingTop:10,
        borderTopRightRadius:20,
    }
})

export default Ninos