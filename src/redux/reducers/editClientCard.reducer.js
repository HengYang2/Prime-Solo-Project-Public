

const startDateReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_STARTDATE':
            return action.payload;
        default:
            return state;
    }
};

const endDateReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_ENDDATE':
            return action.payload;
        default:
            return state;
    }
};

const isStillSubscribedReducer = (state = true, action) => {
    switch (action.type) {
        case 'SET_ISSTILLSUBSCRIBED':
            return action.payload;
        default:
            return state;
    }
};

const clientNoteReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_CLIENTNOTE':
            return action.payload;
        default:
            return state;
    }
};

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


