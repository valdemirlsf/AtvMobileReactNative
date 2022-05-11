import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Header, Input, Image, Avatar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CadastroScreen({route,navigation}) {
    const  [getNome,setNome] = useState();
    const  [getSenha,setSenha] = useState();
    const  [getEmail,setEmail] = useState();
    const  [getCpf,setCpf] = useState();




    function inserirDados(){
        
        axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            senha: getSenha,
            email: getEmail,
            cpf: getCpf
          })
          .then(function (response) {
            console.log(response.config.data);
            console.log('Cadastrado com Sucesso')
          })
          .catch(function (error) {
            console.log(error);
            console.log('Erro ao cadastar')
          });     
        
    }
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
                placeholder="Digite o seu nome"
                onChangeText={text => setNome(text)}
            />

            <Input
                style={styles.input}
                placeholder="Digite CPF"
                onChangeText={text => setCpf(text)}
            />

            <Input
                style={styles.input}
                placeholder="Digite o email"
                onChangeText={text => setEmail(text)}
            />
            
            
            <View style={styles.button}>
                <Button color={"red"} title='Cadastrar' onPress={inserirDados}/>
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
