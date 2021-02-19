import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import InitialScreen from './Screens/InitialScreen';
import Login from './Screens/Login';
//import Dashboard from './Screens/Dashboard'

const Stack = createStackNavigator();

function MyStack() {
 
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name='Welcome' component={InitialScreen}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
