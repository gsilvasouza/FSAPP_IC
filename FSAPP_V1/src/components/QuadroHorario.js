import React, {Component} from 'react';
import {Text, StyleSheet, View,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export class QuadroHorario extends Component{
    render(){
        return(
            <View style={{width:326, height: 154, borderRadius: 20, marginTop: 10,marginBottom: 20, alignSelf: "center", backgroundColor: '#f1f8ff'}}>
                {   
                    this.props.exibir === 1
                    ? 
                    <View> 
                        <Text style={{alignSelf:"center", fontSize: 18, fontStyle: "italic"}}>Segunda-Feira</Text>
                                        <View style={{borderBottomWidth: 1}}>
                                            <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>Java</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>07:40 - 10:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>André Fernandes</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                                        <View>
                                        <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>Java</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>10:20 - 12:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>André Fernandes</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                    </View>
                    : this.props.exibir === 2
                    ?
                    <View> 
                        <Text style={{alignSelf:"center", fontSize: 18, fontStyle: "italic"}}>Terça-Feira</Text>
                                        <View style={{borderBottomWidth: 1}}>
                                            <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>ChatBot</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>07:40 - 10:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Thaison Oliveira</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                                        <View>
                                        <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>Chatbot</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>10:20 - 12:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Thaison Oliveira</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                    </View>
                    : this.props.exibir === 3
                    ?
                    <View> 
                        <Text style={{alignSelf:"center", fontSize: 18, fontStyle: "italic"}}>Quarta-Feira</Text>
                                        <View style={{borderBottomWidth: 1}}>
                                            <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>Python</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>07:40 - 10:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>João Silva</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                                        <View>
                                        <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>Python</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>10:20 - 12:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>João Silva</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                    </View>
                    : this.props.exibir === 4
                    ?
                    <View> 
                        <Text style={{alignSelf:"center", fontSize: 18, fontStyle: "italic"}}>Quinta-Feira</Text>
                                        <View style={{borderBottomWidth: 1}}>
                                            <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>Banco</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>07:40 - 10:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Matheus Souza</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                                        <View>
                                        <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>Banco</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>10:20 - 12:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Matheus Souza</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                    </View>
                    : this.props.exibir === 5
                    ?
                    <View>  
                        <Text style={{alignSelf:"center", fontSize: 18, fontStyle: "italic"}}>Sexta-Feira</Text>
                                        <View style={{borderBottomWidth: 1}}>
                                            <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>Agile</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>07:40 - 10:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Alex Santos</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                                        <View>
                                        <Text style={{alignSelf: "flex-start", fontSize: 14, marginTop: 5, marginLeft: 15}}>Agile</Text>
                                            <Text style={{alignSelf: "flex-end", fontSize: 14, marginTop: -20, marginRight: 15}}>10:20 - 12:00</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Alex Santos</Text>
                                            <Text style={{alignSelf:"center", fontSize: 14}}>Sala: 24-Unidade: Diadema</Text>
                                        </View>
                    </View>
                    : <Text> aa </Text>
                }
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