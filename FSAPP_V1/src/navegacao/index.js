import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import TelaLogin from '../views/TelaLogin'
import TelaProblemas from '../views/TelaProblemas'

const Stack = createStackNavigator();

export default function App() { 
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen  options={{headerShown: false}}
                    name='TelaLogin' 
                    component={TelaLogin} 
                              />
                <Stack.Screen 
                    name='TelaProblemas' 
                    component={TelaProblemas} 
                    options={{
                        title: "FSAPP",
                        headerStyle:{
                            backgroundColor: "#09519B",
                            
                        },
                        headerStatusBarHeight: 10,
                        headerTitleAlign: "center",
                        headerTintColor: "white",
                        headerTitleStyle: {
                            fontSize: 64

                        },
                        
                        
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}