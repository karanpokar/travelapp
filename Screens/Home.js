import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Welcome from '../Components/Welcome';
import Dashboard from './Dashboard'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Maps from './Maps'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="black"
      inactiveColor="blue"
      barStyle={{ backgroundColor: 'white' }}
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Explore"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
          <Image source={{uri:'https://www.flaticon.com/premium-icon/icons/svg/471/471012.svg'}} color={color} style={{width:25,height:25}} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Maps}
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color }) => (
            <Image source={{uri:'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'}} color={color} style={{width:25,height:25}} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Dashboard}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image source={{uri:'https://cdn3.iconfinder.com/data/icons/essential-pack/32/30-User-Location-512.png'}} color={color} style={{width:25,height:25}} />
          ),
        }}
      />
      <Tab.Screen
        name="WL"
        component={Dashboard}
        options={{
          tabBarLabel: 'Wish List',
          tabBarIcon: ({ color }) => (
            <Image source={{uri:'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Checklist-512.png'}} color={color} style={{width:25,height:25}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#E9D6EC',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
