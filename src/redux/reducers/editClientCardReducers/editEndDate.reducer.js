const editStartEndReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_ENDDATE':
            return action.payload;
        default:
            return state;
    }
};

export default editStartEndReducer;