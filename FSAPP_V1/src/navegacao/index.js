import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import TelaLogin from '../StackViews/TelaLogin'
import TelaProblemas from '../StackViews/TelaProblemas'

const Drawer = createDrawerNavigator();

function DrawerNavigation({navigation}){
    return(
        <Drawer.Navigator>
            
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
                <StackApp.Screen name="HomeApp" component={DrawerNavigation} options={{headerShown: false}}/>
            </StackApp.Navigator>
        </NavigationContainer>
    );
}
// title: "FSAPP",
                        // headerStyle:{
                        //     backgroundColor: "#09519B",
                            
                        // },
                        // headerStatusBarHeight: 10,
                        // headerTitleAlign: "center",
                        // headerTintColor: "white",
                        // headerTitleStyle: {
                        //     fontSize: 64
                        // },