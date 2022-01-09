import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import Todo from './todo';
import schema from './schema';

const adapter = new SQLiteAdapter({schema});

export const database = new Database({
  adapter,
  modelClasses: [Todo],
  actionsEnabled: true,
});
