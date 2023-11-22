import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Menu from '../components/menu';

const NinoInfo = ({route}) => {
  const id = route.params.id.itemID;
  
  const[data, setData] = useState([]);
    const renderInfo = (({info}) =>{
      // <Text>{info}</Text>
    });
    const loadInfo = async () =>{
      try{
          const url = `https://b169-2806-2f0-91a1-850d-4dd5-4ea1-dff2-c37d.ngrok-free.app/ninos/${id}`;
          const response = await axios.get(url);
          setData(response.data);
          console.log(response.data.nombre)
          //setNino(response.data);
      }catch(err){
          console.log(err);
      }
    }
  
  
  
    useEffect(()=>{
      loadInfo();
    },[]);

  return (
    <View>
      <View style={{height:'87%'}}>

      <View style={styles.ninoFoto}>
        <Image style={styles.image}/>
      </View>

      <View style={styles.titleCont}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{data.nombre}</Text>
      </View>

      <View style={styles.titlesTwoCont}> 
        <Text style={styles.fontTitles}>Genero</Text>  
        <Text style={styles.fontTitles}>Edad</Text> 
      </View>

      <View style={styles.titlesTwoCont}> 
        <Text style={styles.info}>Masculino</Text>  
        <Text style={styles.info}>22 años</Text> 
      </View>

      <View style={styles.titlesTwoCont}> 
        <Text >Prioridad</Text>  
        <Text>Condicion</Text> 
      </View>

      <View style={styles.titlesTwoCont}> 
        <Text style={styles.info}>1</Text>  
        <Text style={styles.info}>Informacion sobre la condicion del niño</Text> 
      </View>

      <View style={styles.titlesTwoCont}>
        <Text>Direccion</Text>
      </View>

      <View style={styles.titlesTwoCont}>
        <Text style={styles.info}>{data.domicilio}</Text>
      </View>

      <View style={styles.titlesTwoCont}>
        <Text>ID Regalo</Text>
      </View>

      <View style={styles.titlesTwoCont}>
        <Text style={styles.info}>M10-J-01</Text>
      </View>

      </View>

      <Menu/>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  ninoFoto:{
    height:150,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    height:120,
    width:120,
    borderRadius:100,
    backgroundColor:'red',
  },
  titleCont:{
    height:50,
    width:'100%',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  titlesTwoCont:{
    height:40,
    width:'100%',
    flexDirection:'row',
    paddingLeft:30,
    paddingRight:100,
    alignItems:'center',
    justifyContent:'space-between'
  },
  titlesSingleCont:{

  },
  fontTitles:{
    fontSize:18,
  },
  info:{
    borderRadius:50,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:2,
    paddingBottom:2,
    backgroundColor:'white'
  }
})

export default NinoInfo