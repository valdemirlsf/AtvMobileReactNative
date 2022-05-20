import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Button, Input, Avatar, Icon } from 'react-native-elements';
import { useState, useEffect } from 'react';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function HomeScreen({route, navigation}) {

    const firebaseConfig = {
            apiKey: "AIzaSyCAd6lDV9a9HERdKaEijnRRUWgeZI-SspQ",
            authDomain: "aulamobile-c4232.firebaseapp.com",
            projectId: "aulamobile-c4232",
            storageBucket: "aulamobile-c4232.appspot.com",
            messagingSenderId: "614036773871",
            appId: "1:614036773871:web:fa9269b2c5841e583bb41a",
            measurementId: "G-Q49FVJ63WV"
    };

    const app = initializeApp(firebaseConfig);
    const  [getSenha,setSenha] = useState();
    const  [getEmail,setEmail] = useState();

    
    function login(){
        const auth = getAuth();    
        signInWithEmailAndPassword(auth, getEmail, getSenha)
        .then((userCredential) => {
        // Signed in
            navigation.navigate('Contatos')
            const user = userCredential.user;
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }


    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Avatar
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                activeOpacity={1}
                containerStyle = { styles.tinyLogo }
            />
        <Input
            style={styles.input}
            placeholder="Digite o email"
            label="Email: "
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
            <Button
              title="Login"
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 150,
                marginHorizontal: 20,
                marginVertical: 10,
                
              }}
              onPress={() => login()}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            />

            <Button
              title="Cadastro"
              raised = "true"
              buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
              containerStyle={{
                width: 150,
                marginHorizontal: 20,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate('Cadastro')}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            />

        </View>
        
    </View>
    );
    }
    const styles = StyleSheet.create({
        input: {
            width: 360,
            height: 40,
            margin: 12,
            padding: 10,
            borderRadius: 10
        },
        button: {
            
            padding: 5,
            display: "flex",
            flexDirection: "row",
            
        },
        tinyLogo: {
            width: 100,
            height: 100,
            margin: 20,
            marginTop: 5,
            borderRadius: 50
        },
        input:{
            height: 34,
            margin: 2,
            padding: 1,
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