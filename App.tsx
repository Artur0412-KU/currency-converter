import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFont } from './src/hooks/useFont';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/SignUp/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useFont();

  if (!fontsLoaded) {
    return <ActivityIndicator size='large'/>
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

