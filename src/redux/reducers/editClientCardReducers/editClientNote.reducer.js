const editClientNoteReducer = (state = 'mm/dd/yy', action) => {
    switch (action.type) {
        case 'SET_CLIENTNOTE':
            return action.payload;
        default:
            return state;
    }
};

export default editClientNoteReducer;