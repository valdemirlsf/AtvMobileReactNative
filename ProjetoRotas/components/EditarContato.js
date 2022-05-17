import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Header, Input, Image, Avatar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditaContatos({route,navigation}) {

    const  [getNome,setNome] = useState();
    const  [getCpf,setCpf] = useState();
    const  [getTelefone,setTelefone] = useState();
    const  [getId,setId] = useState();
    const  [getEmail,setEmail] = useState();

    useEffect(()=>{
        
        if(route.params){
            const { nome } =  route.params 
            const { telefone } =  route.params 
            const { id } =  route.params
            const { cpf } =  route.params
            const { email } =  route.params


            setNome(nome)
            setTelefone(telefone)
            setCpf(cpf)
            setEmail(email)
            setId(id)
            

        }
  
              
        
        
    },[])
    function alterarDados(){

        axios.put('http://professornilson.com/testeservico/clientes/'+getId
        ,
        
        {
        nome: getNome,
        telefone: getTelefone,
        email: getEmail,
        cpf: getCpf
        }).then(function (response) {
            
            console.log(response.config.data);
            navigation.navigate('Contatos')
            console.log('Editado!')
        }).catch(function (error) {
           
            console.log(error);
            console.log('Erro na Edição!')
        
        });
        
        }

    return (
        <View>
        <Header
                leftComponent={{ icon: 'arrow-left', type:"font-awesome", color: '#fff', iconStyle: { color: '#fff' }, onPress:() => navigation.navigate('Contatos')  }}
                centerComponent={{ text: 'Editar contato', style: { color: '#fff' } }}
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
                    value={getNome || ''}
                />

                <Input
                    style={styles.input}
                    placeholder="Digite CPF"
                    onChangeText={text => setCpf(text)}
                    value={getCpf || ''}
                />

                <Input
                    style={styles.input}
                    placeholder="Digite o telefone"
                    onChangeText={text => setTelefone(text)}
                    value={getTelefone || ''}
                />
                <Input
                    style={styles.input}
                    placeholder="Digite o email"
                    onChangeText={text => setEmail(text)}
                    value={getEmail || ''}
                />
                <View style={styles.button}>
                <Button color={"red"} title='Editar' onPress={alterarDados}/>
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
