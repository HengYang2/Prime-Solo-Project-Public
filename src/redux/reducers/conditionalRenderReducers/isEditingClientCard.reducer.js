const isEditingClientCardReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_ISEDITINGCLIENTCARD':
            return action.payload;
        default:
            return state;
    }
};

export default isEditingClientCardReducer;
