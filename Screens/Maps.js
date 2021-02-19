import React from "react";
import {locations} from '../Components/Data';
import MapView, {Marker} from "react-native-maps";
import Tts from 'react-native-tts';

export default function Map(){
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 27.0845625,
        longitude: 93.5788601,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }}
    >
    {
      locations.map(marker=>(
        <Marker
        key={marker.key}
        coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
        title={marker.title}
        onPress={()=>Tts.speak(marker.Summary)}
        image={{uri:'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'}}
        style={{maxWidth:25,maxHeight:25}}
        />
      ))
    }
    </MapView>
  );
};