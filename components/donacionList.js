import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native'
import React, { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import PaqueteInfo from '../screens/PaqueteInfo';
import Sort from '../resources/icons/sort.png';


const DonacionList = ({donaciones}) => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [filteredDonaciones, setFilteredDonaciones] = useState(donaciones);

    useEffect(() => {
        // Filtrar usuarios basándose en el texto ingresado
        const filteredDonaciones = donaciones.filter((paquete) =>
        paquete.grupo.toLowerCase().includes(searchText.toLowerCase()) ||
        paquete.tipo.toLowerCase().includes(searchText.toLowerCase())
        );
        
        setFilteredDonaciones(filteredDonaciones);
      }, [searchText, donaciones]);

    const viewInfo = function(id){
        console.log(id)
        navigation.navigate("PaqueteInfo", {id}); 
    }
    
    const renderItem = (({item})=>
        <TouchableOpacity style={styles.button} onPress={() => viewInfo({itemID: item.id})} >
            <View style={styles.tipo}>
                <Text>{item.id}</Text>
            </View>
            
            <View style={styles.mainInfo}>
            <Text>{item.tipo}</Text>
            <Text>{item.voluntario}</Text>
            <Text style={{fontSize:10}}>{item.grupo} - {(item.tipo).charAt(0)} - {item.indice}</Text>
            </View>
            
            <View style={styles.group}>
            <Text>{item.grupo}</Text>
            </View>
        </TouchableOpacity>
    );

  return (
    <View style={{height:'85%'}}>
        <View>
            <Text style={styles.title}>Donaciones</Text>
        </View>

        <View style={styles.search}>
            <TextInput 
                placeholder='Buscar'
                style={styles.busquedaInput}
                value={searchText}
                onChangeText={(text) => setSearchText(text)} 
            />
        </View>
        
      <FlatList style={styles.container}
      data={filteredDonaciones}
      keyExtractor={(item) => item.id}
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
        width:'90%',
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


export default DonacionList