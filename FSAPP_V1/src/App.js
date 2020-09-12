import React from 'react';
import {SafeAreaView} from 'react-native'
import TelaLogin from './views/TelaLogin'
import TelaProblemas from './views/TelaProblemas'

export default props => {
    return(
    <SafeAreaView style={{flex:1}}>
        {/*<TelaLogin />*/}
        <TelaProblemas />
    </SafeAreaView>
    )
}