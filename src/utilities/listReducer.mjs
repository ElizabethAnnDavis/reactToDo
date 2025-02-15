/* listReducer.mjs */

function listReducer(state, { type, payload }){
    switch(type){
        case ACTIONS.add:
            return [...state, payload];
        case ACTIONS.delete:
            return state.filter((item) => item.id !== payload);
        case ACTIONS.edit:
            return state.map((item) =>
                item.id === payload.id ? { ...item, text: payload.newText } : item
            );
        case ACTIONS.save:
            console.log("SAVED")
            return state;
        case ACTIONS.toggle:
            return state.map((item) =>
                item.id === payload.id ? { ...item, checked: payload.checked } : item
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