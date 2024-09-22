import React, { useState } from 'react'
import { ActivityIndicator, KeyboardAvoidingView, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFont } from '../../hooks/useFont';
import { firebaseAuth } from '../../../config/config';
import { LinearGradient } from 'expo-linear-gradient';
import {signInWithEmailAndPassword } from '@firebase/auth';
import { styles } from '../../styles/styles';

export default function Login({navigation}) {
   const fontsLoaded = useFont();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const auth = firebaseAuth

  if (!fontsLoaded) {
    return <ActivityIndicator size='large'/>
  }

  const signIn = async () => {
    setLoading(true);
    try {
       const response = await signInWithEmailAndPassword(auth, email, password);
       console.log(response);
    } catch (error) {
       console.error(error);
       alert('Sign in failed: ' + error.message)
    } finally {
        setLoading(false);
    }
  }

  return (
    <LinearGradient colors={['#E7E7EE', '#F6F6F6']} style={styles.linearGradient}>
       
         <View style = {styles.inputContainer}>
          <Text style = {styles.title}>Log In</Text>  
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
              <Pressable  onPress={signIn} style = {styles.button}>
                <Text style = {styles.buttonText}>Log In</Text>
              </Pressable>
               <View style = {styles.buttonsFooter}>
                    <Text style = {styles.footerText}>Don’t have an account?</Text> 
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                      <Text style = {styles.footerButton}>Sign Up</Text>
                    </TouchableOpacity>
               </View>
              
            </View>
        } 
        
    </LinearGradient>
  )
}


