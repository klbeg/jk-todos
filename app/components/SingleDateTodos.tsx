import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'
import SingleTodo from './SingleTodo'

export type SingleTodoType = {
  task_uuid: string
  body: string
  due_date: string
  completed_at: string | null
  created_at: string
  updated_at: string
}

type Props = {
  date: string
  todos: SingleTodoType[]
}

export default function SingleDateTodos({ date, todos }: Props) {
  console.log('date', date)
  console.log('todos', todos)
  return (
    //  Single Date Todo Wrapper
    <View style={styles.singleDateTodoContainer}>
      <Text style={styles.header}>{date}</Text>
      {/* Task Wrapper */}
      <View>
        {/* Single Todo */}
        {todos.map((todo: SingleTodoType) => (
          <SingleTodo todo={todo} />
        ))}
        {/* <View style={styles.singleTodoContainer}>
          <Checkbox value={true} style={styles.checkbox} />
          <Text>This is my second to do</Text>
        </View>
        <View style={styles.singleTodoContainer}>
          <Checkbox value={true} style={styles.checkbox} />
          <Text>This is my third to do</Text>
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 6,
  },
  singleDateTodoContainer: {
    marginLeft: 6,
  },
  singleTodoContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    marginRight: 4,
  },
})
