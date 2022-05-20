import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContatosScreen from './components/Contatos';
import CadastroScreen from './components/Cadastro';
import HomeScreen from './components/Login';
import CadastroContatosScreen from './components/CadastroContato';
import EditaContatos from './components/EditarContato';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const Stack = createNativeStackNavigator();

const firebaseConfig = {
    apiKey: "AIzaSyCAd6lDV9a9HERdKaEijnRRUWgeZI-SspQ",
    authDomain: "aulamobile-c4232.firebaseapp.com",
    projectId: "aulamobile-c4232",
    storageBucket: "aulamobile-c4232.appspot.com",
    messagingSenderId: "614036773871",
    appId: "1:614036773871:web:fa9269b2c5841e583bb41a",
    measurementId: "G-Q49FVJ63WV"
};


function App() {

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Contatos" component={ContatosScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CadastroContatos" component={CadastroContatosScreen} options={{ headerShown: false }} />
            <Stack.Screen name="EditaContatos" component={EditaContatos} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
    );
    }

export default App;

