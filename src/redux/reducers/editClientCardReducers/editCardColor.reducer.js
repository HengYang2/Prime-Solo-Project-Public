const editCardColorReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_CARDCOLOR':
            return action.payload;
        default:
            return state;
    }
};

export default editCardColorReducer;