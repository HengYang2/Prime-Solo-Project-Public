const editClientNoteReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_CLIENTNOTE':
            return action.payload;
        default:
            return state;
    }
};

export default editClientNoteReducer;