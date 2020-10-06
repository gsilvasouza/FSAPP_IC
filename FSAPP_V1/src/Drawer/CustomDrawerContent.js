import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';

export class CustomDrawerContent extends Component {
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
              {/* <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={IMAGE.ICON_PROFILE}
                style={{height:120, width: 120, borderRadius: 60}}/>
              </View> */}
              <ScrollView style={{marginLeft: 5}}>
                <TouchableOpacity
                    style={{marginTop: 0, flexDirection: "row"}}
                    onPress= {() => this.props.navigation.navigate('Home')}
                    >   
                        <Image style={{margin: 15,height: 30, width: 30}}
                        source={require('../images/home.png')}
                        resizeMode='contain'/>
                        <Text style={styles.items}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop: 0, flexDirection: "row"}}
                onPress= {() => this.props.navigation.navigate('Aulas')}
                >
                    <Image style={{margin: 15,height: 30, width: 30}}
                    source={require('../images/aulas.png')}
                    resizeMode='contain'/>
                    <Text style={styles.items}>Aulas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop: 0, flexDirection: "row"}}
                onPress= {() => this.props.navigation.navigate('Provas')}
                >
                    <Image style={{margin: 15,height: 30, width: 30}}
                    source={require('../images/provas.png')}
                    resizeMode='contain'/>
                    <Text style={styles.items}>Provas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop:0, flexDirection: "row"}}
                onPress= {() => this.props.navigation.navigate('Notas')}
                >
                    <Image style={{margin: 15,height: 30, width: 30}}
                    source={require('../images/notasFaltas.png')}
                    resizeMode='contain'/>
                    <Text style={styles.items}>Notas e Faltas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop: 0, flexDirection: "row"}}
                onPress= {() => this.props.navigation.navigate('MaterialApoio')}
                >
                    <Image style={{margin: 15,height: 30, width: 30}}
                    source={require('../images/materialApoio.png')}
                    resizeMode='contain'/>
                    <Text style={styles.items}>Material Apoio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop: '130%', flexDirection: "row"}}
                onPress= {() => this.props.navigation.navigate('TelaLogin')}
                >
                    <Image style={{margin: 15,height: 30, width: 30}}
                    source={require('../images/desconectar.png')}
                    resizeMode='contain'/>
                    <Text style={styles.items}>Logout</Text>
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    items: {marginTop: 20, fontSize: 18}, 
})