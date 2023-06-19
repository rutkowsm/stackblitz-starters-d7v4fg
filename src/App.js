import React from 'react';
import TextInput from './components/TextInput';
import NumberList from './components/NumberList';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <h2>TextInput</h2>
      <TextInput />

      <h2>NumberList</h2>
      <NumberList />

      <h2>TodoList</h2>
      <TodoList />
    </div>
  );
};

export default App;
