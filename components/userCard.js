import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import logoS from '../assets/sempiterno.png';

const userCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imagen} /> 
      </View>

      <View style={styles.texto}>
        <Text>Bienvenido</Text>
        <Text style={{fontWeight:'bold'}}>Adrian Paredes</Text>
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
        alignContent:'center'
        
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