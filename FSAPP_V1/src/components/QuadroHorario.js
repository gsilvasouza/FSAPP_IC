import React, {Component} from 'react';
import {Text, StyleSheet, View,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export class QuadroHorario extends Component{
    render(){
        return(
            <View style={{width:326, height: 154, borderRadius: 20, marginTop: 20, alignSelf: "center", backgroundColor: 'white'}}>
                <Text style={{alignSelf:"center", fontSize: 16}}>Dia da Semana</Text>
                <View style={{borderBottomWidth: 1}}>
                    <Text style={{alignSelf: "flex-start", fontSize: 12}}>Aula</Text>
                    <Text style={{alignSelf: "flex-start", fontSize: 12}}>Professor</Text>
                    <Text style={{alignSelf:"center", fontSize: 12}}>Horario</Text>
                    <Text style={{alignSelf:"center", fontSize: 12}}>Sala-Unidade</Text>
                </View>
                <View>
                    <Text style={{alignSelf: "flex-start", fontSize: 12}}>Aula</Text>
                    <Text style={{alignSelf: "flex-start", fontSize: 12}}>Professor</Text>
                    <Text style={{alignSelf:"center", fontSize: 12}}>Horario</Text>
                    <Text style={{alignSelf:"center", fontSize: 12}}>Sala-Unidade</Text>
                </View>
            </View>
        )

    }
}
const stylesHeader = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 53,
        backgroundColor: "#09519B",
    },
})