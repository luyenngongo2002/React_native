import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const Count = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You just {number}</Text>
      <Button
        onPress={() => setNumber(number + 1)}
        title="Click me"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
})
export default Count;