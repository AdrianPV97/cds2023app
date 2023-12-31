import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState  } from 'react'
import logoS from '../assets/sempiterno.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MY_STORAGE_KEY = 'user';

const userCard = () => {

  const [value, setValue] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const storedValue = await AsyncStorage.getItem(MY_STORAGE_KEY);
      
        setValue(storedValue);
      
    } catch (e) {
    }
  };

  

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imagen} /> 
      </View>

      <View style={styles.texto}>
        <Text>{value}</Text>
        <Text style={{fontWeight:'bold'}}></Text>
      </View>

      <View>
        <Image source={logoS} style={styles.logo} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:80,
        width:'100%',
        padding:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        alignContent:'center',
        marginTop:40
        
    },
    imagen:{
        height:60,
        width:60,
        borderRadius:50,
        marginLeft:10,
        backgroundColor:'#2d2d2d'
    },
    texto:{
        height:'100%',
        width:'50%',
        fontWeight:'bold',
        textAlign:'left',
        justifyContent:'center'
    },
    logo:{
        height:50,
        width:50
    }


})


export default userCard
