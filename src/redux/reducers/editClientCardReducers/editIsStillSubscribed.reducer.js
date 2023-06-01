const editIsStillSubscribedReducer = (state = 'mm/dd/yy', action) => {
    switch (action.type) {
        case 'SET_ISSTILLSUBSCRIBED':
            return action.payload;
        default:
            return state;
    }
};

export default editIsStillSubscribedReducer;