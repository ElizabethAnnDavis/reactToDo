/* ListItem */

import './ListItem.css';
import { listReducer, ACTIONS } from '../utilities/listReducer.mjs';

export default function ListItem({value, dispatch}){
    console.log(`IN ListItem.jsx`);
    
    function handleEdit() {
        const newText = prompt("Edit task:", value.text);
        if (newText !== null && newText.trim() && newText !== value.text) {
            dispatch({ type: ACTIONS.edit, payload: { index: value.index, newText } });
        };
    }

    return(
        <li>
            <input 
                type='checkbox' 
                checked={value.checked} 
                onChange={() => dispatch({type: ACTIONS.toggle, payload: { index: value.index, checked: !value.checked }})}
            />
            <span style={{ textDecoration: value.checked ? 'line-through' : 'none' }}>{value.text}</span>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => dispatch({ type: ACTIONS.delete, payload: value.text })}>Delete</button>
        </li>
    );
}