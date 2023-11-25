import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from "axios";

//Componentes

import UserCard from '../components/userCard';
import NinosList from '../components/ninosList';
//import Ninos from '../api/ninos';
import Ninos from '../components/ninos';

const Home = () => {
    

//    console.log(voluntario);
    const[nn, setNino] = useState([]);
  
    const loadNinos = async () =>{
      try{
          const url = 'https://cds2023-young-silence-2831.fly.dev/ninos';
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
      <Ninos />
    </View>
  )
}

export default Home