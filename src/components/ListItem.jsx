import { useState } from 'react';
import './ListItem.css';
import { ACTIONS } from '../utilities/listReducer.mjs';

export default function ListItem({value, dispatch}){
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(value.text);
    
    function handleSave() {
        if (editText.trim() && editText !== value.text) {
            dispatch({ type: ACTIONS.edit, payload: { id: value.id, newText: editText } });
        }
        setIsEditing(false);
    }

    return(
        <li>
            <input 
                type='checkbox' 
                checked={value.checked} 
                onChange={() => dispatch({type: ACTIONS.toggle, payload: { id: value.id, checked: !value.checked }})}
            />
            {isEditing ? (
                <>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <span style={{ textDecoration: value.checked ? 'line-through' : 'none' }}>{value.text}</span>
            )}
            {!isEditing && (
                <>
                    <button onClick={() => setIsEditing(true)} disabled={value.checked}>Edit</button>
                    <button onClick={() => dispatch({ type: ACTIONS.delete, payload: value.id })}>Delete</button>
                </>
            )}
        </li>
    );
}