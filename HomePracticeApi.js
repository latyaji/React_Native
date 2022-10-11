import React,{Component} from "react";
import {View,Text,TouchableOpacity} from 'react-native'


export default class HomePracticeApi extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <View style={{marginTop:20}}>
                <Text style={{fontSize:30,fontWeight:"bold",padding:12}}>Welcome on My Page</Text>
                   
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('PracticeApi1')}
                    style={{alignItems:"center",backgroundColor:"blue",padding:12,width:"70%",alignSelf:"center",marginTop:12,borderRadius:12}}><Text style={{color:"#fff"}}>Sign Up</Text></TouchableOpacity>
                    
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('PracticeApi2')}
                    style={{alignItems:"center",backgroundColor:"blue",padding:12,width:"70%",alignSelf:"center",marginTop:12,borderRadius:12}}><Text style={{color:"#fff"}}>Sign In</Text></TouchableOpacity>
            </View>
        )
    }

}