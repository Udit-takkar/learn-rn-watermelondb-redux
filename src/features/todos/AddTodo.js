import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {pushTodo} from './todosSlice';
import {saveTodo} from '../../data/helpers';

const AddToDo = () => {
  const [text, setText] = useState();
  // const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      await saveTodo({text});
      setText('');
    } catch (e) {
      console.log(e);
    }

    // dispatch(pushTodo({text}));
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Todo"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
  },
  input: {
    backgroundColor: 'ghostwhite',
    marginBottom: 8,
    padding: 8,
    height: 40,
  },
});
export default AddToDo;
