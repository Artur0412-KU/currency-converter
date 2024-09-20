import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './src/styles/styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  return (
    <LinearGradient 
    colors={['#E7E7EE', '#F6F6F6']} style={styles.linearGradient}>
      <Text>Inter Black.</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

