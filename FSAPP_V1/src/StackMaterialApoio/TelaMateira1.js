import React, {Component, useRef} from 'react';
import {Text, StyleSheet, View,Image, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize' 
import Tabela from '../components/Tabela' 

export default function TelaMaterialApoio({ navigation }) {
  const modalizeRef= useRef(null);

  function onOpen(){
      modalizeRef.current?.open();
  };
  return(
      <View style={{flex:1, backgroundColor: "#09519B"}}>
          <View style={styles.container}>
              <View style={{flex:0.5, justifyContent: "center"}}>
                <TouchableOpacity style={{left: 10, marginTop: 10}}
                    onPress={() => navigation.goBack()}
                    >
                      <Image 
                      source={require('../images/back.png')}
                      resizeMode='contain'/>
                  </TouchableOpacity>
              </View>
                  <View style={{flex:2, justifyContent: "center"}}>           
                      <TouchableOpacity onPress= {() => navigation.navigate('Home')}
                      >
                          <Image 
                              style={{height: 35, width: 263, marginTop: 5}}
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
          
          <ScrollView>
              <View style={{flex:0.5, justifyContent: "center", marginTop: 20}}>
                  <View style={{width: 330, height: 50, alignSelf: "center", backgroundColor: 'white', borderRadius: 20, borderWidth: 2}}> 
                        <Text style={{left: 30, fontSize: 22}}>Aula1.pdf</Text>
                        <Text style={{left: 20, fontSize: 12}} >Data de Postagem:02/03/2020  <Text style={{left: 20}}>Tamanho: 1MB</Text> </Text>                       
                  </View>
              </View>
              <View style={{flex:0.5, justifyContent: "center", marginTop: 20}}>
                  <View style={{width: 330, height: 50, alignSelf: "center", backgroundColor: 'white', borderRadius: 20, borderWidth: 2}}> 
                        <Text style={{left: 30, fontSize: 22}}>Aula2.pdf</Text>
                        <Text style={{left: 20, fontSize: 12}} >Data de Postagem:09/03/2020  <Text style={{left: 20}}>Tamanho: 1MB</Text> </Text>                       
                  </View>
              </View>
              <View style={{flex:0.5, justifyContent: "center", marginTop: 20}}>
                  <View style={{width: 330, height: 50, alignSelf: "center", backgroundColor: 'white', borderRadius: 20, borderWidth: 2}}> 
                        <Text style={{left: 30, fontSize: 22}}>ListaEx.1.pdf</Text>
                        <Text style={{left: 20, fontSize: 12}} >Data de Postagem:09/03/2020  <Text style={{left: 20}}>Tamanho: 1MB</Text> </Text>                       
                  </View>
              </View>
              <View style={{flex:0.5, justifyContent: "center", marginTop: 20}}>
                  <View style={{width: 330, height: 50, alignSelf: "center", backgroundColor: 'white', borderRadius: 20, borderWidth: 2}}> 
                        <Text style={{left: 30, fontSize: 22}}>Aula3.pdf</Text>
                        <Text style={{left: 20, fontSize: 12}} >Data de Postagem:15/03/2020  <Text style={{left: 20}}>Tamanho: 1MB</Text> </Text>                       
                  </View>
              </View>
              <View style={{flex:0.5, justifyContent: "center", marginTop: 20}}>
                  <View style={{width: 330, height: 50, alignSelf: "center", backgroundColor: 'white', borderRadius: 20, borderWidth: 2}}> 
                        <Text style={{left: 30, fontSize: 22}}>ListaEx.2.pdf</Text>
                        <Text style={{left: 20, fontSize: 12}} >Data de Postagem:15/03/2020  <Text style={{left: 20}}>Tamanho: 1MB</Text> </Text>                       
                  </View>
              </View>
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