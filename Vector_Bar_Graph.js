


import React, {Component} from 'react';
import { View ,Text,ScrollView,SafeAreaView,Image,StyleSheet} from 'react-native';
import {StackedBarChart} from "react-native-chart-kit";


export default class Vector_Bar_Graph extends Component{
    constructor(props){
        super(props)
        this.state={
            // meterValue:20
         }
    }
    render(){
        const data = {
            labels: ["Test1", "Test2"],
            legend: ["L1", "L2", "L3"],
            data: [
              [60],
              [30]
            ],
            barColors: ["#dfe4ea"]
          };
          const chartConfig = {
            // backgroundGradientFrom: "#1E2923",
            // backgroundGradientFromOpacity: 0,
            // backgroundGradientTo: "#08130D",
            // backgroundGradientToOpacity: 0.5,
            // backgroundColor:"red",
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
                        <Text style={{color:"#fff",fontSize:18,fontWeight:"bold",margin:12}}> Vector_Bar_Graph Lorem Ipsum</Text>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <Image source={require('../Images/Notification.png')} style={{width:20,height:20,tintColor:"#f1e062",marginRight:10}}/>
                        </View>
                    </View>

                    <View style={{flexDirection:"row",marginTop:20,marginLeft:20}}>
                        <Image source={require('../Images/girl.jpg')} style={{width:50,height:50,borderRadius:25}}/>
                        <Text style={{fontWeight:"bold",fontSize:18,marginLeft:12}}>Loream Ipsum</Text>
                    </View>
                    
                   
                    <View style={{alignItems:"center",marginTop:20}}>
                        <Text style={{borderBottomWidth:3,width:"30%",fontSize:22,fontWeight:"bold",textAlign:"center"}}>1  115</Text>
                        <Text style={{fontSize:19,fontWeight:"bold",textAlign:"center"}}>Kelories Burn</Text>
                    </View>

                    <View>
                        <StackedBarChart
                            data={data}
                            width={200}
                            height={220}
                            chartConfig={chartConfig} />
                        
                    </View>
                   
                   
                
 </View>
            </ScrollView>
            </SafeAreaView>
        

        )
            
    }
}

