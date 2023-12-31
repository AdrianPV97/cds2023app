import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import axios from "axios";
import UserCard from '../components/userCard';
import ResumenList from '../components/resumenList';
import ResumenpList from '../components/resumenpList';

const Resumen = () => {

  const[resumen, setResumen] = useState([]);
  const[resumen2, setResumen2] = useState([]);

  


  const loadInfo = async () =>{
    try{
        const url = `http://146.190.48.91:3000/resumen`;
        const response = await axios.get(url);
        setResumen(response.data[0]); 
    }catch(err){
        console.log(err);
    }

    
  }
  
  useEffect(()=>{
    loadInfo();
  },[]);
  
  return (
    <View>
      <UserCard />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Grupo</Text>
          <Text>Niños</Text>
          <Text>D_R</Text>
          <Text>D_X</Text>
          <Text>D_E</Text>
          <Text>D_F</Text>
        </View>
        <View style={styles.header}>
          <View style={{width:'100%'}} ><ResumenList res={resumen}/></View>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    justifyContent:'space-around',
    flexDirection:'row',
  },
  container:{
    height:'80%',
    width:'100%',
    padding:15,
    marginTop:20,
    borderRadius:25,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff'
  },
  render:{
    backgroundColor:'green',
   width:'25%'
  }
})

export default Resumen
