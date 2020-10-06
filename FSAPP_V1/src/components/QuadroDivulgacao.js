import React, {Component} from 'react';
import {Text, StyleSheet, View,Image, ScrollView, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiHHtzrE_-hqVm2LVoC03DnSHoc434bprhTQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnGgvApew7viYEIRWjcMCS6olPqfISY7BY9A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRefluxKMPiTbrGnrjJeVOvZz3H1D0jLuS9RQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIhRtcDstz9otnti6phls35rxqGykokKmSyQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIvfd5QRnM6SHc34LW_L2xL1mUbSxNaXA41Q&usqp=CAU'
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
    container: {width:326, height: 101, borderRadius: 20,  marginTop: 40, alignSelf: "center", alignItems: "center"},
    scrollView: {width:326, height: 101, borderRadius: 20},
    image: {width:326, height: 101, resizeMode: "cover", borderRadius: 20,borderWidth: 2,},
    pagination: {flexDirection: "row", position: "absolute", bottom: 0, alignSelf: "center"},
    paginationText: {fontSize: (326/30), color: '#888', margin: 3},
    paginationActiveText: {fontSize: (326/30), color: '#fff', margin: 3}
})