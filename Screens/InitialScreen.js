import React from 'react';
import { Text, View, StyleSheet,ImageBackground,Dimensions,TouchableOpacity } from 'react-native';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height

export default function App({navigation}) {
  const images = ["https://res.cloudinary.com/dskyiphth/image/upload/v1613663334/Travel/ashwini-chaudhary-fgm3VWev8UY-unsplash_crmc5f.jpg",'https://res.cloudinary.com/dskyiphth/image/upload/v1613663334/Travel/sourabh-agarwal-R-Zcte8oACo-unsplash_ge2lak.jpg',"https://res.cloudinary.com/dskyiphth/image/upload/v1613663333/Travel/raghu-nayyar-EpAq2EE-shg-unsplash_yqxnn0.jpg",'https://res.cloudinary.com/dskyiphth/image/upload/v1613663335/Travel/vikram-B_ufwLFEZPE-unsplash_j0l0ii.jpg','https://res.cloudinary.com/dskyiphth/image/upload/v1613663334/Travel/divjot-ratra-kFttVr9ULSY-unsplash_bbk1os.jpg','https://res.cloudinary.com/dskyiphth/image/upload/v1613663334/Travel/derek-story-vl69QxcojR0-unsplash_gzjf42.jpg','https://res.cloudinary.com/dskyiphth/image/upload/v1613663335/Travel/vikram-B_ufwLFEZPE-unsplash_j0l0ii.jpg','https://res.cloudinary.com/dskyiphth/image/upload/v1613663333/Travel/annie-spratt-WCgioEcEVNc-unsplash_mao9y0.jpg'];
  const val= images[Math.floor(Math.random()*images.length)];
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri:val}} imageStyle={{resizeMode:'cover'}} style={{width:width,height:height,justifyContent:'flex-end'}}>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}  activeOpacity={0.8} style={{alignSelf:'center',marginBottom:30,width:200,height:50,backgroundColor:'#276DF5',alignItems:'center',justifyContent:'center',borderRadius:10}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'white'}} > Get Started!  </Text>
            </TouchableOpacity>
        </View>      
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
