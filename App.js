import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import logoS from './assets/sempiterno.png';

import Login from './screens/Login';
import Home from './screens/Home';
import NinosInfo from './screens/NinoInfo';
import PaqueteInfo from './screens/PaqueteInfo';
import Donacion from './screens/Donacion';
import Camera from './screens/Scanner';
import Entrega from './screens/Entrega';
import Resumen from './screens/Resumen';
import RegPaquete from './screens/RegPaquete';
import Confirm from './screens/Confirm';
import PaqueteImagen from './screens/PaqueteImagen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name='Login' component={Login} options={{
          headerShown: false
        }}/>
        
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false
        }}/>
      
        <Stack.Screen name='NinosInfo' component={NinosInfo} }/>
  
        <Stack.Screen name='PaqueteInfo' component={PaqueteInfo} />

        <Stack.Screen name='Donacion' component={Donacion} options={{
          headerShown: false 
        }}/>

        <Stack.Screen name='Entrega' component={Entrega} options={{
          headerShown: false 
        }}/>

        <Stack.Screen name='Resumen' component={Resumen} /> 

        <Stack.Screen name='Camera' component={Camera} options={{
          headerShown: false 
        }}/> 

      <Stack.Screen name='RegPaquete' component={RegPaquete} options={{
          headerShown: false 
        }}/> 

        
        <Stack.Screen name='Confirm' component={Confirm} options={{
          headerShown: false 
        }}/> 

      <Stack.Screen name='PaqueteImagen' component={PaqueteImagen} /> 

        
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo:{
    width:37,
    height:37
  }
})
