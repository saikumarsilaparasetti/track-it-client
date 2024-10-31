import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, StatusBar, Image, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import apiCaller from '../services/apiCaller';

export default function ProductDetails({route, navigation}) {
    
    const {item} = route.params;
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        const getData =async()=>{
            try {
                const product = await apiCaller(`product/${item.id}`)
                setProduct(product)
            } catch (error) {
                console.log(error);
                
            }
        }
        getData()
    }, [])

    const handleSubmit = ()=>{
      navigation.navigate('ProductForm', {productParam:product})
    }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Product Details</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri:'https://lntsufin.com/storage/mediafiles/catalog/live/16431-5551/original/16431-5551_image_0.jpg'}} style={styles.image}/>
      </View>
        <View style={styles.tableRow}>
          <Text style={styles.propName}>Name</Text>
          <Text style={styles.propValue}>{product && product.name}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.propName}>MRP</Text>
          <Text style={styles.propValue}>{product && product.mrp}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.propName}>Discount</Text>
          <Text style={styles.propValue}>{product && product.discount}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.propName}>Stock Quantity</Text>
          <Text style={styles.propValue}>{product && product.quantity}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.propName}>Category</Text>
          <Text style={styles.propValue}>{product && product.category}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title='Edit' onPress={handleSubmit}/>
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'flex-start',
        padding: 16,
        backgroundColor: '#1F1D2F',
        height:'100%'
      },
      tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f1f8ff',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
      },
      headerText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
      },
      rowText: {
        flex: 1,
        textAlign: 'center',
      },
      propValue:{
        color:'white',
        fontWeight:'1000'
      },
      propName:{
        color:'white'
      },
      heading:{
        fontSize:28,
        fontWeight:'bold',
        color:'white'
      },
      image:{
        height:200,
        width:200,
        resizeMode:'cover',
        borderWidth:2,
        borderColor:'#FF6347',
        borderRadius:15
      },
      imageContainer:{
        flexDirection:'row',
        justifyContent:'center',
        padding:20
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
