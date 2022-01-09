import React from 'react';
import AddToDo from './AddTodo';
import TodoList from './TodoList';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const TodoApp = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <AddToDo />
        <TodoList />
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
