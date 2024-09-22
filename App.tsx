import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFont } from './src/hooks/useFont';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/SignUp/SignUp';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from '@firebase/auth';
import { firebaseAuth } from './config/config';
import Home from './src/screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] =  useState<User | null>(null)
  const fontsLoaded = useFont();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log('user', user)
      setUser(user);
    })
  }, [])

  if (!fontsLoaded) {
    return <ActivityIndicator size='large'/>
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (<Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>)
        :  
       (<>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </>)
        
        }  
          
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

