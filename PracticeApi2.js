import React,{Component} from "react";
import {View,Text,TextInput,TouchableOpacity} from 'react-native'


export default class PracticeApi2 extends Component{
    constructor(props){
        super(props)
        this.state={

            email:'',
            password:'',
        }
    }

loginfun(){
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/

    if(this.state.email == "" || reg.test(this.state.email) == false)
    {
            alert("Please Enter Your Email Id in this formate example@gmail.com")
    }
    else if(this.state.password == "" || this.state.password.length < 9)
    {
       alert("plesae Enter Your Password minimum 8 character")
    }
    else{
          alert("Login Successfully")
          this.props.navigation.navigate('HomePracticeApi')

    }  

}
    render(){
        return(
            <View style={{marginTop:20}}>
                <Text style={{fontSize:30,fontWeight:"bold",padding:12}}>Login Page</Text>
                    <TextInput 
                    onChangeText={(text) => this.setState({email:text})}
                    style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",marginTop:12}}
                    placeholder="Enter Your Email"></TextInput>
                    <TextInput 
                    onChangeText={(text) => this.setState({password:text})}
                    secureTextEntry={true}
                    style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",marginTop:12}}
                    placeholder="Enter Your Password"></TextInput>
                    <TouchableOpacity 
                    onPress={()=>this.loginfun()
                    }
                    style={{alignItems:"center",backgroundColor:"blue",padding:12,width:"70%",alignSelf:"center",marginTop:12,borderRadius:12}}><Text style={{color:"#fff"}}>Sign In</Text></TouchableOpacity>
                    
            </View>
        )
    }

}