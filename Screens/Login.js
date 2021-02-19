import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Login() {
  return (
    <View style={styles.container}>
    <Text style={{fontWeight:'bold',fontSize:20}}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#222',
    padding: 8,
  },
});
