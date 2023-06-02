const createPostTaskDetailsReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_POST_TASK_DETAILS':
            return action.payload;
        default:
            return state;
    }
};

export default createPostTaskDetailsReducer;