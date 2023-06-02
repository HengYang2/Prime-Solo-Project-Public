const createPostHoursReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_POST_HOURS':
            return action.payload;
        default:
            return state;
    }
};

export default createPostHoursReducer;