function listReducer(state, { type, payload }){
    switch(type){
        case ACTIONS.add:
            return [payload, ...state];
        case ACTIONS.delete:
            return state.filter((item) => item.id !== payload);
        case ACTIONS.edit:
            return state.map((item) =>
                item.id === payload.id ? { ...item, text: payload.newText } : item
            );
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
    toggle: 'toggle'
}

export{listReducer, ACTIONS};