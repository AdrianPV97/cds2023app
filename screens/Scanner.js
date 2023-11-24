import { View, Text, TouchableOpacity , StyleSheet, Image } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CamerButton from '../components/camerButton';
import { Button } from '@rneui/base';
import RegPaquete from './RegPaquete';
import {useNavigation} from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';



import FormData from 'form-data';
import axios from 'axios';




const Scanner = () => {
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(()=>{
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async ()=>{
    if(cameraRef){
      try {
        const data = await cameraRef.current.takePictureAsync({ quality: 0.1 });
        setImage(data.uri);
  
        // Convierte la imagen a base64
        const base64Image = await convertImageToBase64(data.uri);
        setImage(base64Image)
        //console.log(base64Image); // Aquí puedes ver el código base64 en la consola
  
      } catch (err) {
        console.error(err);
      }
    }
  }

  const convertImageToBase64 = async (imageUri) => {
    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return base64;
  };
  

  const senFile = async (file)=>{
    try{
      //await MediaLibrary.createAssetAsync(file);
      const response = await axios.post('https://d71d-2806-2f0-91a1-850d-e0ad-1c4c-139f-88c1.ngrok-free.app/donacion', {
      data:file
        });
      //alert('Picture saved');
      //setImage(null)
      //console.log(response.data)
      if(response.status === 200){
        const imgSaved = response.data;
        navigation.navigate("RegPaquete", {imgSaved});
      }else{
        alert('Error, vuelve a intentar');
        setImage(null)
      }
    
      
    }catch(err){
      console.log(err)
    }
    
  }

  if(hasCameraPermission === false){
    return <Text>No acces to camera</Text>
  }
  return (
    <View style={styles.container}>
      {!image ? (
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      >

      </Camera>

      ):(
      <Image source={{ uri: image }} style={styles.camera}/>
    )}
      <View>
        {image ? 
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:50, 
        }}>
          <Button title={"Re-Take"} icon="retweet" onPress={()=> setImage(null)}/>
          <Button title={"Save"} icon="check" onPress={() => senFile(image)}/>
        </View>
        :
        <CamerButton title={'Take a picture'} icon="camera" onPress={takePicture}/>
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
    justifyContent:'center',
    paddingBottom:30
  },
  camera:{
    flex:1,
    borderRadius:20,
  }
})

export default Scanner