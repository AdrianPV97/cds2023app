import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native'
import React from 'react'

const ResumenpList = ({res, ninos}) => {

    const renderItem2 = (({item}) =>
        <Text style={{textAlign:'center'}}>{item.conteo_paquetes}</Text>
    );

    const renderResumen2 = ((item, index, ninos) => 
    
    <View style={styles.tipo}>
        <Text style={{textAlign:'center'}}>{Math.abs(item.conteo_paquetes - ninos[index].conteo)}</Text>
    </View>
    );




  return (
    <View>
      <View style={styles.container}>

        <FlatList data={res}
        renderItem={renderItem2}/>

        <FlatList data={res}
        renderItem={({item, index}) => renderResumen2(item, index, ninos)}/>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    tipo:{
        flexDirection:'row'
    }
    });

export default ResumenpList
