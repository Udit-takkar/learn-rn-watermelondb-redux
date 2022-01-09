import {database} from './database';

const todos = database.collections.get('todos');

export const observeTodos = () => todos.query().observe();

export const saveTodo = async ({text}) => {
  await database.action(async () => {
    await todos.create(entry => {
      entry.todo = text;
    });
  });
};
