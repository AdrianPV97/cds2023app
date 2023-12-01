import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from "axios";


import UserCard from '../components/userCard';
import NinosList from '../components/ninosList';
import Ninos from '../components/ninos';

const Home = () => {
    

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
    },[]);


  return (
    <View>
      <UserCard />
      <Ninos />
    </View>
  )
}

export default Home