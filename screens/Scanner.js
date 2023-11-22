import { View, Text, TouchableOpacity , StyleSheet, Image } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CamerButton from '../components/camerButton';
import { Button } from '@rneui/base';

import FormData from 'form-data';
import axios from 'axios';




const Scanner = () => {
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
      try{
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      }catch(err){

      }
    }
  }

  const senFile = async (file)=>{
    console.log(file)
    const formData = new FormData();
    formData.append('file', {
      uri:file,
      type:'image/jpeg'
    });
        
    const response = await axios.post('https://b169-2806-2f0-91a1-850d-4dd5-4ea1-dff2-c37d.ngrok-free.app/donacion', formData, {headers:{
      'Content-Type':'multipart/form-data',
    },});

    console.log(response);
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