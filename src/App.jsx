/* App */

import { useState, useReducer } from 'react';
import './App.css';
import { listReducer, ACTIONS } from './utilities/listReducer.mjs';
import ListItem from './components/ListItem';

export default function App() {
  const [value, setValue] = useState('');
  const [state, dispatch] = useReducer(listReducer, []);

  function handleSave(e) {
    e.preventDefault();
    if (value.trim()) {
      const newItem = {
        id: Date.now(),
        text: value,
        checked: false
      };
      dispatch({ type: ACTIONS.add, payload: newItem });
      setValue('');
    }
  }

  return (
    <div className='listCont'>
      <h1>ToDo List</h1>
      <form className='list' onSubmit={handleSave}>
        <div className='addNew'>
          <input type='text' value={value} onChange={(e) => setValue(e.target.value)} ></input>
          <button type='submit'>ADD</button>
        </div>
        <ul>
          {state.map((item) => (
            <ListItem key={item.id} value={item} dispatch={dispatch} />
          ))}
        </ul>
      </form>
    </div>
  );
}
