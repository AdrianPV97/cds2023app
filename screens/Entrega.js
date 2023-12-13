import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import UserCard from '../components/userCard';
import {Picker} from '@react-native-picker/picker';

const Entrega = () => {
  return (
    <View>
      <UserCard />

      <Text style={styles.h1}>Entrega</Text>

      <View style={styles.container}>
        <Picker style={{marginTop:5, width:'80%', textAlign:'center'}}>
          <Picker.Item label="Estado / Municipio" value="Estado / Municipio"/>
        </Picker>

        <Picker style={{marginTop:5, width:'80%', textAlign:'center'}}>
          <Picker.Item label="Colonia" value="Colonia"/>
        </Picker>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  h1:{
    fontSize:25,
    fontWeight:'bold',
    marginLeft:20,
    marginTop:30
  }
})

export default Entrega