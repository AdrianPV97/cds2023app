import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import NinosList from './ninosList';
import Menu from './menu';
import axios from "axios";
import NetInfo from '@react-native-community/netinfo';
import SQLite from 'react-native-sqlite-storage';

// Abrir o crear la base de datos local
const db = SQLite.openDatabase({name: 'exampleDB', location: 'default'});

// Crear la tabla de niños si no existe
db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS ninos (id INTEGER PRIMARY KEY, nombre TEXT, colonia TEXT, municipio TEXT, estado TEXT, genero TEXT, edad INTEGER)',
    [],
    (tx, result) => {
      console.log('Tabla creada con éxito');
    },
    (tx, error) => {
      console.log('Error al crear la tabla', error);
    },
  );
});

// Función para insertar un niño en la base de datos local
const insertNino = (nino) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO ninos (id, nombre, colonia, municipio, estado, genero, edad) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        nino.id,
        nino.nombre,
        nino.colonia,
        nino.municipio,
        nino.estado,
        nino.genero,
        nino.edad,
      ],
      (tx, result) => {
        console.log('Niño insertado con éxito');
      },
      (tx, error) => {
        console.log('Error al insertar el niño', error);
      },
    );
  });
};

// Función para obtener todos los niños de la base de datos local
const getNinos = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM ninos',
        [],
        (tx, result) => {
          // Convertir el resultado en un array de objetos
          let ninos = [];
          for (let i = 0; i < result.rows.length; i++) {
            ninos.push(result.rows.item(i));
          }
          // Resolver la promesa con el array de niños
          resolve(ninos);
        },
        (tx, error) => {
          // Rechazar la promesa con el error
          reject(error);
        },
      );
    });
  });
};

// Función para verificar si hay modificaciones en el local storage
const checkModifications = async () => {
  // Obtener los niños del local storage
  let localNinos = await getNinos();
  // Obtener los niños de la base de datos en la nube
  let url = 'http://146.190.48.91:3000/ninos';
  let response = await axios.get(url);
  let cloudNinos = response.data;
  // Comparar los dos arrays de niños
  if (JSON.stringify(localNinos) !== JSON.stringify(cloudNinos)) {
    // Si hay diferencias, actualizar el local storage con los datos de la nube
    // Primero, borrar la tabla de niños
    db.transaction((tx) => {
      tx.executeSql(
        'DROP TABLE ninos',
        [],
        (tx, result) => {
          console.log('Tabla borrada con éxito');
        },
        (tx, error) => {
          console.log('Error al borrar la tabla', error);
        },
      );
    });
    // Segundo, crear la tabla de nuevo
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE ninos (id INTEGER PRIMARY KEY, nombre TEXT, colonia TEXT, municipio TEXT, estado TEXT, genero TEXT, edad INTEGER)',
        [],
        (tx, result) => {
          console.log('Tabla creada con éxito');
        },
        (tx, error) => {
          console.log('Error al crear la tabla', error);
        },
      );
    });
    // Tercero, insertar los niños de la nube en la tabla
    for (let nino of cloudNinos) {
      insertNino(nino);
    }
  }
};

const Ninos = () => {

    const[nn, setNino] = useState([]);
  
    const loadNinos = async () =>{
      try{
          // Verificar la conexión a internet
          let state = await NetInfo.fetch();
          let isConnected = state.isInternetReachable;
          if (isConnected) {
            // Si hay conexión, verificar si hay modificaciones en el local storage
            await checkModifications();
            // Obtener los niños de la base de datos en la nube
            const url = 'http://146.190.48.91:3000/ninos';
            const response = await axios.get(url);
            // Actualizar el estado con los niños de la nube
            setNino(response.data);
          } else {
            // Si no hay conexión, obtener los niños de la base de datos local
            let ninos = await getNinos();
            // Actualizar el estado con los niños locales
            setNino(ninos);
          }
      }catch(err){
          console.log(err);
      }
    }

    useEffect(()=>{
        loadNinos();
      },[])


  return (
    <View style={styles.container}>
        <NinosList usuario={nn}/>
        <Menu />
    </View>
  )
}
