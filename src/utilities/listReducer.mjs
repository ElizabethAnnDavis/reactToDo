function listReducer(state, action){
    switch(action.type){
        case ACTIONS.add:
            console.log(`ADDED ${action.payload}`);
            return [...state, action.payload];
        case ACTIONS.save:
            console.log("SAVED")
        case ACTIONS.delete:
            console.log("DELETED");
        case ACTIONS.edit:
            console.log("EDITED");
        default:
            console.log("Something went wrong");
    };
}

const ACTIONS = {
    save: 'save',
    delete: 'delete',
    edit: 'edit',
    toggle: 'toggle'
}

export{listReducer, ACTIONS};