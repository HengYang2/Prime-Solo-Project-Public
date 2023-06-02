const createPostMileageReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_POST_MILEAGE':
            return action.payload;
        default:
            return state;
    }
};

export default createPostMileageReducer;