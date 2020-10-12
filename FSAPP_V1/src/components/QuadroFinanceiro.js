import React, {Component} from 'react';
import {Text, StyleSheet, View,Image, ScrollView, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export class QuadroFinanceiro extends Component{
    render(){
        return(
            <View>
                <Text style={{marginLeft: 20,fontSize: 25, fontStyle: "italic", color: 'white', marginTop: 10}}> {this.props.mes} </Text>
                {
                    this.props.situacao == 'pago'
                    ? 
                        <View style={{width: 370, height: 90, alignSelf: "center", backgroundColor: 'white', borderRadius: 20}}>
                            <View style={{marginTop: 5,marginLeft: 10, alignItems: "center", width: 121, height: 15}}>
                                <Text style={{fontSize: 16}}>Mensalidade</Text>
                                <View style={{width: 54, height: 20, backgroundColor: 'green', alignItems: "center", marginTop: -20, marginLeft: 180}}>
                                    <Text style={{color: "white"}}>PAGO</Text>
                                </View>                               
                            </View>
                            <View style={{marginLeft: 20, marginTop: 20}}> 
                                <Text style={{fontSize: 14}}> Data de pagamento: {this.props.dataPag}  </Text>
                                <Text style={{fontSize: 14}}> Data de vencimento: {this.props.dataVen}  </Text>
                            </View>
                            
                            <Text style={{alignSelf: "flex-end", marginTop: -70, marginRight: 20}}>Comprovante</Text>
                            <Text style={{alignSelf: "flex-end", marginRight: 10, marginTop: 30}}>Valor: R$800,00</Text>
                        </View>
                    :   this.props.situacao == 'aberto'
                        ?
                        <View style={{width: 370, height: 90, alignSelf: "center", backgroundColor: 'white', borderRadius: 20}}>
                            <View style={{marginTop: 5,marginLeft: 10, alignItems: "center", width: 121, height: 15}}>
                                <Text style={{fontSize: 16}}>Mensalidade</Text>
                                <View style={{width: 84, height: 20, backgroundColor: 'orange', alignItems: "center", marginTop: -20, marginLeft: 200}}>
                                    <Text style={{color: "white"}}>EM ABERTO</Text>
                                </View>                               
                            </View>
                            <View style={{marginLeft: 20, marginTop: 40}}>  
                                <Text style={{fontSize: 14}}> Data de vencimento: {this.props.dataVen}  </Text>
                            </View>
                            <Text style={{alignSelf: "flex-end", marginTop: -70, marginRight: 20}}>Gerar Boleto</Text>
                            <Text style={{alignSelf: "flex-end", marginRight: 10, marginTop: 30}}>Valor: R$800,00</Text>
                        </View>
                    :   
                    <View style={{width: 370, height: 90, alignSelf: "center", backgroundColor: 'white', borderRadius: 20}}>
                        <View style={{marginTop: 5,marginLeft: 10, alignItems: "center", width: 121, height: 15}}>
                            <Text style={{fontSize: 16}}>Mensalidade</Text>
                            <View style={{width: 84, height: 20, backgroundColor: 'red', alignItems: "center", marginTop: -20, marginLeft: 200}}>
                                <Text style={{color: "white"}}>VENCIDO</Text>
                            </View>                               
                        </View>
                        <View style={{marginLeft: 20, marginTop: 40}}>         
                            <Text style={{fontSize: 14}}> Data de vencimento: {this.props.dataVen}  </Text>
                        </View>
                        <Text style={{alignSelf: "flex-end", marginTop: -70, marginRight: 20}}>Gerar Boleto</Text>
                        <Text style={{alignSelf: "flex-end", marginRight: 10, marginTop: 30}}>Valor: R$800,00</Text>
                    </View>
                }

            </View>
        )

    }
}