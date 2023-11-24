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
        const url = 'https://d71d-2806-2f0-91a1-850d-e0ad-1c4c-139f-88c1.ngrok-free.app/ninoss';
        const response = await axios.get(url);
        //navigation.navigate("MainScreen");
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
      {/* <NinosList usuario={nn}/> */}
    </View>
  )
}

export default MainView