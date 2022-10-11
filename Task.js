import React, { Component } from "react";
import { View,Text,Image,Modal, TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Task extends Component{
    constructor(props){
        super(props)
        this.state={    
            modalVisible: false,
        }

    }
    render(){
        return(
            
                <ImageBackground resizeMode='cover' style={{width:'100%',height:'100%',flex:1,alignItems:'center',justifyContent:'center'}} source={require('../Images/whitebeer.jpg')}>
                    <Image source={require('../Images/icon.png')} style={{width:hp('40%'),height:hp('8%')}}/>
                        <View style={{backgroundColor:"#fff",padding:40,margin:50,borderRadius:12,borderWidth:1,borderColor:"#d9d9d9"}}>
                            <TouchableOpacity style={{backgroundColor:"#49d49b",borderRadius:12}}><Text style={{color:'#fff',marginLeft:12,marginRight:12,padding:6,fontSize:hp('3%'),textAlign:"center",fontWeight:"bold"}}>Active</Text></TouchableOpacity>
                            <Text style={{fontWeight:"bold",fontSize:hp('2.2%'),textAlign:"center"}}>$29.99/month</Text>
                            <View style={{flexDirection:"row",marginTop:20}}>
                                <Text>Next Renewal  </Text>
                                <TouchableOpacity style={{backgroundColor:"#fff"}}><Text style={{borderColor:"#d9d9d9",borderWidth:1,fontWeight:"bold"}}> August 26 </Text></TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:hp('4%'),color:"#000",fontWeight:"bold"}}>Subscription Status</Text>
                            <Text style={{textAlign:"center",fontSize:hp('2%')}}>Manage your Subscription plan.</Text>
                            <Text style={{textAlign:"center",fontSize:hp('2%')}}>You can cancel your plan anytime</Text>
                        </View>
                        <TouchableOpacity 
                        onPress = {() => {this.setState({ modalVisible: true})}}
                        style={{backgroundColor:"#d12e4d",width:hp('47%'),height:hp('7%'),marginTop:29,borderRadius:12,justifyContent:"center"}}><Text style={{color:"#fff",textAlign:"center",fontSize:hp('2.5%')}}>CANCEL SUBSCRITION</Text></TouchableOpacity>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
         
        >
                            <View style={styles.centeredView}>
                                <View style={[styles.modalView]}>
                                    <Image source={require('../Images/f23f8521db97f51720a948ec66a896468d20ee82.png')} style={{width:hp('20%'),height:hp('20%'),marginTop:20}}/>
                                    <Text style={{fontSize:hp('4%'),color:"#000",fontWeight:"bold"}}>Cancel Subscription</Text>
                                <Text style={{fontSize:hp('2%'),marginTop:20,fontWeight:'600'}} >Are You Sure You Want to</Text>
                                <Text style={{fontSize:hp('2%'),fontWeight:'600'}}>Cancel your Subscription?</Text>
                                <View style={{flexDirection:"row",justifyContent:"space-evenly",width:hp('80%'),marginTop:60}}>
                                <TouchableOpacity 
                                onPress={()=>this.props.navigation.navigate('HomeScreen')}
                                style={{padding:12}}><Text style={{fontSize:hp('2.5%'),fontWeight:"bold",color:"#000"}}>BACK</Text></TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor:"#d12e4d",padding:16,borderRadius:12}}><Text style={{color:"#fff",fontSize:hp('2.5%'),fontWeight:"bold",marginLeft:25,marginRight:25}}>CANCEL</Text></TouchableOpacity>

                                </View>
                                </View>
                                
                            </View>
        </Modal>

                    </ImageBackground>


                              
                       
                     
        );
    }
    
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor:"rgba(0,0,0,0.5)"
      
    },
    modalView: {
        borderRadius:10,
      marginTop: 70,
      backgroundColor: "white",
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height:'60%',
      width:'100%',
      
    },
})