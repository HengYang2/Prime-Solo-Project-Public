const editIsStillSubscribedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_ISSTILLSUBSCRIBED':
            return action.payload;
        default:
            return state;
    }
};

export default editIsStillSubscribedReducer;