import './ListItem.css';

export default function ListItem({value, dispatch, onCheck}){
    return(
        <li>
            <input type='checkbox' checked={value.checked} />
            <span>{value}</span>
            <button>Edit</button>
            <button onClick={() => dispatch({ type: 'delete', payload: value.index })}>Delete</button>
        </li>
    );
}

//<input type='checkbox' onChange={(e) => onCheck(e.target.checked)}/>
//<span style={{textDecoration: value.checked ? 'line-through' : 'none'}}>{value}</span>