const selectedPostReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_POST':
            return action.payload;
        default:
            return state;
    }
};

export default selectedPostReducer;