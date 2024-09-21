import React, { useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useFont } from '../../hooks/useFont';
import { firebaseAuth } from '../../../config/config';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { A } from '@expo/html-elements';
import SignUp from '../SignUp/SignUp';
import { Link } from 'expo-router';

export default function Login() {
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
       alert('Sorry, check your email or password :)')
    } catch (error) {
       console.error(error);
       alert('Sign in failed: ' + error.message)
    } finally {
        setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
       const response = await createUserWithEmailAndPassword(auth, email, password);
       console.log(response);
       alert('Sorry, check your email :)')
    } catch (error) {
       console.error(error);
       alert('Registration failed: ' + error.message)
    } finally {
        setLoading(false);
    }
  }
  
  return (
    <LinearGradient colors={['#E7E7EE', '#F6F6F6']} style={styles.linearGradient}>
        <View style = {styles.inputContainer}>
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
            <View>
              <Button title='Sign In' onPress={() => signIn()}/>
                <View>
                   <Text>Don’t have an account?</Text> 
                   <Link href='/SignUp' >Sign Up</Link>
                </View>
              
            </View>
        }
    </LinearGradient>
  )
}

export const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto_400Regular',
    },
    inputContainer: {
        flexDirection: 'column',
        gap: 30,
        width: '60%'
    },
    input: {
       backgroundColor: 'white',
       padding: 13,
       paddingLeft: 24,
       borderColor: '#E7E7EE',
       borderWidth: 1,
       borderRadius: 15,
       color: '#A1A1A1',
       fontFamily: 'Roboto_400Regular'
    }
  });
