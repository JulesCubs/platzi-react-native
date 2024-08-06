import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nueva aplicación en React Native</Text>
      <LoginForm/>
      <Saludar/>
      <Saludar name={"Pedro Perez"}/>
      <Saludar name={"Mateo Marquez"}/>
      <Saludar name={"Juan Jimenez"}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
