import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Header, Input, Image, Avatar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function CadastroScreen({route,navigation}) {

    const firebaseConfig = {
        apiKey: "AIzaSyCAd6lDV9a9HERdKaEijnRRUWgeZI-SspQ",
        authDomain: "aulamobile-c4232.firebaseapp.com",
        projectId: "aulamobile-c4232",
        storageBucket: "aulamobile-c4232.appspot.com",
        messagingSenderId: "614036773871",
        appId: "1:614036773871:web:fa9269b2c5841e583bb41a",
        measurementId: "G-Q49FVJ63WV"
    };

    const auth = getAuth();
    function Cadastrar(){
        createUserWithEmailAndPassword(auth, getEmail, getSenha)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Login')
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        });
    }
    
    const app = initializeApp(firebaseConfig);
    

    const  [getSenha,setSenha] = useState();
    const  [getEmail,setEmail] = useState();





    
    return (
    <View>
        <Header
                leftComponent={{ icon: 'arrow-left', type:"font-awesome", color: '#fff', iconStyle: { color: '#fff' }, onPress:() => navigation.navigate('Home')  }}
                centerComponent={{ text: 'Cadastro', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff', onPress:() => navigation.navigate('Home')}}
        />
        <View>
            <Avatar
                    rounded
                    icon={{name: 'user', type: 'font-awesome'}}
                    activeOpacity={1}
                    containerStyle = { styles.tinyLogo }
            
                />
            

            <Input
                style={styles.input}
                placeholder="Digite o email"
                onChangeText={text => setEmail(text)}
            />
            <Input
                inputStyle={styles.input}
                placeholder="Digite a senha"
                label="Senha: "
                secureTextEntry={true}
                onChangeText={text => setSenha(text)}
            />
            
            <View style={styles.button}>
                <Button color={"red"} title='Cadastrar' onPress={Cadastrar}/>
            </View>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 34,
        margin: 2,
        padding: 1,
        alignSelf: 'center'
    },
    button: {
        width: 280,
        padding: 5,
        justifyContent: 'center',
        margin: 30,
        alignSelf: 'center'
        
    },
    tinyLogo: {
        width: 100,
        height: 100,
        margin: 50,
        borderRadius: 50,
        alignSelf: 'center',
        backgroundColor: 'darkgray'
    }
  });
