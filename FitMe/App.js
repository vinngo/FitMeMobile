import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatBox from './components/chatbox';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ChatBox/>
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
