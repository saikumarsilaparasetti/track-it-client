import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import ProductsListing from './src/screens/ProductsListing';
import ProductDetails from './src/screens/ProductDetails';
import ProductForm from './src/screens/ProductForm';


const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='productsListing'
        screenOptions={{
          headerShown:false
        }}
        >
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="home" component={Home}/>
          <Stack.Screen name="productsListing" component={ProductsListing}/>
          <Stack.Screen name="Product" component={ProductDetails}/>
          <Stack.Screen name="ProductForm" component={ProductForm}/>
          
        </Stack.Navigator>
      </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
