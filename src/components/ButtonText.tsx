import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './button'

interface ButtonTextProps {
  name: string; 
  onPress: () => void;
}

export function ButtonText({ name, onPress }: ButtonTextProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
    </View>
  )
}
