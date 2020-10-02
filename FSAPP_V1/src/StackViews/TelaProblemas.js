import React from 'react';
import {Text, StyleSheet, TextInput, View, 
    KeyboardAvoidingView,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function problems({ navigation }) {
     return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.viewprincipal}>
                <View  style={styles.header}>
                    <TouchableOpacity style={{left: -50}}
                        onPress={() => navigation.goBack()}
                        >
                        <Image 
                            source={require('../images/back.png')}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <Image source={require('../images/FSAPP.png')} style={{left: -20}}/>
                </View>
                <TextInput 
                style={styles.input}
                placeholder='Nome Completo'
                autoCorrect={false}
                onChangeText={() => {}}
                />

                <TextInput 
                style={styles.input}
                placeholder='Email Institucional'
                autoCorrect={false}
                onChangeText={() => {}}
                />

                <TextInput 
                style={styles.inputDetalhe}
                placeholder='Detalhe o Problema'
                autoCorrect={false}
                onChangeText={() => {}}
                />

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText}> Enviar </Text>
                </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
)}


const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: "#09519B",
        alignItems: "center",
        justifyContent: "center"
    },
    viewprincipal:{
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
       width: 253,
       paddingBottom: 163,
       paddingTop: 20
    }, 
    input:{
        backgroundColor: '#FFF',
        width: 253,
        marginBottom: 23,
        color: '#222',
        fontSize: 17,
        borderRadius: 44.697,
        padding: 10,
        height: 52
    },
    inputDetalhe:{
        backgroundColor: '#FFF',
        width: 253,
        marginBottom: 23,
        color: '#222',
        fontSize: 17,
        borderRadius: 20,
        padding: 10,
        height: 180,
    },
    btnSubmit: {
        backgroundColor: '#FFF',
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 44.697,
        width: 257,
    }, 
    submitText: {
        fontFamily: 'GFSDidot-Regular',
        fontSize: 18,
        lineHeight: 22
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row', 
        marginTop: '-25%', 
        paddingBottom: 50
    }
})