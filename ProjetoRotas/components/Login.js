import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Button, Input, Avatar, Icon } from 'react-native-elements';

export default function HomeScreen({route, navigation}) {
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
            
        />
        
       
       <Input
            inputStyle={styles.input}
            placeholder="Digite a senha"
            label="Senha: "
            secureTextEntry={true}
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
              onPress={() => navigation.navigate('Contatos')}
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