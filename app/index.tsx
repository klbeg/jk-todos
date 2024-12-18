import { View, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import SingleDateTodos from './components/SingleDateTodos'
import colors from '@/assets/colors'
import { Constants } from 'expo-constants'

const mockTodoData = {
  '11-26-2024': [
    {
      task_uuid: '1',
      body: 'this is my first todo',
      due_date: '11-26-2024',
      completed_at: null,
      created_at: '11-26-2024',
      updated_at: '11-26-2024',
    },
    {
      task_uuid: '2',
      body: 'this is my second todo',
      due_date: '11-26-2024',
      completed_at: null,
      created_at: '11-26-2024',
      updated_at: '11-26-2024',
    },
    {
      task_uuid: '3',
      body: 'this is my third todo',
      due_date: '11-26-2024',
      completed_at: null,
      created_at: '11-26-2024',
      updated_at: '11-26-2024',
    },
  ],
  '11-27-2024': [
    {
      task_uuid: '1',
      body: 'this is my first todo',
      due_date: '11-27-2024',
      completed_at: null,
      created_at: '11-27-2024',
      updated_at: '11-27-2024',
    },
    {
      task_uuid: '2',
      body: 'this is my second todo',
      due_date: '11-27-2024',
      completed_at: null,
      created_at: '11-27-2024',
      updated_at: '11-27-2024',
    },
    {
      task_uuid: '3',
      body: 'this is my third todo',
      due_date: '11-27-2024',
      completed_at: null,
      created_at: '11-27-2024',
      updated_at: '11-27-2024',
    },
  ],
}

export default function Todos() {
  return (
    // this view represents the todo view wrapper
    // will eventually house the todos stack screen
    <View style={styles.viewContainer}>
      <Stack.Screen
        options={{
          title: 'Todos Home',
          headerTitleStyle: {
            fontFamily: 'Nippo-Variable',
            // fontWeight: 300,
            fontSize: 30,
          },
        }}
      />
      {Object.entries(mockTodoData).map((todosForDate) => (
        // fix above to grab key from entries, then use said
        // date to grab that date by it's key from todos object
        // this will make code more readable
        <SingleDateTodos
          date={todosForDate[0]}
          todos={todosForDate[1]}
          key={todosForDate[0]}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 8,
    backgroundColor: colors.tertiary,
  },
})
