import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Home from '../resources/icons/home.png';
import Dona from '../resources/icons/donate.png';
import Camera from '../resources/icons/scanner.png';
import Entrega from '../resources/icons/delivered.png';
import Resumen from '../resources/icons/resume.png';
//const navigation = useNavigation();


const Menu = ({user}) => {
    const navigation = useNavigation();
    const nav = function(opt){
        //console.log(opt)
        navigation.navigate(opt);
    }

  return (
    <View style={styles.menuCont}>
      <TouchableOpacity style={styles.button} onPress={()=> nav("Home")}>
        <Image style={styles.icon} source={Home} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> nav("Donacion")}>
        <Image style={styles.icon} source={Dona}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cammeraButton} onPress={()=> nav("Camera")}>
        <Image style={styles.icon} source={Camera}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> nav("Entrega")}>
        <Image style={styles.icon} source={Entrega}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> nav("Resumen")}>
        <Image style={styles.icon} source={Resumen}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    menuCont:{
        height:'12%',
        width:'100%',
        marginLeft:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    button:{
        height:'65%',
        width:'18%',
    },
    icon:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'contain'
    },
    cammeraButton:{
        height:'100%',
        width:'22%',
        padding:10,
        borderRadius:50,
        backgroundColor:'#FEDC33'
    },
});

export default Menu