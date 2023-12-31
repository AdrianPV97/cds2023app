import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react';
import  Menu from '../components/menu';
import UserCard from '../components/userCard';
import DonacionList from '../components/donacionList';
import axios from "axios";

const Donacion = () => {

  const[donacion, setDonacion] = useState([]);
  
    const loadDonacion = async () =>{
      try{
          const url = 'http://146.190.48.91:3000/donacion';
          const response = await axios.get(url);
          setDonacion(response.data);
          
      }catch(err){
          console.log(err);
      }
    }

    useEffect(()=>{
        loadDonacion();
      },[])

  return (
    <View style={{backgroundColor:'#ececec'}}>
      <View style={{marginTop:20}}><UserCard/></View>
      <View style={styles.container}>
      <DonacionList donaciones={donacion}/>
      <Menu/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:'80%',
    width:'100%',
    marginTop:10,
    paddingRight:20,
    backgroundColor:'#ffffff',
    borderTopLeftRadius:30,
    paddingTop:10,
    borderTopRightRadius:20,
},
menu:{
  height:'68%',
  width:'95%'
}
})

export default Donacion