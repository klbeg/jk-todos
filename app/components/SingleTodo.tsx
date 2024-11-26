import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'
import { SingleTodoType } from './SingleDateTodos'

type Props = { todo: SingleTodoType }

export default function SingleTodo({ todo }: Props) {
  console.log('todo prop', todo.body)
  return (
    <View style={styles.singleTodoContainer}>
      <Checkbox
        value={todo.completed_at ? true : false}
        style={styles.checkbox}
      />
      <Text>{todo.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  singleTodoContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    marginRight: 4,
  },
})
