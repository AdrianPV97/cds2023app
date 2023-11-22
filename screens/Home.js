import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from "axios";

//Componentes

import UserCard from '../components/userCard';
import NinosList from '../components/ninosList';
//import Ninos from '../api/ninos';
import Ninos from '../components/ninos';

const Home = () => {

    const[nn, setNino] = useState([]);
  
    const loadNinos = async () =>{
      try{
          const url = 'https://b169-2806-2f0-91a1-850d-4dd5-4ea1-dff2-c37d.ngrok-free.app/ninoss';
          const response = await axios.get(url);
          //navigation.navigate("MainScreen");
          setNino(response.data);
      }catch(err){
          console.log(err);
      }
    }
  
  
  
    useEffect(()=>{
      loadNinos();
    },[]);


  return (
    <View>
      <UserCard />
      <Ninos/>
    </View>
  )
}

export default Home