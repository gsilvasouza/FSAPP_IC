import React, {Component} from 'react';
import {Text, StyleSheet, View,Image, ScrollView, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';



const images = [
    'https://images.pexels.com/photos/4843441/pexels-photo-4843441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/3585648/pexels-photo-3585648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1967539/pexels-photo-1967539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2600348/pexels-photo-2600348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/879814/pexels-photo-879814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]

export class QuadroDivulgacao extends Component{
    state ={
        active: 0
    }

    change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
            this.setState({active: slide});
        }
    } 
    render(){
        return(
            <View style={stylesCarrosel.container}>
                <ScrollView 
                pagingEnabled 
                horizontal 
                onScroll={this.change}
                showHorizontalScrollIndicator={false}
                style={stylesCarrosel.scrollView}
                >
                    {
                        images.map((images, index) => (
                        <Image 
                        key={index}
                        source={{uri: images}}
                        style={stylesCarrosel.image}/>
                        ))
                    }
                </ScrollView>  
                <View style={stylesCarrosel.pagination} >
                    {
                        images.map((i,k) => (
                            <Text key={k} style={k==this.state.active ? stylesCarrosel.paginationActiveText : stylesCarrosel.paginationText}>⬤</Text>
                        ))
                    }
                </View>
            </View>
        )

    }
}
const stylesCarrosel = StyleSheet.create({
    container: {width:326, height: 81, borderRadius: 20,  marginTop: 40, alignSelf: "center", alignItems: "center"},
    scrollView: {width:326, height: 81, borderRadius: 20},
    image: {width:326, height: 81, resizeMode: "cover", borderRadius: 20,borderWidth: 2,},
    pagination: {flexDirection: "row", position: "absolute", bottom: 0, alignSelf: "center"},
    paginationText: {fontSize: (326/30), color: '#888', margin: 3},
    paginationActiveText: {fontSize: (326/30), color: '#fff', margin: 3}
})