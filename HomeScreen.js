import React, { Component } from "react";
import { View,Text,Image,SafeAreaView, TouchableOpacity} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
// import { SafeAreaView } from "react-native-safe-area-context";

export default class HomeScreen extends Component{
    constructor(props){
        super(props)
        this.state={}

    }
    render(){
        return(
            <SafeAreaView style={{backgroundColor:"#7a00cf",flex:1}}>
                <ScrollView>
                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task2')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>Task2Screen</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task3')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>Task3Screen</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Statelogic')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>Statelogic</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Apie')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>Api Implementation</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomePracticeApi')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>DEmo Api Implementation</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Searchbar')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>Search Bar Implementation</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Himanshuapi')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>Himanshuapi API Implementation</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('OnlineSearchBar')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>OnlineSearchBar API Implementation</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Longpress')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>Longpress API Implementation</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Liveprojectui1')}><Text style={{color:"#000",fontSize:20,padding:12,backgroundColor:"#ffc663",borderWidth:2,margin:20}}>Liveprojectui1 API Implementation</Text></TouchableOpacity>

                    </View>
                       <View>
                            <View style={{alignItems:"center"}}>
                                <Text style={{color:"#fff",fontSize:40,fontWeight:"bold",textAlign:"center",marginTop:60}}>Lorem Ipsum {'\n'}Dolor</Text>
                                <Image source={require('../Images/d.png')} style={{width:"40%",height:50,tintColor:"#fff",marginTop:50}}/>

                            </View>

                            <View style={{marginTop:30}}>
                                    <View style={{flexDirection:"row",justifyContent:"space-between",flex:1,alignItems:"center",width:"80%",padding:10,marginLeft:30}}>
                                        <Text style={{fontSize:90,color:"#fff"}}>{`\u2022`}</Text>
                                        <Text style={{color:"#ffd0fe",fontSize:16,marginLeft:30}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                                    </View>

                                    <View style={{flexDirection:"row",justifyContent:"space-between",flex:1,alignItems:"center",width:"80%",marginLeft:30}}>
                                        <Text style={{fontSize:90,color:"#fff"}}>{`\u2022`}</Text>
                                        <Text style={{color:"#ffd0fe",fontSize:16,marginLeft:30}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                                    </View>
                            </View>

                                <View style={{marginTop:30,marginLeft:10,flexDirection:"row",justifyContent:"space-around",marginBottom:30}}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyTabs')}>
                                    <Text style={{backgroundColor:"#ff5d3b",fontSize:30,color:"#fff",padding:10}}>Sign in</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task')}>
                                    <Text style={{backgroundColor:"#ffe55c",fontSize:30,color:"#000",padding:10}}>Registration</Text>
                                </TouchableOpacity>
                                </View>
                       </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
    
}