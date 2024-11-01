
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native'

export default function Spinner() {    
  return (
    <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="white" /> 
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  