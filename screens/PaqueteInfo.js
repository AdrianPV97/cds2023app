import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from "axios";

const PaqueteInfo = ({route}) => {
  const id = route.params.id.itemID;
  
  const[data, setData] = useState([]);
  const[img, setImg] = useState();
    const renderInfo = (({info}) =>{
      // <Text>{info}</Text>
    });
    const loadInfo = async () =>{
      try{
          const url = `https://d71d-2806-2f0-91a1-850d-e0ad-1c4c-139f-88c1.ngrok-free.app/donacion/${id}`;
          const response = await axios.get(url);
          setData(response.data);
          
          //console.log(response.data[0].nombre)
          //setNino(response.data);
      }catch(err){
          console.log(err);
      }
    }
  
  
    // <Text style={styles.info}> - {data.GE} - {data.indice}</Text>  
    
  

    useEffect(()=>{
      loadInfo();
    },[]);


  return (
    <View>
      <View style={{height:'80%', marginTop:100}}>

      {/* <View style={styles.ninoFoto}>
        <Image style={styles.image} source={{uri: data.fotoNinos}}/>
        
      </View> */}

      <View style={styles.titleCont}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Niño:</Text>
        <Text style={{fontSize:15}}>Aun sin asignar</Text>
      </View>

      <View style={styles.titlesTwoCont}> 
        <Text style={styles.fontTitles}>Genero/Edad</Text>  
      </View>

      <View style={styles.titlesTwoCont}> 
        <Text style={styles.info}><Text style={styles.info}>{data.GE}</Text></Text>  
      </View>

      <View style={styles.titlesTwoCont}> 
        <Text style={styles.fontTitles}>ID:</Text>  
      </View>

      <View style={styles.titlesTwoCont}> 
        <Text style={styles.info}><Text style={styles.info}>{(data.tipo)} - {data.GE} - {data.indice}</Text></Text>  
      </View>

      <TouchableOpacity style={styles.titlesTwoCont}><Text>Foto paquete</Text></TouchableOpacity>
      <TouchableOpacity style={styles.titlesTwoCont}><Text>Foto entrega</Text></TouchableOpacity> 

      </View>

      
      
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

export default PaqueteInfo