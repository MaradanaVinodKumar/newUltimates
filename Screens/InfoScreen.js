import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function InfoScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text>InfoScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
})