import React from 'react'
import { SafeAreaView, Text, View, Button, TouchableOpacity, Alert } from 'react-native'
import { firebaseAuth } from '../../../config/config'
import { Ionicons } from '@expo/vector-icons'
import { useFont } from '../../hooks/useFont';
import { homeStyles } from '../../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const fontsLoaded = useFont();

  if (!fontsLoaded) {
    return null; // Don't render anything until fonts are loaded
  }


  return (
    <LinearGradient colors={['#D2D2DB', '#F6F6F6']} style = {{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
     <SafeAreaView style = {{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <View style = {homeStyles.logoutButton}>
          <TouchableOpacity onPress={() => firebaseAuth.signOut()} style = {homeStyles.logoutButtonContainer}>
           <Ionicons name="exit-outline" size={32} color="#1F2261" />
           <Text style = {homeStyles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
       
    </SafeAreaView> 
    </LinearGradient>
    
  )
}
