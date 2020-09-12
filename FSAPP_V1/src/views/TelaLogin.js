import React from 'react';
import {Text, 
    StyleSheet, 
    TextInput, 
    View, 
    KeyboardAvoidingView,
    Image,
    Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
     return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.viewlogo}>
                <Image 
                source={require('./FSAPP.png')}
                />
            </View>

            <View style={styles.viewprincipal}>
                <TextInput 
                style={styles.input}
                placeholder='Email'
                autoCorrect={false}
                onChangeText={() => {}}
                />

                <TextInput 
                style={styles.input}
                placeholder='Senha'
                autoCorrect={false}
                onChangeText={() => {}}

                />

                {/* <Button 
                    title= "Entrar"
                    onPress={() => navigation.navigate("TelaProblemas")}
                    color="#FFF"
                    
                /> */}

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText}> Entrar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnProblems} onPress={() => navigation.navigate("TelaProblemas")}>
                    <Text style={styles.problemsText}>PROBLEMAS PARA LOGAR?</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#09519B",
        alignItems: "center",
        justifyContent: "center"
    },
    viewlogo:{
        flex: 1,
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
    btnSubmit: {
        backgroundColor: 'white',
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 44.697,
        width: 253,
    }, 
    submitText: {
        fontFamily: 'GFSDidot-Regular',
        fontSize: 18,
        lineHeight: 22
    }, 
    btnProblems: {
        marginTop: 35
    }, 
    problemsText:{
        color: "#E0E0E0",
        fontSize: 18
    }

})