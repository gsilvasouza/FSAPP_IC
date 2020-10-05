import React, {Component, useRef} from 'react';
import {Text, StyleSheet, View,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize' 
import Modal from './modal'
export class CustomHeader extends Component{

    render(){
        function onOpen(){
            <Modal />
        };
        return(
        <View style={stylesHeader.container}>
            <View style={{flex:0.5, justifyContent: "center"}}>
                <TouchableOpacity 
                    onPress = {() => this.props.navigation.openDrawer()}
                    >
                    <Image style={{margin: 10,height: 30, width: 30}}
                    source={require('../images/menu.png')}
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
                        <Image style={{height: 35, width: 35, marginTop: 5, marginLeft: 20}}
                            source={require('../images/notificacao.png')}
                            resizeMode='contain'/>
                </TouchableOpacity>
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