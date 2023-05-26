const clientCardModalReducer = (state = {}, action) => {
    return ({
        clientInitials: clientInitialsReducer,
        startDate: startDateReducer,
        endDate: endDateReducer,
        isStillSubscribed: isStillSubscribedReducer,
        clientNote: clientNoteReducer,
        cardColor: cardColorReducer    
    })
};

const clientInitialsReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_CLIENTINITIALS':
            return action.payload;
        default:
            return state;
    }
};

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



export default clientCardsReducer;
