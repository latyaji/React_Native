

import React, { Component } from "react";
import { View ,Text,ScrollView,SafeAreaView,Image, TouchableOpacity,} from 'react-native';


  
export default class LoremScreen extends Component{
    constructor(props){
        super(props)
        this.state={ }
    }
    allbtn(){
        alert("All Product show list Below");
    }
    render(){
        


        return(
            <SafeAreaView>
            <ScrollView>
                 <View style={{width:'100%'}}>
                    <View style={{backgroundColor:"#9500fe",height:100,borderBottomStartRadius:18,borderBottomEndRadius:18,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{color:"#fff",fontSize:18,fontWeight:"bold",margin:12}}> Lorem Ipsum</Text>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <Image source={require('../Images/Notification.png')} style={{width:20,height:20,tintColor:"#f1e062",marginRight:10}}/>
                        </View>
                    </View>

                    <View style={{flexDirection:"row",marginTop:20,marginLeft:20}}>
                        <Image source={require('../Images/girl.jpg')} style={{width:50,height:50,borderRadius:25}}/>
                        <Text style={{fontWeight:"bold",fontSize:18,marginLeft:12}}>Loream Ipsum</Text>
                    </View>

                    <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",padding:30}}>
                            <View>
                                <Text >Loream</Text>
                                <Text style={{fontWeight:"bold",fontSize:15,color:"#000"}}>{'\n'}174 CM</Text>
                            </View>

                            <View>
                                <Text>Ipsum</Text>
                                <Text style={{fontWeight:"bold",fontSize:15,color:"#000"}}>{'\n'}65 KG</Text>
                            </View>
                    </View>

                    <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",padding:10}}>
                        <Text>Dolar Sit</Text>
                        <TouchableOpacity 
                        onPress={()=>this.allbtn()}
                        style={{flexDirection:"row"}}><Text>All</Text><Image source={require('../Images/greater_than.png')} style={{width:20,height:20,tintColor:"#000"}}/></TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",padding:12}}>
                        <Text style={{fontWeight:"bold",color:"#000"}}>Loream</Text>
                        <Text style={{color:"#a6a6a6"}}>  17 Sep 2019</Text>
                    </View>
                    <View style={{flexDirection:"row",padding:8,borderBottomWidth:1,borderBottomColor:"#a6a6a6"}}>
                        <Text style={{marginRight:20}}>8666 m</Text>
                        <Text>44:13 min</Text>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",padding:12}}>
                        <Text style={{fontWeight:"bold",color:"#000"}}>Ipsum</Text>
                        <Text style={{color:"#a6a6a6"}}>  1 Jan 2020</Text>
                    </View>
                    <View style={{flexDirection:"row",padding:8,borderBottomWidth:1,borderBottomColor:"#a6a6a6"}}>
                        <Text style={{marginRight:20}}>1500 lcol</Text>
                        <Text>24:22 min</Text>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",padding:12}}>
                        <Text style={{fontWeight:"bold",color:"#000"}}>Dolar</Text>
                        <Text style={{color:"#a6a6a6"}}>  27 Aug 2022</Text>
                    </View>
                    <View style={{flexDirection:"row",padding:8,borderBottomWidth:1,borderBottomColor:"#a6a6a6"}}>
                        <Text style={{marginRight:20}}>1200 m</Text>
                        <Text>11:26 min</Text>
                    </View>
                 </View>
            </ScrollView>
            </SafeAreaView>
        

        )
            
    }
}
