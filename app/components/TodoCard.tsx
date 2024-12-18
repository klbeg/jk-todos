import { View, StyleSheet } from 'react-native'
import React from 'react'
import colors from '@/assets/colors'

interface Props {
  children: React.ReactNode
}

export default function TodoCard({ children }: Props) {
  return <View style={styles.todoCard}>{children}</View>
}

const styles = StyleSheet.create({
  todoCard: {
    // borderColor: colors.primary,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: colors.primary,
  },
})
