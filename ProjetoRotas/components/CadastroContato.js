import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default function CadastroContatosScreen({route,navigation}) {
    return (
    <View>
        <Header
                leftComponent={{ icon: 'arrow-left', type:"font-awesome", color: '#fff', iconStyle: { color: '#fff' }, onPress:() => navigation.navigate('Contatos')  }}
                centerComponent={{ text: 'Adicionar um contato', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff', onPress:() => navigation.navigate('Home')}}
        />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o seu nome"
            />
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o Email"
            />
            <Text>Telefone</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o Telefone"
            />
            <View style={styles.button}>
                <Button color={"red"} title='Adicionar Contato'/>
            </View>
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