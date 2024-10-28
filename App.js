import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';


const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{
          headerShown:false
        }}
        >
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="home" component={Home}/>
          
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
