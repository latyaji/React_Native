import React, {Component} from 'react';
// import React,{} from 'react';
import { View ,Text,ScrollView,SafeAreaView,Image,TextInput,StyleSheet} from 'react-native';
import LineGraph from '@chartiful/react-native-line-graph';
import RNSpeedometer from 'react-native-speedometer';

  
export default class LineChartScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            meterValue:20
         }
    }
    render(){
        // const [meterValue, setMeterValue] = useState(20);

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
                    <View>

                        <View>

                        </View>
  
</View>

<View>
<LineGraph
  data={[10, 15, 7, 20, 14, 12, 10, 20]}
  width={375}
  height={250}
  isBezier
  lineColor ='#800000'

  baseConfig={{
    startAtZero: false,
    hasXAxisBackgroundLines: false,


   // lineColor:('#ffff5500')


  }}
  style={{
    marginTop: 30
  }}
/>
</View>
<View>
<RNSpeedometer
          value={this.state.meterValue}
          //value for Speedometer
          size={200}
          //Size of Speedometer
          minValue={0}
          //Min value for Speedometer
          maxValue={100}
          //Max value for Speedometer
          allowedDecimals={0}
          //Decimals value allowed or not
          labels={[
            {
              name: 'Low Risk',
              labelColor: '#ff2900',
              activeBarColor: '#ff2900',
            },
            {
              name: 'Medium Risk',
              labelColor: '#f4ab44',
              activeBarColor: '#f4ab44',
            },
            {
              name: 'High Risk',
              labelColor: '#00ff6b',
              activeBarColor: '#00ff6b',
            },
          ]}
          //Labels for the different steps of Speedometer
        />
        <View style={{marginTop: 70, padding: 20}}>
          <Text style={{fontSize: 20}}>
            Enter the value 
            between 0 to 100
          </Text>
          <TextInput
            placeholder="Enter Speedometer Value"
            keyboardType='numeric'
            style={styles.textInput}
            maxLength={3}
            onChangeText={(value) => this.setState({meterValue:Number(value)})}
          />
        </View>
</View>
                    

                 </View>
            </ScrollView>
            </SafeAreaView>
        

        )
            
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 55,
    fontSize: 16,
    marginTop: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
  },
});
