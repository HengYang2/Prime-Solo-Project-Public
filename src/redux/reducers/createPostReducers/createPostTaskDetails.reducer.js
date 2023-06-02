const createPostTaskDetailsReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_POST_INITIALS':
            return action.payload;
        default:
            return state;
    }
};

export default createPostTaskDetailsReducer;