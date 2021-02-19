import * as React from 'react';
import { ScrollView,Text, View, StyleSheet,Dimensions,TextInput } from 'react-native';
import Welcome from '../Components/Welcome'
import Stateslist from '../Components/Stateslist';
//import Searchbar from './components/Searchbar'
const width=Dimensions.get('screen').width

export default function Dashboard() {
  
  return (
    <ScrollView style={styles.container}>
    <Welcome/>
    <View style={{height:50,width:width-50,alignSelf:'center',backgroundColor:'#e8f4f7',flexDirection:'row',alignItems:'center',borderRadius:15,paddingLeft:10,marginTop:10}}>
          <TextInput placeholder={'Search Your Destination'} style={{paddingLeft:10,flex:0.8,fontSize:20}}>
          </TextInput>
    </View>
    <Text style={{fontWeight:'bold',fontSize:25,paddingBottom:10,paddingTop:20,color:'white'}}>Explore</Text>
    <Stateslist/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#222222',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});