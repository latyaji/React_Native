
import React, {Component} from 'react';
import { View ,Text,ScrollView,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import {  BarChart } from 'react-native-svg-charts';


import {
    
    ProgressChart,
    
  } from "react-native-chart-kit";// import PieChart from 'react-native-pie-chart';
  
export default class BarChartScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            // meterValue:20
         }
    }
    render(){
        const bardata = [50, 60, 40, 95, 85,33,45,12,89,50, 60, 40, 95]

       
        const data = {
            data: [0.12,0.3]
          };
          const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            backgroundColor:"red",
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          };

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
                    
                    <View style={{width:"100%"}}>
                    <ProgressChart
                            data={data}
                            width={ 500 }
                            height={220}
                            chartConfig={{
                            backgroundGradientFrom: '#FFF8E1',
                            backgroundGradientTo: '#FFF8E1',
                            color: (opacity = 1) => `rgba(170, 0, 0, ${opacity})`,
                            }}
                            style= {{
                            borderRadius: 15,
                            }}
                        />
                    </View>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate("Vector_Bar_Graph")}
                    style={{alignItems:"center",marginTop:20}}>
                        <Text style={{borderBottomWidth:3,width:"30%",fontSize:22,fontWeight:"bold",textAlign:"center"}}>1  115</Text>
                        <Text style={{fontSize:19,fontWeight:"bold",textAlign:"center"}}>Kelories Burn</Text>
                    </TouchableOpacity>

                    <View>
                    <BarChart
                                        style={{ height: 200,width:"60%",alignSelf:"center"}}
                                        gridMin={100}
                                        gridMax={120}
                                        data={bardata}
                                        svg={{ stroke: 'rgb(255, 85, 0)' }}
                                        contentInset={{ top: 30, bottom: 30 }}>
                                        
                                </BarChart>
                    </View>
 </View>
            </ScrollView>
            </SafeAreaView>
        

        )
            
    }
}


