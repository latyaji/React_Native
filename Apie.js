import React, { Component } from "react";
import { Text, StyleSheet, Image, View,SafeAreaView, TouchableOpacity,Dimensions, ScrollView, TextInput } from "react-native";
import { Linking } from 'react-native';
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

class Apie extends Component {
 constructor(props){
   super(props)
   this.state={
     windowWidth:Dimensions.get('window').width,
     windowHeight:Dimensions.get('window').height,
     name:'',
     email:'',
     password:'',
     data:[],
   }
}
 
 
validationBUtton(){
 const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
 if(this.state.name == "")
 {
   alert("Please Enter your Fullname")
 }
 // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
 else if(this.state.email == "" || reg.test(this.state.email) == false)
 {
   alert("Please Enter example@gmail.com")
 }
 else if(this.state.password == "")
 {
   alert("Please Enter Your password")
 }
 else{
//    alert("Your are Registration Sucssefully")
      this.callApi()
      this.props.navigation.navigate('LoginScreen')
 }
 
}
componentDidMount(){
//  this.callApi();
}
async callApi(){
 
 fetch('http://restapi.adequateshop.com/api/authaccount/registration', {
 method: 'POST',
 headers: {
   Accept: 'application/json',
   'Content-Type': 'application/json'
 },
 body:JSON.stringify({
   "name":this.state.name,
   "email":this.state.email,
   "password":this.state.password
})

}).then(res =>res.json())
.then(value=>{

    console.log('responces data ',value)
 if(value?.ModelState){
   alert(value?.ModelState)
 }
 else{
   console.log('responces data ',value)
 }
 
})
;
 
}
render(){
 
 return (
   <SafeAreaView style={{height:'100%'}}>
       <ScrollView>
               <View style={{backgroundColor:"#dedee3",height:windowHeight}}>
                     <View style={{backgroundColor:"#8b38e6",height:windowHeight-430,borderBottomEndRadius:20,borderBottomStartRadius:20}}>
                     </View>
 
                 <View style={{width:this.state.windowWidth,height:this.state.windowHeight,position:"absolute"}}>
                            <View style={{flexDirection:"row",marginTop:30,justifyContent:"space-between"}} >
                               <TouchableOpacity
                                         onPress={()=>this.props.navigation.navigate('APPSignin')}>
                                           {/* <Image source={require('../assest/img/arrow_back.png')} style={{width:20,height:20,tintColor:"#fff",marginTop:18,marginLeft:12}}/> */}
                             </TouchableOpacity>
                               <View style={{width:"15%",height:45,backgroundColor:"#fff",borderRadius:12}}>
                                           {/* <Image source={require('../assest/img/circle.png')} style={{width:40,height:40,tintColor:"#9800e9",alignSelf:"center"}}/> */}
                               </View>
                           <View style={{width:30,height:80}} />
                           </View>
              
                           <Text style={{color:"#fff",fontSize:18,fontWeight:"bold",marginLeft:12,fontSize:20}}>Sign Up</Text>
                           <Text style={{color:"#fff",marginLeft:12,paddingTop:12}}>Sign into Discovery Amazing things for {"\n"}around you</Text>
                           <View style={{width:"85%",height:340,backgroundColor:"#fff",alignSelf:"center",marginTop:20,borderRadius:12}}>
                                 <View>
                                 <View style={{alignItems:"center",marginTop:20,flexDirection:"row",backgroundColor:"#eeefee",width:"90%",alignSelf:"center",borderRadius:8}}>
                                       {/* <Image source={require('../assest/img/admin_5.png')} style={{width:20,height:20,marginLeft:12,tintColor:"#bdbebd",resizeMode:"contain"}}/> */}
                                       <TextInput
                                       onChangeText={(text) => this.setState({name:text})}
                                       placeholder="Full Name"
                                       style={{borderWidth:1,borderColor:"transparent",borderRadius:5,width:"70%"}}></TextInput>
                                    </View>
 
                                    <View style={{alignItems:"center",marginTop:20,flexDirection:"row",backgroundColor:"#eeefee",width:"90%",alignSelf:"center",borderRadius:8}}>
                                       {/* <Image source={require('../assest/img/email2.png')} style={{width:20,height:20,marginLeft:12,tintColor:"#bdbebd",resizeMode:"contain"}}/> */}
                                       <TextInput
                                       onChangeText={(text) => this.setState({email:text})}
                                       placeholder="Email"
                                       style={{borderWidth:1,borderColor:"transparent",borderRadius:5,width:"70%"}}></TextInput>
                                    </View>
 
                                   <View style={{alignItems:"center",marginTop:20,flexDirection:"row",backgroundColor:"#eeefee",width:"90%",alignSelf:"center",borderRadius:8}}>
                                       {/* <Image source={require('../assest/img/lock_2.png')} style={{width:20,height:20,marginLeft:12,tintColor:"#bdbebd",resizeMode:"contain"}}/> */}
                                       <TextInput
                                       secureTextEntry={true}
                                       onChangeText={(text) => this.setState({password:text})}
                                       placeholder="Password"
                                       style={{borderWidth:1,borderColor:"transparent",width:"70%"}}></TextInput>
                                    </View>
                                      
                                 </View>
 
                                   <View style={{alignItems:"center",marginTop:20}}>
                                         <TouchableOpacity
                                         onPress={()=>this.validationBUtton()}
                                       //  onPress={()=>this.props.navigation.navigate('AppLoginWithNo')}
                                         style={{width:"90%"}}>
                                                       <Text style={{backgroundColor:"#8b38e6",padding:12,textAlign:"center",color:"#fff",fontWeight:"bold",borderRadius:8}}>Sign Up</Text>
                                         </TouchableOpacity> 
                                   </View>
 
                                   <View style={{alignItems:"center",marginTop:15,flexDirection:"row",justifyContent:"center"}}>
                                     <Text style={{fontSize:13}}>By SignUp you Accept Our </Text>
                                     <TouchableOpacity><Text style={{color:"#8b38e6"}}>Term & Condition</Text></TouchableOpacity>
                                     <Text style={{fontSize:13}}> and</Text>
                                   </View>
                                   <TouchableOpacity><Text style={{color:"#8b38e6",alignSelf:"center"}}>Privacy Policy</Text></TouchableOpacity>
                                   <View style={{marginTop:19,flexDirection:"row",alignItems:'center',justifyContent:"space-between",margin:20}}>
                                         <View style={{width:"23%",borderWidth:0.6,height:0}} />
                                         <Text>Or connecting using</Text>
                                         <View style={{borderWidth:0.6,width:'23%',height:0}} />
                                     </View>
 
                    <View style={{paddingBottom:12,backgroundColor:"#fff",borderRadius:12}}>
                         <View style={{flexDirection:"row",alignSelf:'center',justifyContent:'space-around',width:'80%',paddingTop:12,marginLeft:10}}>
                             <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/login/')} style={{backgroundColor:"#586bb2",width:40,height:40,justifyContent:"center",borderRadius:8}}><Text style={{textAlign:"center",color:"#fff",fontWeight:"bold",fontSize:20}}>f</Text></TouchableOpacity>
                             <TouchableOpacity onPress={() =>Linking.openURL('https://twitter.com/i/flow/login')} style={{backgroundColor:"#00d8f7",width:40,height:40,justifyContent:"center",borderRadius:8}}><Text style={{textAlign:"center",color:"#fff",fontWeight:"bold",fontSize:20}}>t</Text></TouchableOpacity>
                             <TouchableOpacity onPress={() =>Linking.openURL('https://www.google.com/')} style={{backgroundColor:"#e24739",width:40,height:40,justifyContent:"center",borderRadius:8}}><Text style={{textAlign:"center",color:"#fff",fontWeight:"600",fontSize:20}}>g</Text></TouchableOpacity>
                             {/* <TouchableOpacity onPress={() =>Linking.openURL('https://www.apple.com/in/iphone/')} style={{backgroundColor:"#717171",width:40,height:40,justifyContent:"center",borderRadius:8}}><Image source={require('../assest/img/iphone.png')} style={{width:25,height:25,alignSelf:"center",tintColor:"#fff"}}/></TouchableOpacity> */}
                         </View>
                     </View>
                     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={{alignSelf:'center',marginTop:20,marginBottom:20}}><Text>SKIP</Text></TouchableOpacity>       
                           </View> 
             </View> 
           </View>        
       </ScrollView>
   </SafeAreaView>
 );
}
};
 
export default Apie;
