import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import axios from "axios";

const Resumen = () => {

  const[data, setData] = useState([]);

  const loadInfo = async () =>{
    try{
        const url = `https://cds2023-young-silence-2831.fly.dev/donacion/${id}`;
        const response = await axios.get(url);
        setData(response.data);
        
        //console.log(response.data[0].nombre)
        //setNino(response.data);
    }catch(err){
        console.log(err);
    }
  }
  useEffect(()=>{
    loadInfo();
  },[])

  return (
    <View>
      <View style={styles.container}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:'80%',
    width:'100%',
    padding:30,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Resumen