import React from 'react';
import { Button, Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { estilosRegistrar, estilos_estandar } from "./Estilos.jsx";

export default function Perfil() {
    return (
        <ScrollView style={estilos_estandar.container}>
            <View style={estilos_estandar.head}>
                <Text style={estilos_estandar.title}>smartInvest</Text>
                <Image source={require('../logo.jpeg')} style={estilos_estandar.logo} />
            </View>
            <View style={estilosRegistrar.form}>
                <Image source={require('../images (2).jpeg')} style={estilosRegistrar.logo} />
                <Text style={estilosRegistrar.title}>Datos del Usuario</Text>
                <View style={estilosRegistrar.userData}>
                    <Text style={estilosRegistrar.userDataLabel}>Nombre y apellidos:</Text>
                    <Text>John Doe</Text>
                </View>
                <View style={estilosRegistrar.userData}>
                    <Text style={estilosRegistrar.userDataLabel}>País:</Text>
                    <Text>Estados Unidos</Text>
                </View>
                <View style={estilosRegistrar.userData}>
                    <Text style={estilosRegistrar.userDataLabel}>Acciones:</Text>
                    <Text>100</Text>
                </View>
                <View style={estilosRegistrar.userData}>
                    <Text style={estilosRegistrar.userDataLabel}>Saldo:</Text>
                    <Text>$1000</Text>
                </View>
                <View style={estilosRegistrar.userData}>
                    <Text style={estilosRegistrar.userDataLabel}>Correo:</Text>
                    <Text>example@example.com</Text>
                </View>
                <View style={estilosRegistrar.userData}>
                    <Text style={estilosRegistrar.userDataLabel}>Número:</Text>
                    <Text>+1234567890</Text>
                </View>
                <TouchableOpacity style={estilosRegistrar.button} onPress={() => console.log("Modificar información presionado")}>
                    <Text style={estilosRegistrar.buttonText}>Modificar Información</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
