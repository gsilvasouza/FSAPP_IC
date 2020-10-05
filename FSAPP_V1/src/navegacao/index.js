import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {CustomDrawerContent} from '../Drawer/CustomDrawerContent'

import TelaLogin from '../StackViews/TelaLogin'
import TelaProblemas from '../StackViews/TelaProblemas'


import Home from '../Drawer/Home'
import TelaAulas from '../Drawer/TelaAulas'
import TelaProvas from '../Drawer/TelaProva'
import TelaNotas from '../Drawer/TelaNotas'

import TelaMaterialApoio from '../StackMaterialApoio/TelaMaterialApoio'
import {TelaMateria1} from '../StackMaterialApoio/TelaMateira1'

const MaterialDeApoioStack = createStackNavigator();

function StackMaterialDeApoio(){
    <MaterialDeApoioStack.Navigator  initialRouteName="TelaMateria1">
        <MaterialDeApoioStack.Screen name='TelaMateria1' component={TelaMateria1}/>
    </MaterialDeApoioStack.Navigator>
}

const Drawer = createDrawerNavigator();

function DrawerNavigation({navigation}){
    return(
        <Drawer.Navigator initialRouteName="Home" drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Aulas" component={TelaAulas} />
            <Drawer.Screen name="Provas" component={TelaProvas} />
            <Drawer.Screen name="Notas" component={TelaNotas} />
            <Drawer.Screen name="MaterialApoio" component={TelaMaterialApoio} />
            <Drawer.Screen name="MaterialApoioStack" component={StackMaterialDeApoio} />
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