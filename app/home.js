import { View, Text, Button} from 'react-native';
import React from 'react';
import {auth} from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';


const Home = () => {
    const user = auth.currentUser;
    const router = useRouter()

    const handleLogout = async () => {
      await signOut(auth)
      router.replace("/")
    }
    return (
      <View style = {{
        justifyContent:"center", 
        flex:1,
        padding:25
       }}>
        <View>
          <Text> Bem vindo ao nosso programa, {user.email}! </Text>
          <View style= {{padding:10, fontFamily:"KiwiMaru_400Regular"}}></View>
          <Button title = "Sair" onPress={handleLogout} color={"#A0522D"} /> 
          </View>
          </View>
        )
}
export default Home
