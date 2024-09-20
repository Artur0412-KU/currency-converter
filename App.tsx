import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { styles } from './src/styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useFont } from './src/hooks/useFont';

export default function App() {
  const fontsLoaded = useFont();


  if (!fontsLoaded) {
    return <ActivityIndicator size='large'/>
  }
  
  return (
    <LinearGradient 
    colors={['#E7E7EE', '#F6F6F6']} style={styles.linearGradient}>
      <Text style = {{fontFamily: 'Roboto_700Bold'}}>Inter Black.</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

