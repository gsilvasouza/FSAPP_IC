import React, {Component} from 'react';
import {Text, StyleSheet, View,Image, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize' 
import Tabela from '../components/Tabela' 

export class TelaMateria1 extends Component {
  render(){
  return(
      <View style={{flex:1, backgroundColor: "#09519B"}}>
          <View style={styles.container}>
              <Text>AAAAAAAAAaaa </Text>
          </View>
      </View>
  )}}
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