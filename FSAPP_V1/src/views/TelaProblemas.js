import React from 'react';
import {Text, 
    StyleSheet, 
    TextInput, 
    View, 
    KeyboardAvoidingView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default props => {
     return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.viewprincipal}>
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
       paddingBottom: 163
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
})