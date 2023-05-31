const isOpenMainReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_ISOPENMAIN':
            return action.payload;
        default:
            return state;
    }
};

export default isOpenMainReducer;

