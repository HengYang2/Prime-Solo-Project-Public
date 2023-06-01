const editClientInitialsReducer = (state = 'A', action) => {
    switch (action.type) {
        case 'SET_CLIENTINITIALS':
            return action.payload;
        default:
            return state;
    }
};

export default editClientInitialsReducer;