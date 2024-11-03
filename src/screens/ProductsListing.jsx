import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'; 

import apiCaller from '../services/apiCaller'
import { Table } from 'react-native-table-component'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import Filter from '../components/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

import { fas } from '@fortawesome/free-solid-svg-icons'; // Import the solid icon set
import { useFocusEffect } from '@react-navigation/native';
import Spinner from '../components/Spinner';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductsListing({navigation}) {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  library.add(fas); // Add the solid icon set to the library

  useFocusEffect(
    useCallback(()=>{

      const fetchData = async()=>{
          try {
            const data ={}
            setLoading(true)
              const products  =  await apiCaller(`product/getall?query=${search}`, 'POST', data)
              setProducts(products)
              setLoading(false)
          } catch (error) {
              Alert.alert("Error in fetching data", error)
          }
      }
      fetchData();
    }, [search])  
  
  )

  const handleAddProduct = ()=>{
    navigation.navigate('ProductForm',{})
  }
  const searchValue = (valueSearched)=>{
    setSearch(valueSearched)
    console.log('Value searched', search);
    
  }
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>ID</Text>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>MRP</Text>
    </View>
  );

  // Render each row of the table
  const renderRow = ({ item }) => (
    
    <TouchableOpacity 
        style={styles.row} 
        onPress={()=>navigation.navigate('Product', {item})}    
    >
      <Text style={styles.rowText}>{item.id}</Text>
      <Text style={styles.rowText}>{item.name}</Text>
      <Text style={styles.rowText}>{item.mrp}</Text>
    </TouchableOpacity>
  );

    return (
        <SafeAreaView style={styles.container}>
          {/* {loading&& <Spinner/>} */}
          
            <View style={styles.filterContainer}>
              <Filter pushInput={searchValue}/>
            </View>

            <View style={styles.headerContainer}>
              <Text style={styles.heading}>Products</Text>
              {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
              
              <TouchableOpacity style={styles.addIconContainer} onPress={handleAddProduct}>
                <FontAwesomeIcon icon={['fas', 'plus']} color='white' /> 
              </TouchableOpacity>
              
            </View>
            {renderHeader()}
          {loading?(<Spinner/>):( 
            <View>
      
      <FlatList
        data={products}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
            </View>

            )}
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor:'#1F1D2F'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      backgroundColor: '#f1f8ff',
    },
    headerText: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    rowText: {
      flex: 1,
      textAlign: 'center',
      color:'white'
    },
    heading:{
        fontSize:28,
        fontWeight:'bold',
        color:'white'
    },
    filterContainer:{
      height:'auto',
      borderWidth:1,
      borderColor:'red',
      height:80,
      borderRadius:10
    },
    headerContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:10,
      paddingBottom:10
    },
    addIconContainer:{
      padding:10
    }
})