
import React, { Component } from "react";
import { View ,Dimensions,Text,ScrollView,TouchableOpacity,SafeAreaView,TextInput,Image} from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { TextInput } from "react-native-gesture-handler";



let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

export default class SecondScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            // windowWidth:Dimensions.get('window').width,
            // windowHeight:Dimensions.get('window').height,

        }
    }
    render(){
        return(
            <SafeAreaView>
            <ScrollView>
                 <View style={{width:'100%'}}>
                    <View style={{backgroundColor:"#9500fe",height:100,borderBottomStartRadius:18,borderBottomEndRadius:18,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{color:"#fff",fontSize:18,fontWeight:"bold",margin:12}}>Lorem Ipsum</Text>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <Text style={{color:"#fff",fontSize:18,fontWeight:"bold",margin:3}}>Step</Text>
                            <Text style={{backgroundColor:"yellow",width:20,height:20,borderRadius:30,color:"#000",fontSize:14,textAlign:"center",fontWeight:"bold",margin:6}}>1</Text>
                        </View>
                    </View>

                    <View style={{width:"90%",paddingTop:30,marginLeft:30}}>
                        
                        <Text style={{fontWeight:"bold"}}>Loream Name</Text>
                        <TextInput placeholder="Loream Name" style={{borderBottomWidth:1,borderBottomColor:"#dadada",fontSize:17}}></TextInput>
                    
                        <Text style={{fontWeight:"bold"}}>Loream email</Text>
                        <TextInput placeholder="Loream ipsum dolor" style={{borderBottomWidth:1,borderBottomColor:"#dadada",fontSize:17}}></TextInput>
                   
                        <Text style={{fontWeight:"bold"}}>Ipsum dolor</Text>
                        <TextInput style={{borderBottomWidth:1,borderBottomColor:"#dadada",color:"#fb5730"}} secureTextEntry={true}></TextInput>
                    </View>

                    <View style={{flexDirection:'row',width:'90%',alignSelf:'center',marginTop:30}}>
                        <TouchableOpacity style={{width:25,borderWidth:1,borderRadius:5,height:25,alignItems:'center',justifyContent:'center'}} >
                            <Image style={{width:25,height:20,tintColor:"#cf6260"}}
                              source={require('../Images/RightVector.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{marginLeft:12,fontSize:18,fontWeight:"bold"}}>Lorem Ipsum dolor sit amet</Text>
                    </View>
                    
                    <TouchableOpacity style={{backgroundColor:"#9d00f0",padding:10,width:"40%",marginTop:30,alignItems:"center",alignSelf:"center",borderRadius:5}}>
                        <Text style={{color:"#fff",fontWeight:"bold",fontSize:20}}>Lorem</Text>
                    </TouchableOpacity>
           

                   

                 </View>
            </ScrollView>
            </SafeAreaView>
        

        )
            
    }
}