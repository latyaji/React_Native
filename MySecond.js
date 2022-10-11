import React, { Component } from "react";
import { View,Text,TouchableOpacity } from 'react-native';

export default class MySecond extends Component{
    constructor(props){
        super(props)
        this.state={

        }

    }
    render(){
        return(
            <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                <Text>WElcome to MySecond Screen</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoginScreen')}><Text>Go to Home Screen</Text></TouchableOpacity>
                </View>
        );
    }
    
}