import React, {useState} from 'react';
import {View,Text,FlatList,ImageBackground, TouchableOpacity} from 'react-native';

export default function Stateslist(){
  const [DATA,setDATA] = useState([
    {
    key:4,
    image:'https://i.imgur.com/NUOnj2r.jpg',
    StateName:'Delhi ',
    },
    {
    key:5,
    image:'https://i.imgur.com/Boh4iAG.jpg',
    StateName:'Uttar Pradesh  ',
    },
    {
    key:6,
    image:'https://i.imgur.com/Mj8ixS9.jpg',
    StateName:'Himachal Pradesh  ',
    },
    {
    key:10,
    image:'https://i.imgur.com/f2YXU0Z.jpg',
    StateName:' Bihar  ',
    },
    {
    key:7,
    image:'https://i.imgur.com/YmQfsZA.jpeg',
    StateName:'Agra  ',
    },
    {
    key:1,
    image:'https://i.imgur.com/ZTPsHh8.jpg',
    StateName:'Rajasthan  ',
    },
    {
    key:2,
    image:'https://i.imgur.com/uy3hckO.jpeg',
    StateName:'Gujarat  ',
    },
    {key:3,
    image:'https://i.imgur.com/CKs0o8S.jpeg',
    StateName:'Maharashtra  ',
    },
    {
    key:8,
    image:'https://i.imgur.com/DutoRnL.jpeg',
    StateName:'Gujarat ',
    },
  ])
  return(
    <View>
    <FlatList
      data={DATA}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{ padding: 10 }}
      keyExtractor={item=>item.key.toString()}
      renderItem={({item})=>{
      return(
        <View style={{height:240, paddingLeft:10}}>
        <TouchableOpacity onPress={()=>alert(item.StateName)}>
        <ImageBackground source={{uri:item.image}} imageStyle={{borderRadius:20,paddingRight:20}} style={{width:160, height:205, resizeMode:'cover'}}>
        </ImageBackground>
        <Text style={{alignSelf:'center',color:'white',fontWeight:'bold',fontSize:16}}> {item.StateName} </Text>
        </TouchableOpacity>
        </View>
      )
      }
      }
      />
    </View>
  )
}