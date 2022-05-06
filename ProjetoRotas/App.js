import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContatosScreen from './components/Contatos';
import CadastroScreen from './components/Cadastro';
import HomeScreen from './components/Login';
import CadastroContatosScreen from './components/CadastroContato';
import EditaContatos from './components/EditarContato';


const Stack = createNativeStackNavigator();

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

