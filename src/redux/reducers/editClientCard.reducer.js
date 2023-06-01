






const cardColorReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_CARDCOLOR':
            return action.payload;
        default:
            return state;
    }
};


const defaultState = {
    clientInitialsReducer: clientInitialsReducer,
    startDateReducer: startDateReducer,
    endDateReducer: endDateReducer,
    isStillSubscribedReducer: isStillSubscribedReducer,
    clientNoteReducer: clientNoteReducer,
    cardColorReducer: cardColorReducer    
}


const editClientCardReducer = (state = defaultState, action) => {
    return state;
};


