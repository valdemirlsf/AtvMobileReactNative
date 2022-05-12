import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Header, ListItem, Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Servicos } from '../services/Servicos';

export default function ContatosScreen({route,navigation}) {
    const [getContatos, setContatos] = useState([]);


    function consultarDados(){

        axios.get('http://professornilson.com/testeservico/clientes')
        
        .then(function (response) {
            setContatos(response.data);
        }).catch(function (error) {
            console.log(error);
        
        });
        
    }


    useEffect(()=>{
        consultarDados()
    }, [getContatos])

    return (
        <View style={{backgroundColor:"#fff"}}>
            <Header
                leftComponent={{ icon: 'arrow-left', type:"font-awesome", color: '#fff', iconStyle: { color: '#fff' }, onPress:() => navigation.navigate('Home')  }}
                centerComponent={{ text: 'Meus contatos', style: { color: '#fff', fontSize: 20} }}
                rightComponent={{ icon: 'add', color: '#fff', onPress:() => navigation.navigate('CadastroContatos')}}
            />
        <ScrollView>
        {
        getContatos.map((contato) => (
            
            <ListItem key={contato.id} style={styles.geral} onPress={() => navigation.navigate('EditaContatos', {
                nome:contato.nome,
                telefone:contato.telefone,
                email:contato.email,
                cpf:contato.cpf,
                id:contato.id,
            })}>
                
                
                <Avatar
                    rounded
                    icon={{name: 'user', type: 'font-awesome'}}
                    activeOpacity={1}
                    containerStyle = { styles.tinyLogo }
            
                />
                <ListItem.Content style={styles.info}>
                    <ListItem.Title style={styles.infoText}> {contato.nome} </ListItem.Title>
                    <ListItem.Subtitle> {contato.telefone} </ListItem.Subtitle>
                </ListItem.Content>
                
                
                
            </ListItem>
        
        ))
        }
                
                
                </ScrollView>
        </View>
        
    );
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 3,
        borderRadius: 50,
        backgroundColor: "#5c5c5c"
    },
    geral: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        
    },
    info: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    infoText:{
        fontSize: 20,
        fontWeight: 'bold',
        
    }
  });
