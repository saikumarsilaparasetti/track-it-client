import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Spinner from '../components/Spinner'
import apiCaller from '../services/apiCaller'

export default function ProductForm({route, onSubit, navigation}) {
    const {productParam} = route.params
    console.log("🚀 ~ ProductForm ~ productParam:", productParam)
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const isAllFieldsEditable = productParam?.name?false:true
    const addingProduct = productParam?.name?false:true
    useEffect(()=>{
        
        if(productParam){
            setProduct(productParam)
        }
    }, [productParam])

    const handleSubmit = async()=>{
        setLoading(true)
        
        console.log("🚀 ~ handleSubmit ~ product:", product)
       // case handling adding of product
        if(addingProduct){
            const productCreated = await apiCaller('product/create', 'POST', {...product})
            console.log("🚀 ~ handleSubmit ~ productCreated:", productCreated)
            if(productCreated){
                setLoading(false)
                Alert.alert("Success!!", "Product created Successfully!!")
                navigation.navigate('productsListing')
            }else{
                setLoading(false)
                Alert.alert("Error!!", "Couldnt create Product, Please try again!!")    
            }
        }else{// case handling editing of product
            console.log(product.id);
            console.log(product);
            const productUpdated = await apiCaller(`product/update/${product.id}`, 'POST', {...product})
            console.log("🚀 ~ handleSubmit ~ productUpdated:", productUpdated)
            if(productUpdated){
                setLoading(false)
                Alert.alert("Success!!", "Product Updated Successfully!!")
                navigation.navigate('productsListing')
            }else{
                setLoading(false)
                Alert.alert("Error!!", "Couldnt update prodcut Product, Please try again!!")    
            }
        }

    }
        // console.log("🚀 ~ handleSubmit ~ product:", product)
    const handleChange = (key, value)=>{
        setProduct(prevState=>({
            ...prevState,
            [key]:value
        }))
    }
  return (
    <SafeAreaView style={styles.container}>
        {loading?(<Spinner/>): (
            <View style={styles.innerContainer}>
        <Text style={styles.heading}>{product.name?'Edit':'Add'+' Product'}</Text>
        
        <Text style={styles.label}>Product Name: </Text>
        <TextInput 
            style={styles.input}
            value={product.name}
            onChangeText={text=>handleChange('name', text)}
            editable={isAllFieldsEditable}
        />

        <Text style={styles.label}>Product category: </Text>
        <TextInput 
            style={styles.input}
            value={product.category}
            onChangeText={text=>handleChange('category', text)}
            editable={isAllFieldsEditable}
        />


        <Text style={styles.label}>MRP </Text>
        <TextInput 
            style={styles.input}
            // value={product.mrp}
            placeholder={""+(productParam?.mrp?productParam?.mrp:'')}
            placeholderTextColor={'white'}
            // editable={false}
            onChangeText={text=>handleChange('mrp', text)}
            keyboardType='numeric'
        />

        <Text style={styles.label}>Discount </Text>
        <TextInput 
            style={styles.input}
            value={product.discount}
            // editable={false}
            placeholder={""+(productParam?.discount?productParam?.discount:'')}
            placeholderTextColor={'white'}
            onChangeText={text=>handleChange('discount', text)}
            keyboardType='numeric'
            
        />
        <View style={styles.buttonContainer}>
            <Button style={styles.button} title={addingProduct?'Create Product':'Edit Product'} onPress={handleSubmit}/>
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