import React from 'react'
import { Text, View } from 'react-native'
import { ScreenWrapper } from 'react-native-screen-wrapper'

const App = () => {
  const arr = new Array(100).fill(0)
  return <ScreenWrapper >
    <View style={{ flex: 1 }} >
       {/* Your Content here*/}
    </View>
  </ScreenWrapper>
}

export default App
