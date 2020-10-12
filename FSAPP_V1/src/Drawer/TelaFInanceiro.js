import React, {Component, useRef} from 'react';
import {Text, StyleSheet, View,Image, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize' 
import {QuadroFinanceiro} from '../components/QuadroFinanceiro'

export default function TelaFinanceiro({ navigation }){
    const modalizeRef= useRef(null);

    function onOpen(){
        modalizeRef.current?.open();
    };
    return(
        <View style={{flex:1, backgroundColor: "#09519B"}}>
            <View style={styles.container}>
                <View style={{flex:0.5, justifyContent: "center"}}>
                    <TouchableOpacity 
                        onPress = {() => navigation.openDrawer()}
                        >
                        <Image style={{margin: 10,height: 30, width: 30}}
                        source={require('../images/MENU2.png')}
                        resizeMode='contain'/>
                    </TouchableOpacity>
                </View>
                    <View style={{flex:2, justifyContent: "center"}}>           
                        <TouchableOpacity onPress= {() => navigation.navigate('Home')}>
                            <Image style={{height: 35, width: 263, marginTop: 5}}
                                source={require('../images/FSAPP.png')}
                                resizeMode='contain'/>
                    </TouchableOpacity>
                    </View>
                    <View style={{flex: 0.5, justifyContent: "center"}}>           
                        <TouchableOpacity onPress={onOpen}>
                            <Image style={{height: 40, width: 40, marginTop: 5, marginLeft: 20}}
                                source={require('../images/notificacao3.png')}
                                resizeMode='contain'/>
                    </TouchableOpacity>
                    </View>
            </View>
            <ScrollView style={{marginBottom: 15}}>
                <QuadroFinanceiro mes={'Janeiro'} situacao={'pago'} dataVen={'27/01/2020'} dataPag={'27/01/2020'}/>
                <QuadroFinanceiro mes={'Fevereiro'} situacao={'pago'} dataVen={'27/02/2020'} dataPag={'27/02/2020'}/>
                <QuadroFinanceiro mes={'Março'} situacao={'pago'} dataVen={'27/03/2020'} dataPag={'27/03/2020'}/>
                <QuadroFinanceiro mes={'Abril'} situacao={'pago'} dataVen={'27/04/2020'} dataPag={'27/04/2020'}/>
                <QuadroFinanceiro mes={'Maio'} situacao={'pago'} dataVen={'27/05/2020'} dataPag={'27/05/2020'}/>
                <QuadroFinanceiro mes={'Junho'} situacao={'pago'} dataVen={'27/06/2020'} dataPag={'27/06/2020'}/>
                <QuadroFinanceiro mes={'Julho'} dataVen={'27/07/2020'}/>
                <QuadroFinanceiro mes={'Agosto'} situacao={'pago'} dataVen={'27/08/2020'} dataPag={'27/08/2020'}/>
                <QuadroFinanceiro mes={'Setembro'} situacao={'pago'} dataVen={'27/09/2020'} dataPag={'27/09/2020'}/>
                <QuadroFinanceiro mes={'Outubro'} situacao={'aberto'} dataVen={'27/10/2020'} />
                <QuadroFinanceiro mes={'Novembro'} situacao={'aberto'} dataVen={'27/11/2020'} />
                <QuadroFinanceiro mes={'Dezembro'} situacao={'aberto'} dataVen={'27/12/2020'} />
            </ScrollView>
            <Modalize
            ref={modalizeRef}
            snapPoint={180}
            >
                <View
                style={{
                    flex: 1,
                    height: 180,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <Text>Notificacoes</Text>
                </View>
            </Modalize>
            
        </View>
    )}
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            height: 53,
            backgroundColor: "#09519B",
        },
        imagemPerfil: {
            width:138, height: 138, borderRadius: 20, borderWidth: 2, marginTop: 20
        }
    
    })