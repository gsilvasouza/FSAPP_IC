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
import TelaNotas2 from '../Drawer/TelaNotas2'
import TelaNotasFinal from '../Drawer/TelaNotasFinal'
import TelaCarteinhaEstudantil from '../Drawer/TelaCarteirinhaEstudantil'
import TelaMaterialApoio from '../StackMaterialApoio/TelaMaterialApoio'
import TelaMateria1 from '../StackMaterialApoio/TelaMateira1'
import TelaFinanceiro from '../Drawer/TelaFInanceiro'

const Drawer = createDrawerNavigator();

function DrawerNavigation({navigation}){
    return(
        <Drawer.Navigator initialRouteName="Home" drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Aulas" component={TelaAulas} />
            <Drawer.Screen name="Provas" component={TelaProvas} />
            <Drawer.Screen name="TelaNotas" component={TelaNotas} />
            <Drawer.Screen name='TelaNotas2' component={TelaNotas2} />
            <Drawer.Screen name='TelaNotasFinal' component={TelaNotasFinal} />
            <Drawer.Screen name="MaterialApoio" component={TelaMaterialApoio} />
            <Drawer.Screen name="TelaMateria1" component={TelaMateria1} />
            <Drawer.Screen name="TelaCarteinhaEstudantil" component={TelaCarteinhaEstudantil} />
            <Drawer.Screen name="TelaFinanceiro" component={TelaFinanceiro} />

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