import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import {Button, View, TextInput, Text} from "react-native"
import { auth } from '../firebaseConfig';

const Cadastro = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');
    const router = useRouter();

    const handleCadastrar = async () => {
        try {
            await createUserWithEmailAndPassword(auth, Username, Password);
            // Signed up
            router.replace('/home');
          } catch (error) {
            console.error(error.code);
            console.error(error.message);
          }      
    }

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
        placeholderTextColor = "#A0522D" secureTextEntry={true}  autoCapitalize="none"/>
        </View>
        <View>
        <Text style={{fontFamily: "KiwiMaru_400Regular"}}>Repeat Password:</Text>
        <TextInput value = {repetirSenha} onChangeText = {setRepetirSenha} style = {{borderWidth: 1, borderColor: "#FF8247", fontFamily: "KiwiMaru_400Regular" }}  placeholder = "Repita sua senha..." 
        placeholderTextColor = "#A0522D" secureTextEntry={true}  autoCapitalize="none"/>
        </View>
        <View style= {{padding:10, fontFamily:"KiwiMaru_400Regular"}}>
        <Button title = "Cadastrar" onPress={handleCadastrar} color={"#A0522D"}  />
        </View>
        </View>
      );
}

export default Cadastro;