const selectedClientCardReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_CLIENTCARD':
            return action.payload;
        default:
            return state;
    }
};

export default selectedClientCardReducer;