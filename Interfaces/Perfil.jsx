import React from 'react';
import { Button, Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { estilosPerfil, estilos_estandar } from "./Estilos.jsx";

export default function Perfil() {
    return (
        <ScrollView style={estilos_estandar.container}>
            <View style={estilos_estandar.head}>
                <Text style={estilos_estandar.title}>smartInvest</Text>
                <Image source={require('../images/logo.jpeg')} style={estilos_estandar.logo} />
            </View>
            <View style={estilosPerfil.form}>
                <Image source={require('../images/images (2).jpeg')} style={estilosPerfil.logo} />
                <Text style={estilosPerfil.title}>Datos del Usuario</Text>
                <View style={estilosPerfil.userData}>
                    <Text style={estilosPerfil.userDataLabel}>Nombre y apellidos:</Text>
                    <Text>John Doe</Text>
                </View>
                <View style={estilosPerfil.userData}>
                    <Text style={estilosPerfil.userDataLabel}>País:</Text>
                    <Text>Estados Unidos</Text>
                </View>
                <View style={estilosPerfil.userData}>
                    <Text style={estilosPerfil.userDataLabel}>Acciones:</Text>
                    <Text>100</Text>
                </View>
                <View style={estilosPerfil.userData}>
                    <Text style={estilosPerfil.userDataLabel}>Saldo:</Text>
                    <Text>$1000</Text>
                </View>
                <View style={estilosPerfil.userData}>
                    <Text style={estilosPerfil.userDataLabel}>Correo:</Text>
                    <Text>example@example.com</Text>
                </View>
                <View style={estilosPerfil.userData}>
                    <Text style={estilosPerfil.userDataLabel}>Número:</Text>
                    <Text>+1234567890</Text>
                </View>
                <TouchableOpacity style={estilosPerfil.button} onPress={() => console.log("Modificar información presionado")}>
                    <Text style={estilosPerfil.buttonText}>Modificar Información</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
