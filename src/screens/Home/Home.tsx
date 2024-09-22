import React from 'react'
import { SafeAreaView, Text, View, Button } from 'react-native'
import { firebaseAuth } from '../../../config/config'

export default function Home() {
  return (
    <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Button title='Logout' onPress={() => firebaseAuth.signOut()}/>
    </SafeAreaView>
  )
}
