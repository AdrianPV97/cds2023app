import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native'
import React from 'react'
import Sort from '../resources/icons/sort.png';
import {useNavigation} from '@react-navigation/native';

import NinoInfo from '../screens/NinoInfo';

const ninosList = ({usuario}) => {
    
    

    const navigation = useNavigation();
    
    const viewInfo = function(id){
        console.log(id)
        navigation.navigate("NinosInfo", {id}); 
    }
    
    
    const renderItem = (({item}) => 

        <TouchableOpacity style={styles.button} onPress={() => viewInfo({itemID: item.id})}>
            <View style={styles.tipo}>
                <Text>{item.id}</Text>
            </View>
            
            <View style={styles.mainInfo}>
            <Text>{item.nombre}</Text>
            <Text style={{fontSize:10}}>{item.colonia}, {item.municipio}</Text>
            <Text>{item.estado}</Text>
            </View>
            
            <View style={styles.group}>
            <Text>{((item.genero).charAt(0)).toUpperCase()}{item.edad}</Text>
            </View>
        </TouchableOpacity>
    );

  return (
    <View style={{height:'85%'}}>
        <View>
            <Text style={styles.title}>Registros</Text>
        </View>
        
        <View style={styles.search}>
            <TextInput 
                placeholder='Buscar'
                style={styles.busquedaInput}
            />

            <TouchableOpacity style={styles.filtro}>
                <Image style={styles.icon} source={Sort}/>
            </TouchableOpacity>
        </View>
      <FlatList style={styles.container}
      data={usuario}
      renderItem={renderItem}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:20,
    },
    title:{
        fontSize:30,
        marginLeft:20,
        marginBottom:20,
        fontWeight:'bold'
    },
    search:{
        height:70,
        width:'100%',
        marginLeft:10,
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    busquedaInput:{
        height:'90%',
        width:'70%',
        borderRadius:50,
        paddingLeft:20,
        backgroundColor:'#ececec'
    },
    filtro:{
        height:70,
        width:70,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#a4c770'
    },
    button:{
        width:'95%',
        height:80,  
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
         
    },
    tipo:{
        height:70,
        width:70,
        backgroundColor:'#dadada',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
    },
    mainInfo:{
        height:'100%',
        width:'45%',
        alignItems:'center',
        justifyContent:'space-between'
    },
    group:{
        height:'100%',
        width:'10%',
        fontWeight:'bold'
    },
    icon:{
        height:50,
        width:50,
        opacity:0.5
    }
});

export default ninosList