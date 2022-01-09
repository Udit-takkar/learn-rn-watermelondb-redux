import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import MyTabs from './src/MyTabs';

const App = () => {
  return (
    <Provider store={store}>
      <MyTabs />
    </Provider>
  );
};

export default App;
