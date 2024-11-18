import {Button, Alert, Text, View, TextInput} from "react-native"
import {auth} from '../firebaseConfig';
import {signInWithEmailAndPassword} from "firebase/auth"
import {useState } from "react";
import {useRouter } from "expo-router";

export default function Login(){

  const [Username, setUsername] = useState ('')
  const [Password, setPassword] = useState ('')
  const router = useRouter()

  const handleLogin = async () => {
  try {
  const userCredential = await signInWithEmailAndPassword(auth, Username, Password)
  // Signed in 
  const user = userCredential.user;;
  console.log(user)
  router.replace ('/telaInicial')
  
  } catch (error){
    if(error.code == "auth/invalid-email") {
      Alert.alert("Erro", "email inválido!!")
    }
    if(error.code == "auth/missing-password") {
      Alert.alert("Erro", "senha inválida!!")
    }
    if(error.code == "auth/invalid-credential") {
      Alert.alert("Erro", "senha não corresponde ao email!!")
    }
    console.error(error.message)
  }}
  

  return (
    <View style = {{
    justifyContent:"center", 
    flex:1,
    padding:25
   }}>
    <View>
    <Text style={{fontFamily: "KiwiMaru_400Regular"}}>Username: </Text>
    <TextInput value = {Username} onChangeText = {setUsername} style = {{borderWidth: 1, borderColor: "#FF8247", fontFamily: "KiwiMaru_400Regular" }} placeholder = "Digite seu usuário..." 
    placeholderTextColor = "#A0522D" autoCapitalize="none"/>
    </View>
    <View>
    <Text style={{fontFamily: "KiwiMaru_400Regular"}}>Password:</Text>
    <TextInput value = {Password} onChangeText = {setPassword} style = {{borderWidth: 1, borderColor: "#FF8247", fontFamily: "KiwiMaru_400Regular" }}  placeholder = "Digite sua senha..." 
    placeholderTextColor = "#A0522D" secureTextEntry={true} autoCapitalize="none"/>
    </View>
    <View style= {{padding:2, fontFamily:"KiwiMaru_400Regular"}}>
    <Button title = "Login" onPress={handleLogin} color={"#A0522D"} />
    <Button title = "Cadastrar" onPress={() => router.navigate('/cadastro')} color={"#A0522D"} />
    </View>
    </View>
  );
};

