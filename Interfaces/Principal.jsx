import React from 'react';
import { Text, View, Image, TextInput, Button, CheckBox, ScrollView } from 'react-native';
import { estilos_estandar } from './Estilos.jsx';


export default function Registrar({ navigation }) {
  return (
    <ScrollView style={estilos_estandar.container}>
      <View style={estilos_estandar.head}>
        <Text style={estilos_estandar.title}>SmartInvest</Text>
        <Image source={require('../images/logo.jpeg')} style={estilos_estandar.logo} />
      </View>
    </ScrollView>
  );
} 
