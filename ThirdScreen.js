
import React, { Component } from "react";
import { View ,Text,ScrollView,SafeAreaView,Image, TouchableOpacity,} from 'react-native';
import {  LineChart,BarChart } from 'react-native-svg-charts';


  
export default class ThirdScreen extends Component{
    constructor(props){
        super(props)
        this.state={ }
    }
    render(){
        const data2 = [80, 10, 95, 48, 24, 67, 51, 12, 33, 0, 24, 20, 50]
        const data = [50, 60, 40, 95, 85]
        // const dataWithPickedColors = data5.map((item) => transformDataForBarChart(item))


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
                            <View style={{flexDirection:"row"}}>
                                <Image source={require('../Images/heart.png')} style={{width:25,height:25,tintColor:"red",marginRight:12}}/>
                                <Text style={{fontWeight:"bold",fontSize:18,color:"#000"}}>117</Text>
                                <Text>{'\n'}hpm</Text>
                            </View>

                            <View style={{flexDirection:"row"}}>
                                <Image source={require('../Images/half-moon.png')} style={{width:25,height:25,tintColor:"red",marginRight:12}}/>
                                <Text style={{fontWeight:"bold",fontSize:18,color:"#000"}}>7 Hours 23 m</Text>
                                <Text>{'\n'}time</Text>
                            </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:-50}} >
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('LineChartScreen')}>
                   <LineChart
                        style={{ height: 100 ,width:100}}
                        gridMin={-20}
                        gridMax={120}
                        data={data2}
                        svg={{ stroke: 'rgb(255, 85, 0)' }}
                        contentInset={{ top: 20, bottom: 20 }}>
                        
                    </LineChart>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={()=>this.props.navigation.navigate("BarChartScreen")}>
                            <BarChart
                                        style={{ height: 200,width:80 }}
                                        gridMin={-100}
                                        gridMax={120}
                                        data={data}
                                        svg={{ stroke: 'rgb(255, 85, 0)' }}
                                        contentInset={{ top: 30, bottom: 30 }}>
                                        
                                </BarChart>
                   </TouchableOpacity>
                    </View>

                    <View style={{marginLeft:20}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoremScreen')}>
                    <View style={{flexDirection:"row"}}>
                                <Image source={require('../Images/run_man.png')} style={{width:30,height:30,tintColor:"red"}}/>
                                <Text style={{fontWeight:"bold",fontSize:18,marginLeft:19}}>Loream Ipsum</Text>
                                
                            </View>
                            <View>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                            </View>
                    </TouchableOpacity>
                    </View>

                    <View style={{marginLeft:20,marginTop:40}}>
                            <View style={{flexDirection:"row"}}>
                                <Image source={require('../Images/dumbbell.jpg')} style={{width:30,height:30,tintColor:"red"}}/>
                                <Text style={{fontWeight:"bold",fontSize:18,marginLeft:19}}>Loream Ipsum</Text>
                                
                            </View>
                            <View>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                            </View>
                    </View>

                    

                 </View>
            </ScrollView>
            </SafeAreaView>
        

        )
            
    }
}
