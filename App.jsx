import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Interfaces/Inicio.jsx';
import Perfil from './Interfaces/Perfil.jsx'
import Registrar from './Interfaces/Registrar.jsx';
import Inicio from './Interfaces/Inicio.jsx'
import Principal from './Interfaces/Principal.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Perfil' component={Perfil} options={{ headerShown: false }} />
        <Stack.Screen name='Registrar' component={Registrar} options={{ headerShown: false }} />
        <Stack.Screen name='Inicio' component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name='Principal' component={Principal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
