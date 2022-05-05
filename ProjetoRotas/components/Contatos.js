import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export default function ContatosScreen({route,navigation}) {
    return (
        <View>
            <Header
                leftComponent={{ icon: 'arrow-left', type:"font-awesome", color: '#fff', iconStyle: { color: '#fff' }, onPress:() => navigation.navigate('Home')  }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'add', color: '#fff', onPress:() => navigation.navigate('CadastroContatos')}}
            />
            <View>
                <TouchableOpacity style={styles.geral} onPress={() => navigation.navigate('EditaContatos')} >
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <View style={styles.info}>
                    <Text style={styles.infoText}>Fulano Da Silva</Text>
                    <Text >81 XXXXX-XXXX</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            <View>
                <TouchableOpacity style={styles.geral} onPress={() => navigation.navigate('EditaContatos')} >
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} 
                />
                <View style={styles.info}>
                    <Text style={styles.infoText}>Fulano Da Silva</Text>
                    <Text >81 XXXXX-XXXX</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            <View>
                <TouchableOpacity style={styles.geral} onPress={() => navigation.navigate('EditaContatos')} >
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <View style={styles.info}>
                    <Text style={styles.infoText}>Fulano Da Silva</Text>
                    <Text >81 XXXXX-XXXX</Text>
                </View>
                </TouchableOpacity>
                
            </View>
        
        
        </View>
        
    );
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: "50%"
    },
    geral: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        border: "1px solid gray"
    },
    info: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    infoText:{
        fontSize: '20px',
        fontWeight: 'bold'
    }
  });
