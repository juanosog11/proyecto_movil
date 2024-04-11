import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Interfaces/Inicio.jsx';
import Perfil from './Interfaces/Perfil.jsx'
import Registrar from './Interfaces/Registrar.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Perfil' component={Perfil} options={{ headerShown: false }} />
        <Stack.Screen name='Registrar' component={Registrar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
