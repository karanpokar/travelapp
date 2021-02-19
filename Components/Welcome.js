import React from 'react';
import {View,Text,Image} from 'react-native';

export default function Welcome(){
  return(
      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',padding:10,paadingBottom:5}}>
        <View style={{flex:0.2}}>
          <Image source={{uri:'https://randomuser.me/api/portraits/men/18.jpg'}} style={{width:60, height:60, borderRadius:25}} ></Image>
        </View>
        <View style={{flex:0.8}}>
          <Text style={{fontSize:12,paddingBottom:5,color:'white'}}>WELCOME BACK</Text>
          <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Joe Dove</Text>
        </View>
      </View>
  )
}