import React from 'react';
import {SafeAreaView} from 'react-native'
import TelaLogin from './StackViews/TelaLogin'
import TelaProblemas from './StackViews/TelaProblemas'

export default props => {
    return(
    <SafeAreaView style={{flex:1}}>
        <TelaLogin />
        {/* <TelaProblemas /> */}
    </SafeAreaView>
    )
}