import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { estilos_estandar } from "./Estilos.jsx";

export default function Registrar() {
    return (
        <ScrollView>
            <View style={estilos_estandar.head}>
                <Text style={estilos_estandar.title}>smartInvest</Text>
                <Image source={require('../logo.jpeg')} style={estilos_estandar.logo} />
            </View>
            <View>
                <Image source={require('../images (2).jpeg')} style={estilos_estandar.logo} />
                <Text> Nombre y apellidos </Text>
                <Text> Pais </Text>
                <Text> Acciones </Text>
                <Text> Saldo </Text>
                <Text> Nombre y apellidos </Text>
                <Text> Nombre y apellidos </Text>
                <Text> Nombre y apellidos </Text>
                <Text> Nombre y apellidos </Text>
                <Text> Nombre y apellidos </Text>
                <Text> Nombre y apellidos </Text>
                <Text> Nombre y apellidos </Text>
            </View>
        </ScrollView>
    );
}
