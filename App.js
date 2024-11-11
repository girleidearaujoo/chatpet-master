import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login'

import {  useFonts, KiwiMaru_400Regular} from  '@expo-google-fonts/kiwi-maru' 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Login/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
  box: {
    backgroundColor:'#F4A460',
    borderRadius:26,
    height: 200,
    width: 300
  }
});
