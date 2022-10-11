// import React,{Component} from "react";
// import {View,Text,TextInput,TouchableOpacity,Alert} from 'react-native'
// import apiurl from '../pages/apiurl';

// export default class Himanshuapi extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             name: '',
//             email: '',
//             password: '',
//             cpassword:'',
//         }
//     }
//     submitbtn(){
//         this.callapi();

        
//         if(this.state.name == "")
//         {
//             alert("please Enter Your name")
//         }
//         else if(this.state.email == "")
//         {
//             alert("Please Enter Your Email Id")
//         }
//         else if(this.state.password == "")
//         {
//             alert("Please Enter Your 8 Digit password")
//         }
//         else if(this.state.cpassword == "")
//         {
//             alert("Please Enter Your 8 Digit Confirm password")
//         }

//         else if(this.state.password !== this.state.cpassword)
//         {
//                 alert("Password didn't matched");
//         }
        
//         else{
//             this.callapi();
//             // this.props.navigation.navigate('PracticeApi2');

//         }

        
//     }




//    async callapi(){
//         fetch("https://credettmvpfinal-228630-ruby.b228630.dev.eastus.az.svc.builder.cafe/bx_block_interactive_faqs/about_us/1", 

//         {
//         method: 'GET',
//         headers:{
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
        

//     }).then(res =>(res.json()))
//     .then(value =>
//     { 
//         console.log('check dataa ',value)
//         if(value.code == 0){
//             // Alert.alert("Registration successfully");
//             // console.log(value)
//             Alert.alert(
//                 "Alert Title",
//                 "Registration successfully",
//                 [
//                   {
//                     text: "Cancel",
//                     onPress: () => console.log("Cancel Pressed"),
//                     style: "cancel"
//                   },
//                   { 
//                     text: "OK", onPress: () => this.props.navigation.navigate('PracticeApi2') 
//                 }
//                 ]
//               );

//         }
//        else{
//         Alert.alert(
//             "Alert Title",
//             "User Already Registerd",
//             [
//                 {
//                     text:"Cancel",
//                     onPress: () => console.log("Cancel Pressed"),
//                     style: "cancel"
//                 },
//                 {
//                     text: "Ok",
//                     onPress: () => this.props.navigation.navigate('PracticeApi1')
//                 }
//             ]
//     )

//         // alert("already registerd ");
//        }
//             //console.log(value.code);


//         // console.log('response data ',value.Message)
//     });

//     }

//     render(){
//        // console.log('classs calll')
//        console.log('classsss ')
//         return(
//             <View style={{marginTop:20}}>
//                 <Text style={{fontSize:30,fontWeight:"bold",padding:12}}>Registration Page</Text>
//                     <TextInput 
//                      onChangeText={(text) => this.setState({name:text})}
//                     style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",}}
//                     placeholder="Enter Your name"></TextInput>
//                     <TextInput 
//                     onChangeText={(text) => this.setState({email:text})}

//                     style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",marginTop:12}}
//                     placeholder="Enter Your Email"></TextInput>
//                     <TextInput 
//                       onChangeText={(text) => this.setState({password:text})}
//                     secureTextEntry={true}
//                     style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",marginTop:12}}
//                     placeholder="Enter Your Password"></TextInput>
//                      <TextInput 
//                       onChangeText={(text) => this.setState({cpassword:text})}
//                     secureTextEntry={true}
//                     style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",marginTop:12}}
//                     placeholder="Enter Your confirm Password"></TextInput>
//                     <TouchableOpacity 
//                     onPress={()=> this.submitbtn()}
//                     style={{alignItems:"center",backgroundColor:"blue",padding:12,width:"70%",alignSelf:"center",marginTop:12,borderRadius:12}}><Text style={{color:"#fff"}}>Sign Up</Text></TouchableOpacity>
                    
//             </View>
//         )
//     }

// }pages/Himanshuapi.js

import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class Himanshuapi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getMovies() {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      this.setState({ data: json.movies });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
  }
};