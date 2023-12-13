import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native'
import React from 'react'

const ResumenList = ({res}) => {

    const renderResumen = (({item}) => 
    <View style={styles.row}>
        <View style={styles.dato}>
          <Text style={{textAlign:'center'}}>{item.grupo}</Text>
        </View>

        <View style={styles.dato}>
          <Text style={{textAlign:'center'}}>{item.cantidad_ninos}</Text>
        </View>

        <View style={styles.dato}>
          <Text style={{textAlign:'center'}}>{item.d_r}</Text>
        </View>

        <View style={styles.dato}>
          <Text style={{textAlign:'center'}}>{item.d_x}</Text>
        </View>

        <View style={styles.dato}>
          <Text style={{textAlign:'center'}}>{item.d_entregados}</Text>
        </View>

        <View style={styles.dato}>
          <Text style={{textAlign:'center'}}>{item.d_faltantes}</Text>
        </View>
        
  
    </View>
    );





  return (
    <View>
      <View style={styles.container}>
        <FlatList
        style={styles.list}
        data={res}
        renderItem={renderResumen} />

       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    row:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around'
    },
    dato:{
      width:'16.5%'
    }
});

export default ResumenList