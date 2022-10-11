import React,{Component} from "react";
import {View,Text,TouchableOpacity} from 'react-native';

export default class Statelogic extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 0

        }
    }
    functioncall(){
        if(this.state.count < 10)
       {
           this.setState({count:this.state.count+1})

        }    

}
    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>this.functioncall()}><Text>Click here</Text></TouchableOpacity>
                <Text>Total Number of {this.state.count}</Text>
            </View>
        )
    }

}