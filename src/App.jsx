import React from 'react';
import { useState } from 'react';
import { Usetodo } from './components/Hook/Usetodo';
import List from './components/List/List';
import Search from './components/Search/Search';

const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const {createToDo, changeFinish, removeToDo} = Usetodo(value, list, setList, setValue);
  return (
    <div className='wrapper'>
      <Search value={value} setValue={setValue} setList={createToDo}/>
      <List list={list} setFinish={changeFinish} removeToDo={removeToDo}/>
    </div>
  );
}
export default App;
