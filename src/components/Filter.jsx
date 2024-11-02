import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function Filter({pushInput}) {
    const [searchValue, setSearchValue] = useState()
    const handleSubmit = ()=>{
        pushInput(searchValue)
        console.log("Handle submit pressed!!", searchValue);
    }
  return (
    <View style={styles.container}>
        <TextInput placeholder='search' value={searchValue} onChangeText={text=>setSearchValue(text)} style={styles.input}/>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        backgroundColor:'#F4F6FF',
        borderRadius:10
        // width:'100%'
    },
    input:{
        height:30,
        width:100,
        borderWidth:2,
        borderColor:'black',
        color:'black',
        fontWeight:'bold',
        width:'40%',
        borderRadius:5,
        padding:5
    },
    button:{
        backgroundColor: '#2196F3', // Background color
        // padding: 5,

        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center',
        height:30,
        width:60
    },
    buttonText:{
        color:'#FFFFFF',
        fontSize:15
    }
})