import { Button, Text, View } from "react-native";

// Home Screen Component
const Home = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
  </View>
);

export default Home;