import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native'
import React from 'react'

const ResumenList = ({res}) => {

    const renderResumen1 = (({item}) => 
    <View style={styles.tipo}>
        <Text style={{textAlign:'center'}}>{item.grupo}</Text>
    </View>
    );

    const renderResumen2 = (({item}) => 
    <View style={styles.tipo}>
        <Text style={{textAlign:'center'}}>{item.conteo}</Text>
    </View>
    );



  return (
    <View>
      <View style={styles.container}>
        <FlatList
        style={styles.list}
        data={res}
        renderItem={renderResumen1} />

        <FlatList 
        style={styles.list}
        data={res}
        renderItem={renderResumen2}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
});

export default ResumenList