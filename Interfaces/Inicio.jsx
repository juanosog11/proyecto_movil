import React from 'react';
import { View, Text, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { estilos_estandar, principal } from "./Estilos.jsx";
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
    return (
        <View style={estilos_estandar.container}>
            <View style={estilos_estandar.head}>
                <Text style={estilos_estandar.title}>smartInvest</Text>
                <Image source={require('../logo.jpeg')} style={estilos_estandar.logo} />
            </View>

            {/* informacion */}

            <View style={principal.form}>
                <Text style={principal.title2}>Email: </Text>
                <TextInput style={principal.input} />
                <Text style={principal.title2}>contraseña: </Text>
                <TextInput style={principal.input} />

                <View style={principal.buttonContainer}>
                    <Button title="Inicio" onPress={() => console.log("Botón de Inicio presionado")} style={principal.button} />
                    <Button title="Registrar" onPress={() => navigation.navigate('Registrar')} style={principal.button} />
                </View>

                <View style={principal.buttonContainer}>
                    <TouchableOpacity title="" style={principal.buttonRedes} onPress={() => console.log("Botón de Facebook presionado")}>
                        <Icon name="logo-facebook" size={24} color="#3b5998" />
                    </TouchableOpacity>

                    <TouchableOpacity style={principal.buttonRedes} onPress={() => console.log("Botón de Twitter presionado")}>
                        <Icon name="logo-twitter" size={24} color="#1da1f2" />
                    </TouchableOpacity>

                    <TouchableOpacity style={principal.buttonRedes} onPress={() => console.log("Botón de Google presionado")}>
                        <Icon name="logo-google" size={24} color="#db4437" />
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
