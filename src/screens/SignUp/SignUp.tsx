import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { ActivityIndicator, Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles/styles'
import { useFont } from '../../hooks/useFont';
import { firebaseAuth } from '../../../config/config';
import { createUserWithEmailAndPassword } from '@firebase/auth';

export default function SignUp() {
  const fontsLoaded = useFont();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = firebaseAuth

  const signUp = async () => {
    setLoading(true);
    try {
       const response = await createUserWithEmailAndPassword(auth, email, password);
       console.log(response);
       alert('You`re registered :)')
    } catch (error) {
       console.error(error);
       alert('Registration failed: ' + error.message)
    } finally {
        setLoading(false);
    }
  }

 if (!fontsLoaded) {
   return <ActivityIndicator size='large'/>
 }

  return (
    <LinearGradient colors={['#E7E7EE', '#F6F6F6']} style={styles.linearGradient}>
        
        <View style = {styles.inputContainer}>
          <Text style = {styles.title}>Sign Up</Text>  
          <TextInput value = {email} style = {styles.input} 
           placeholder='Email' 
           autoCapitalize='none' 
           onChangeText={(text) => setEmail(text)}></TextInput>
          <TextInput value = {password} style = {styles.input} 
           secureTextEntry={true}
           placeholder='Password' 
           autoCapitalize='none' 
           onChangeText={(text) => setPassword(text)}></TextInput>   
        </View>
        {loading ? <ActivityIndicator size='small' color = "#26278D"/> : 
            <View style = {styles.buttonsContainer}>
              <Pressable  onPress={signUp} style = {styles.button}>
                <Text style = {styles.buttonText}>Sign Up</Text>
              </Pressable>
            </View>
        }
    </LinearGradient>
  )
}


