import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { ScreenWrapper } from 'react-native-screen-wrapper'

const App = () => {
  const arr = new Array(100).fill(0)
  return (
    <ScreenWrapper
      statusBarColor='#2ECC71'
      bottomSafeAreaColor='#2ECC71'
      scrollType='keyboard'
    >
      <View style={{ flex: 1 }}>
        {arr.map((item, i) => (
          <TextInput
            key={i + ''}
            style={styles.input}
            placeholder={`This is input No: ${i + 1}`}
            placeholderTextColor='#ccc'
          />
        ))}
      </View>
    </ScreenWrapper>
  )
}

export default App

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#3498DB',
    marginTop: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
  },
})
