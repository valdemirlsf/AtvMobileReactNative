import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function HomeScreen({route, navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        <Text>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite o email"
        />
        <Text>Senha</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite a senha"
        />
        <View style={styles.button}>
            <Button title='Login' onPress={() => navigation.navigate('Contatos')} />
        </View>
        <View style={styles.button}>
            <Button color={"red"} title='Cadastro' onPress={() => navigation.navigate('Cadastro')}/>
        </View>
        
    </View>
    );
    }
    const styles = StyleSheet.create({
        input: {
            width: "80%",
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        button: {
            width: "80%",
            padding: "5px"
        },
        tinyLogo: {
            width: 100,
            height: 100,
            margin: 50,
            marginTop: 5,
            borderRadius: "50%"
        }
      });