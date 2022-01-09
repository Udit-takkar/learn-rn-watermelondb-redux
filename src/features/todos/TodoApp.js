import React, {useEffect, useState} from 'react';
import AddToDo from './AddTodo';
import TodoList from './TodoList';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {database} from '../../data/database';
const TodoApp = () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    const getTodos = async () => {
      const todos = await database.collections.get('todos').query().observe();
      setTodos(todos);
    };
    getTodos();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <AddToDo />
        {todos && <TodoList todos={todos} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default TodoApp;
