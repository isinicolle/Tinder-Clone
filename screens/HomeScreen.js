import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  //constante para la navigation
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to chat"
      onPress={() => { navigation.navigate('Chat') }} />
    </View>
  )
}

export default HomeScreen