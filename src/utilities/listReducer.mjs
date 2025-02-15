/* listReducer.mjs */

function listReducer(state, action){
    switch(action.type){
        case ACTIONS.add:
            return [...state, action.payload];
        case ACTIONS.delete:
            //console.log(action.payload.index);
            console.log(action.payload)
            return state.filter((item) => item.text !== action.payload);
        case ACTIONS.edit:
            return state.map((item, index) =>
                index === action.payload.index ? { ...item, text: action.payload.newText} : item
            );
        case ACTIONS.save:
            console.log("SAVED")
            return state;
        case ACTIONS.toggle:
            return state.map((item, index) =>
                index === action.payload.index ? { ...item, checked: action.payload.checked } : item
            );
        default:
            return state;
    };
}

const ACTIONS = {
    add: 'add',
    delete: 'delete',
    edit: 'edit',
    save: 'save',
    toggle: 'toggle'
}

export{listReducer, ACTIONS};