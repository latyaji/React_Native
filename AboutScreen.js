import React, { Component } from "react";
import { View,Text,TouchableOpacity } from 'react-native';

export default class AboutScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }

    }
    render(){
        return(
            <View>
                <Text>WElcome to About Screen</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}><Text>Go to Home Screen</Text></TouchableOpacity>
                </View>
        );
    }
    
}