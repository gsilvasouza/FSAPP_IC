import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

import TelaLogin from '../StackViews/TelaLogin'
import TelaProblemas from '../StackViews/TelaProblemas'

import Home from '../Drawer/Home'

const Drawer = createDrawerNavigator();

function DrawerNavigation(){
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}

const StackApp = createStackNavigator();

export default function App() { 
    return(
        <NavigationContainer>
            <StackApp.Navigator >
                <StackApp.Screen name='TelaLogin' component={TelaLogin} options={{headerShown: false}}/>
                <StackApp.Screen name='TelaProblemas' component={TelaProblemas} options={{headerShown: false}}/>
                <StackApp.Screen name='HomeApp' component={DrawerNavigation} options={{headerShown: false}}/>
            </StackApp.Navigator>
        </NavigationContainer>
    );
}