import React, { Component } from 'react';
  import { StyleSheet
  , Text,
  SafeAreaView,
  ScrollView ,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  PreviewLayout,flexDirection,setflexDirection,styls, FlatList,TextInput,alert,
  } from 'react-native'
  export default class Home extends Component {
      constructor(props){
          super(props)
         this.state={
          myData:[]
         }
    }
    componentDidMount(){
              fetch("https://jsonplaceholder.typicode.com/posts")
              .then(data => data.json())
              .then(data2 => {
                console.log('check dataaa ',data2)
                console.log(data2)
                 this.setState({
                  myData:data2       // access particular data
                 })
              })
            }
    render() {
      return(
      <SafeAreaView style={{width:'100%'}}>
      <View style={{marginTop:30}}>
          <Text style={{fontSize:10,color:'red'}}>
          {this.state.text}
     </Text>
      </View>
     <View style={{width:'100%',backgroundColor:"#D14259",height:100,justifyContent:'flex-start',flexDirection:'row'}}>
     <Image source={require('../screens/IMAGES/icon.png')} style={{width:"50%",height:35,marginTop:40,tintColor:'white',marginLeft:25}}/>
     <View style={{borderRadius:10,height:60,weight:40,backgroundColor:'#934953',height:30,width:"10%",marginTop:60,marginLeft:100,flexDirection:'row',justifyContent:'space-around',}}>
      <Image source={require('../screens/IMAGES/n.png')} style={{width:"50%",height:20,tintColor:'white',justifyContent:'center',alignSelf:'center',}}/>
     </View>
</View>
<View style={{flexDirection:'row',borderRadius:10,width:'90%',backgroundColor:'#DCDCDC',marginLeft:20,marginTop:20,}}>
<Image source={require('../screens/IMAGES/search.png')} style={{width:"10%",height:28,alignSelf:'center',marginTop:10,marginLeft:5}}/>
<TextInput style={{borderRadius:10,color:'black',borderBottomColor:'black'}}
placeholder="search for theme ,course  lesson"
/>
</View>
<View style={{flexDirection:'row',justifyContent:'flex-start'}}>
<View style={{borderRadius:10,width:'12%',height:45,backgroundColor:'silver',marginTop:20,justifyContent:'center',marginLeft:10,marginLeft:20}}>
<Image source={require('../screens/IMAGES/111.png')} style={{width:"40%",height:40,alignSelf:'center',}}/>
</View>
<View style={{borderRadius:10,width:'12%',height:45,marginTop:20,justifyContent:'center',marginLeft:10,backgroundColor:'white'}}>
<Image source={require('../screens/IMAGES/wine.jpg')} style={{width:"40%",height:40,alignSelf:'center',marginTop:10}}/>
</View>
<View style={{borderRadius:10,width:'12%',height:45,marginTop:20,justifyContent:'center',marginLeft:10,marginLeft:20,backgroundColor:'white'}}>
<Image source={require('../screens/IMAGES/wisky.jpg')} style={{width:"40%",height:40,alignSelf:'center',marginTop:10}}/>
</View>
<View style={{borderRadius:10,width:'12%',height:45,marginTop:20,justifyContent:'center',marginLeft:10,marginLeft:20,backgroundColor:'white'}}>
<Image source={require('../screens/IMAGES/b1.jpg')} style={{width:"40%",height:40,alignSelf:'center',marginTop:10}}/>
</View>
</View>
 <View style={{flexDirection:'row',justifyContent:'flex-start',marginLeft:10}}>
<View style={{margin:10,fontSize:40}}>
  <Text> filters</Text>
</View>
<View style={{margin:10,marginLeft:15,fontSize:10}}>
<Text> wine</Text>
</View>
<View style={{margin:10,marginLeft:15,fontSize:10}}>
<Text> Spirites</Text>
</View>
<View style={{margin:10,marginLeft:18,fontSize:10}}>
  <Text>Beer</Text>
</View>
</View>
      <FlatList
       data={this.state.myData}
       renderItem={({item})=>
       <View style={{flexDirection:'row',justifyContent:'center'}}>
       <View>
       <Image source={require('../screens/IMAGES/moutains.jpg')} style={{width:"100%",height:100,alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:15,}}/>
      <View style={{}}></View>
       <View style ={{backgroundColor:'black',alignSelf:'center',width:'100%',height:30,flexDirection:'row',justifyContent:'flex-start',}}>
       <Image source={require('../screens/IMAGES/ORANGE.png')} style={{width:"5%",height:5,alignSelf:'center',marginLeft:10}}/>
           <Text style={{color:'white',alignSelf:'center',fontSize:10,}}>62%</Text>
            <Image source={require('../screens/IMAGES/v1.jpg')} style={{width:"10%",height:12,alignSelf:'center',marginLeft:5}}/>
          <Text style={{color:'white',alignSelf:'center',fontSize:12}}>16/25</Text>
           <Image source={require('../screens/IMAGES/c1.jpeg')} style={{width:"10%",height:10,alignSelf:'center',marginLeft:10}}/>
           <Text style={{color:'white',alignSelf:'center',fontSize:12,}}>3/5</Text>
        </View>
                   <View style={{borderBottomLeftRadius:15,borderBottomRightRadius:15,backgroundColor:'red'}}></View>
        <View style ={{borderWidth:2,borderColor:'#C0C0C0',alignSelf:'center',width:'100%',height:100,borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
        <Text style={{fontSize:15,fontFamily:'bold',borderRadius:15,color:'black',marginLeft:10,marginTop:10}}>{item.title}</Text>
        <Text style={{marginLeft:10}}> complete the essential course in order to procede the advance courses</Text>
                      <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-start'}}>
                         <Image source={require('../screens/IMAGES/purple.jpeg')} style={{width:"5%",height:10,alignSelf:'center',marginLeft:5}}/>
                         <Text style={{padding:10,color:'black',fontSize:10}}>25</Text>
                      <Image source={require('../screens/IMAGES/capp.png')} style={{width:"5%",height:10,alignSelf:'center'}}/>
                   <Text style={{padding:10,color:'black',fontSize:10}}>5 themes</Text>
                      <Image source={require('../screens/IMAGES/lock.png')} style={{width:"5%",height:10,alignSelf:'center'}}/>
                      <Text style={{borderRadius:1,padding:10,color:'black',fontSize:10}}> Easy</Text>
                      </View>
                     </View>
                      <Image source={require('../screens/IMAGES/b1.jpeg')} style={{width:"100%",height:100,alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:15,}}/>

       </View>
      </View>
      }
     >
      </FlatList>
    </SafeAreaView>
      )
    }}









