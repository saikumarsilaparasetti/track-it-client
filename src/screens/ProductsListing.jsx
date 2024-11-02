import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';

import apiCaller from '../services/apiCaller'
import { Table } from 'react-native-table-component'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import Filter from '../components/Filter';

export default function ProductsListing({navigation}) {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{

    const fetchData = async()=>{
        try {
          const data ={}
            const products  =  await apiCaller(`product/getall?query=${search}`, 'POST', data)
            setProducts(products)
        } catch (error) {
            Alert.alert("Error in fetching data", error)
        }
    }
    fetchData();
  }, [search])

  
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
            <View style={styles.filterContainer}>
              <Filter pushInput={searchValue}/>
            </View>
            <Text style={styles.heading}>Products</Text>
      {renderHeader()}
      <FlatList
        data={products}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
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
    }
})