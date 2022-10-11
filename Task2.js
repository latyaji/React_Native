import React, { Component } from "react";
import { View,Text,Image, TouchableOpacity,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";


export default class Task2 extends Component{
    constructor(props){
        super(props)
        this.state={    
            modalVisible: false,
            WeeklyData :[
              {
                id:1,
                name:'Rick Sanchez',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:2,
                name:'Morty Smitch',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:3,
                name:'Summer Smitch',
                number:1200,
                image:require('../Images/award.png')
               
              },
              {
                id:4,
                name:'Beith Smitch',
                number:1300,
                image:require('../Images/award.png')
                
              },
              {
                id:5,
                name:'Jerry Smitch',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:6,
                name:'Abadango Cluster Princess',
                number:4300,
                image:require('../Images/award.png')
                
              },
             
              {
                id:7,
                name:'Alain Rails',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:8,
                name:'Rick Sanchez',
                
              },
              {
                id:9,
                name:'Morty Smitch',
               
              },
             
            ],
            DaliData :[
              {
                id:1,
                name:'Rick Sanchez',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:2,
                name:'Morty Smitch',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:3,
                name:'Summer Smitch',
                number:1200,
                image:require('../Images/award.png')
               
              },
            ],
            AllData :[
              {
                id:1,
                name:'Rick Sanchez',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:2,
                name:'Morty Smitch',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:3,
                name:'Summer Smitch',
                number:1200,
                image:require('../Images/award.png')
               
              },
              {
                id:4,
                name:'Beith Smitch',
                number:1300,
                image:require('../Images/award.png')
                
              },
              
            ],
         data:[]
         
          
        }

    }
     datatwo(item) {
      // console.log("called function",this.state.borderLine);
      if(item =='Weekly'){
        this.setState({data:this.state.WeeklyData})
      }
      else if(item =='Daily'){
        this.setState({data:this.state.DaliData})
      }
      else if(item =='All time'){
        this.setState({data:this.state.AllData})
      }
       
      
    }
    render(){
      console.log('valuesss ',this.state.borderLine)
        return(


            <SafeAreaView>
                <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#d12e54",height:120}}>
                    <Image source={require('../Images/icon.png')} style={{width:hp('20%'),height:hp('4%'),tintColor:"#fff",margin:12,marginTop:65}}/>
                      <View style={{alignSelf:"center",backgroundColor:"#b5304d",marginRight:12,borderRadius:12,marginTop:40}}>
                      <Image source={require('../Images/Notification.png')} style={{width:hp('3%'),height:hp('3%'),alignSelf:"center",tintColor:"#fff",margin:12}}/>
                    </View>
               </View>

           <View style={{flexDirection:"row",height:hp('40%'),alignItems:"center"}}>

           <View style={{alignItems:"center"}}>
              <Image source={require('../Images/wine.png')} style={{width:hp('17%'),height:hp('17%')}}/>
              <Text style={{fontWeight:"bold",fontSize:hp('2.8%'),color:"#000"}}>Top daily</Text>
              <Text>Vanessas White</Text>
              <View style={{flexDirection:"row"}}>
              <Text style={{color:"#9980fa",fontWeight:"bold",fontSize:hp('2%')}}>125</Text>
              <Image source={require('../Images/award.png')} style={{width:hp('3%'),height:hp('3%'),tintColor:"#9980fa"}}/>
              </View>

              </View>
              <View style={{alignItems:"center"}}>
              <Image source={require('../Images/wine.png')} style={{width:hp('17%'),height:hp('17%')}}/>
              <Text style={{fontWeight:"bold",fontSize:hp('2.8%'),color:"#000"}}>Top weekly</Text>
              <Text>Elsie Snyder</Text>
              <View style={{flexDirection:"row"}}>
              <Text style={{color:"#9980fa",fontWeight:"bold",fontSize:hp('2%')}}>345</Text>
              <Image source={require('../Images/award.png')} style={{width:hp('3%'),height:hp('3%'),tintColor:"#9980fa"}}/>
              </View>

              </View>
              <View style={{alignItems:"center"}}>
              <Image source={require('../Images/wine.png')} style={{width:hp('17%'),height:hp('17%')}}/>
              <Text style={{fontWeight:"bold",fontSize:hp('2.8%'),color:"#000"}}>Top1</Text>
              <Text>Gregory Miller </Text>
              <View style={{flexDirection:"row"}}>
              <Text style={{color:"#9980fa",fontWeight:"bold",fontSize:hp('2%')}}>1600</Text>
              <Image source={require('../Images/award.png')} style={{width:hp('3%'),height:hp('3%'),tintColor:"#9980fa"}}/>
              </View>

              </View>
             

           </View>

           <View style={{flexDirection:"row",justifyContent:"space-around",borderBottomWidth:.2,paddingBottom:12}}>
           <TouchableOpacity 
                onPress={()=>{
                this.setState({borderLine:'Weekly'})
                this.datatwo('Weekly')}} >
                <Text style={{fontWeight:"bold",color:"#000",borderBottomWidth:5,borderBottomColor:this.state.borderLine =='Weekly'?"#cf5f73":'white'}}>Weekly</Text>
                
             </TouchableOpacity>

             <TouchableOpacity 
                onPress={()=>{
                  this.setState({borderLine:'Daily'})
                  this.datatwo('Daily')
                }} >
                <Text style={{fontWeight:"bold",color:"#000",borderBottomWidth:5,borderBottomColor:this.state.borderLine =='Daily'?"#cf5f73":'white'}}>Daily</Text>
                
             </TouchableOpacity>

             <TouchableOpacity 
                onPress={()=>{this.setState({borderLine:'All time'})
                this.datatwo('All time')
                }} >
                <Text style={{fontWeight:"bold",color:"#000",borderBottomWidth:5,borderBottomColor:this.state.borderLine =='All time' ? "#cf5f73":'white'}}>All time</Text>
                
             </TouchableOpacity>

               
           </View>

           <FlatList style={{marginTop:20}}
                  data={this.state.data}
                  renderItem={({item})=>
                  <TouchableOpacity style={{width:'100%',flexDirection:'row',height:50,borderBottomWidth:.3,borderBottomColor:"grey",justifyContent:"space-between"}}>
                          <View style={{flexDirection:"row"}}>
                          <Text>   {item.id}</Text>
                          <Text>   {item.name}</Text>
                          </View>
                          
                      <View style={{flexDirection:"row"}}>
                            <Text style={{color:"#9980fa",fontWeight:"bold",fontSize:hp('2.2%')}}>{item.number}</Text>
                            <Image source={item.image} style={{width:hp('3%'),height:hp('3%'),tintColor:"#9980fa"}}/>
                          </View>
                  </TouchableOpacity>
                }
     />
            </SafeAreaView>
            
        )
    }
}


