import { View, Text, StyleSheet } from 'react-native';
import Ninos from '../components/ninos';
import UserCard from '../components/userCard';
import NinosList from '../components/ninosList';
import { getNinos } from '../api/ninos';
import React, { useEffect, useState } from 'react';
import axios from "axios";

const MainView = () => {

  const[nn, setNino] = useState([]);
  
  const loadNinos = async () =>{
    try{
        const url = 'http://146.190.48.91:3000/ninoss';
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
    <View style={{marginTop:50, backgroundColor:'#ececec'}}>
      <UserCard />
      <Ninos/>
    </View>
  )
}

export default MainView