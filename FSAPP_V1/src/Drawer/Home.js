import React, {Component, useRef} from 'react';
import {Text, StyleSheet, View,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize' 

export default function Home({ navigation }){
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
                        <TouchableOpacity>
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
            <View style={{width:138, height: 138, borderRadius: 20, borderWidth: 2, marginTop: 20, alignSelf: "center", backgroundColor: 'white'}}>
                <Image style={{width:138, height: 138}}/>
            </View>
            <View style={{marginTop: 29, width: '100%', height: 80}}>
                <Text style={{alignSelf: "flex-start", color: 'white', marginTop:10 }}> NOME: </Text>
                <Text style={{alignSelf: "flex-start", color: 'white'}}> RM: </Text>  
                <Text style={{alignSelf: "flex-end", marginTop: -40, marginRight: 60, color: 'white'}}>TURMA:  </Text>
                <Text style={{alignSelf: "flex-end", color: 'white'}}>NOME DO CURSO: </Text>
            </View>

            <View style={{width:326, height: 154, borderRadius: 20, borderWidth: 2, marginTop: 20, alignSelf: "center", backgroundColor: 'white'}}>

            </View>
            <View style={{width:326, height: 81, borderRadius: 20, borderWidth: 2, marginTop: 40, alignSelf: "center", backgroundColor: 'white'}}>

            </View>

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
    )
}

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