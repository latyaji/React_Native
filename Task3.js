import React, { Component } from "react";
import { View,Text,Image, TouchableOpacity,Modal,StyleSheet} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";


export default class Task2 extends Component{
    constructor(props){
        super(props)
        this.state={    
            modalVisible: false,
           
         
          
        }

    }
    
    render(){
        return(


            <SafeAreaView>
              <ScrollView>
              
             <TouchableOpacity 
             onPress={() =>{this.setState({modalVisible: true })}}
             style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#d12e54",height:120}}>
                    <Image source={require('../Images/icon.png')} style={{width:hp('20%'),height:hp('4%'),tintColor:"#fff",margin:12,marginTop:65}}/>
                      <View style={{alignSelf:"center",backgroundColor:"#b5304d",marginRight:12,borderRadius:12,marginTop:40}}>
                      <Image source={require('../Images/Notification.png')} style={{width:hp('3%'),height:hp('3%'),alignSelf:"center",tintColor:"#fff",margin:12}}/>
                    </View>
               </TouchableOpacity>

                   <Modal
                            animationType="slide"
                            transparent={true}
                            visible={true} >
                            <View style={styles.centeredView}>
                                <View style={[styles.modalView]}>
                                    <Image source={require('../Images/Sc.png')} resizeMode='contain' style={{width:hp('47%'),height:hp('60%'),marginTop:10}}/>
                                    <Text style={{fontSize:hp('3.5%'),fontWeight:"bold",textAlign:"center",color:"#402a33"}}>This Your EtOH Coach Score</Text>
                                     <Text style={{fontSize:hp('2%'),textAlign:"center"}}>Check the Leaderboard to Know your ranking!</Text>
                                    <TouchableOpacity 
                                     onPress={()=>this.props.navigation.navigate('Task2')}
                                    style={{backgroundColor:"#be3f51",padding:hp('2%'),width:"90%",borderRadius:12,alignSelf:"center",marginTop:20,marginBottom:20}}><Text style={{color:"#fff",fontSize:hp('2.5%'),fontWeight:"bold",textAlign:"center"}}>VIEW LEADERBOARD</Text></TouchableOpacity>
                               </View>                                    
                                
                            </View>
        </Modal>

              </ScrollView>
               
            </SafeAreaView>
            
        )
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
    marginTop: 30,
    backgroundColor: "white",
   // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
   // height:'80%',
    width:'100%',
    
  },
})


