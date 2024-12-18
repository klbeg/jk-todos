import { Text, View, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'
import { SingleTodoType } from './SingleDateTodos'
import { useState } from 'react'

type Props = { todo: SingleTodoType }

export default function SingleTodo({ todo }: Props) {
  const initialIsCompleted = todo.completed_at ? true : false
  const [isCompleted, setIsCompleted] = useState<boolean>(initialIsCompleted)
  return (
    <View style={styles.singleTodoContainer}>
      <Checkbox
        value={isCompleted}
        style={styles.checkbox}
        onValueChange={setIsCompleted}
      />
      <Text style={styles.todoText}>{todo.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  singleTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 8,
  },
  todoText: {
    fontSize: 20,
    letterSpacing: 0.25,
    fontFamily: 'Nippo-Variable',
  },
  checkbox: {
    marginRight: 8,
  },
})
