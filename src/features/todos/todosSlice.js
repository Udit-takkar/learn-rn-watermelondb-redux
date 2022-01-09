import {createSlice} from '@reduxjs/toolkit';

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    pushTodo(state, action) {
      console.log('action', action);
      state.push({
        id: nextTodoId++,
        text: action.payload.text,
        completed: false,
      });
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {pushTodo, toggleTodo} = todosSlice.actions;

export default todosSlice.reducer;
