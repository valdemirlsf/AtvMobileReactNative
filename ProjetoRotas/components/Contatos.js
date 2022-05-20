import * as React from 'react';
import { View, Text, Button, StyleSheet, Modal, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Header, ListItem, Avatar } from 'react-native-elements';
import axios from 'axios';

import { getAuth } from "firebase/auth";

export default function ContatosScreen({route,navigation}) {

    const auth = getAuth();
    function logoff(){
        signOut(auth).then(() => {
            // Sign-out successful.
                navigation.navigate('Login')
            }).catch((error) => {
            // An error happened.
                console.log(error)
            });
    }

    const [getContatos, setContatos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    

    function consultarDados(){

        axios.get('http://professornilson.com/testeservico/clientes')
        
        .then(function (response) {
            setContatos(response.data);
        }).catch(function (error) {
            console.log(error);
        
        });
        
        
    }
    function excluirDados(getId){

        axios.delete("http://professornilson.com/testeservico/clientes/"+getId)
        .then(function (response) {
        console.log(response);
        }).catch(function (error) {
        console.log(error);
        
        });
        setModalVisible(!modalVisible)
        }

    useEffect(()=>{
        consultarDados()
    }, [getContatos])

    return (
        <View style={{backgroundColor:"#fff"}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Deseja mesmo excluir?</Text>
                        <View style={styles.info2}>
                            <Button 
                            color={'black'}
                            containerStyle={{
                                width: 10,
                            }}
                            titleStyle={{ color: 'white'}} title='Confirmar' onPress={excluirDados}/>
                            <Button
                            containerStyle={{
                                width: 10,
                            }}
                            titleStyle={{ color: 'white'}}color={"red"} title='Cancelar' onPress={() => setModalVisible(!modalVisible)}/>
                        </View>
                        
                    </View>
                </View>
            </Modal>
            <Header
                leftComponent={{ icon: 'arrow-left', type:"font-awesome", color: '#fff', iconStyle: { color: '#fff' }, onPress:() => logoff  }}
                centerComponent={{ text: 'Meus contatos', style: { color: '#fff', fontSize: 20} }}
                rightComponent={{ icon: 'add', color: '#fff', onPress:() => navigation.navigate('CadastroContatos')}}
            />
        <ScrollView>
        {
        getContatos.map((contato) => (
            
            <ListItem key={contato.id} style={styles.geral} onPress={() => navigation.navigate('EditaContatos', {
                nome:contato.nome,
                cpf:contato.cpf,
                telefone:contato.telefone,
                email:contato.email,
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
                <Button
                    icon={
                        {
                            name: 'arrow-left',
                            type:"font-awesome", 
                            color: '#fff'
                        }
                    }
                    color={'red'}
                    title='Excluir'

                    onPress={() => {setModalVisible(true)}}
                />
                
                
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
    info2: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    infoText:{
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });
