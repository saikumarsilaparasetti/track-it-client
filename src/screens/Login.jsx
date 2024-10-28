import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = ()=>{
        if(username.trim() && password.trim()){
            Alert.alert("Login Successfull")
        }else{
            Alert.alert("Login failed")
        }
    }
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Username</Text>
        <TextInput 
            style={styles.input}
            // placeholder='Enter your username'
            value={username}
            onChangeText={setUserName}
            autoCapitalize='none'
        />
        <Text style={styles.label}>Password</Text>
        <TextInput 
            style={styles.input}
            // placeholder='Enter your Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <Button color='#3DDC97' title='Login' onPress={handleLogin}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:20,
        // alignItems:"center"
        backgroundColor:'#1F1D2F'
    },
    label:{
        fontSize:16,
        marginBottom:8,
        color:'#333',
        color:'#FFFFFF'
    },
    input:{
        height:40,
        borderColor:'#ccc',
        borderWidth:1,
        marginBottom:16,
        paddingHorizontal:10,
        borderRadius:5,
        color:'#FFFFFF'
        
    },
    submit:{
        color:'#FF7F50',
    }
})