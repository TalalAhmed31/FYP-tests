import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@/src/screen/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default App