import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProductForm({route, onSubit}) {
    const {productParam} = route.params
    console.log("🚀 ~ ProductForm ~ productParam:", productParam)
    const [product, setProduct] = useState({})
    useEffect(()=>{
        
        if(productParam){
            setProduct(productParam)
        }
    }, [productParam])

    const handleSubmit = ()=>{

    }
  return (
    <SafeAreaView style={styles.container}>
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
        />

        <Text style={styles.label}>Discount </Text>
        <TextInput 
            style={styles.input}
            value={product.discount}
            // editable={false}
            keyboardType='numeric'
            
        />
    
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
    }
})