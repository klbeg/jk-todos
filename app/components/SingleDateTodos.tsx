import { Text, View, StyleSheet } from 'react-native'
import SingleTodo from './SingleTodo'
import TodoCard from './TodoCard'

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
  return (
    //  Single Date Todo Wrapper
    <View style={styles.singleDateTodoContainer}>
      <Text style={styles.header}>{date}</Text>
      {/* Task Wrapper */}
      <View style={styles.singleTodoContainer}>
        {/* Single Todo */}
        {todos.map((todo: SingleTodoType) => (
          <TodoCard>
            <SingleTodo todo={todo} key={todo.task_uuid} />
          </TodoCard>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
  },
  singleDateTodoContainer: {
    marginTop: 6,
    marginBottom: 16,
    width: '100%',
  },
  singleTodoContainer: {
    // flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 6,
  },
  checkbox: {
    marginRight: 4,
  },
})
