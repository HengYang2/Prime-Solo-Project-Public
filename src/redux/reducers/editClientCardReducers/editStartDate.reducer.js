const editStartDateReducer = (state = 'mm/dd/yy', action) => {
    switch (action.type) {
        case 'SET_STARTDATE':
            return action.payload;
        default:
            return state;
    }
};

export default editStartDateReducer;