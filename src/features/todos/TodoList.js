import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import {useSelector} from 'react-redux';
import withObservables from '@nozbe/with-observables';
import {observeTodos} from '../../data/helpers';

function TodoList({todos}) {
  // const todos = useSelector(state => state.todos);
  todos.map(todo => console.log(todo));
  if (!todos || !todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Start creating a new todo</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      {todos.map((todo, index) => (
        <Text style={styles.todoText} key={todo.id}>
          {index + 1} {todo.todo}
        </Text>
      ))}
    </View>
  );
}
const enhanceWithWeights = withObservables([], () => ({
  todos: observeTodos(),
}));
export default enhanceWithWeights(TodoList);

const styles = StyleSheet.create({});
