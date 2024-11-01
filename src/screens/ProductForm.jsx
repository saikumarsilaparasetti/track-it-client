import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Spinner from '../components/Spinner'

export default function ProductForm({route, onSubit, navigation}) {
    const {productParam} = route.params
    console.log("🚀 ~ ProductForm ~ productParam:", productParam)
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        
        if(productParam){
            setProduct(productParam)
        }
    }, [productParam])

    const handleSubmit = ()=>{
        setLoading(true)
    }
  return (
    <SafeAreaView style={styles.container}>
        {loading?(<Spinner/>): (
            <View style={styles.innerContainer}>
        <Text style={styles.heading}>Edit Product</Text>
        
        <Text style={styles.label}>Product Name: </Text>
        <TextInput 
            style={styles.input}
            value={product.name}
            editable={false}
        />

        <Text style={styles.label}>Product category: </Text>
        <TextInput 
            style={styles.input}
            value={product.category}
            editable={false}
        />


        <Text style={styles.label}>MRP </Text>
        <TextInput 
            style={styles.input}
            value={product.mrp}
            // editable={false}
            keyboardType='numeric'
        />

        <Text style={styles.label}>Discount </Text>
        <TextInput 
            style={styles.input}
            value={product.discount}
            // editable={false}
            keyboardType='numeric'
            
        />
        <View style={styles.buttonContainer}>
            <Button style={styles.button} title='Submit' onPress={handleSubmit}/>
        </View>
        </View>
        )}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
      justifyContent:'flex-start',
        padding: 16,
        backgroundColor: '#1F1D2F',
        height:'100%'
    },
    innerContainer:{
        flex:1,
        justifyContent:'flex-start',
        //   padding: 16,
          backgroundColor: '#1F1D2F',
          height:'100%'
    },
    label:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:4,
        color:'white',
    },
    input:{
        color:'white',
        height:40,
        borderColor:'#ccc',
        borderWidth:1,
        paddingHorizontal:8,
        marginBottom:16,
        borderRadius:5
    },
    heading:{
        fontSize:28,
        fontWeight:'bold',
        color:'white'
    },
    button:{
        color:'#3DDC97',
        padding:10
      },
      buttonContainer:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        padding:20
        
      }
})