import { View, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

export default function PaqueteImagen() {
    const route = useRoute();
    const ruta = route.params.ruta;

    
    const [imagenURL, setImagenURL] = useState('');

    useEffect(() => {
        const nombreArchivo = 'nombreDeLaImagen.jpg';
        const url = `http://146.190.48.91:3000/image/${ruta}`;
        setImagenURL(url);
      }, []);
  return (
    <View>
       <Image source={{ uri: imagenURL }} style={styles.imagen} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagen: {
      width: 350,
      height: 350,
      marginTop:20,
      marginLeft:20,
      resizeMode: 'cover',
    },
  });
