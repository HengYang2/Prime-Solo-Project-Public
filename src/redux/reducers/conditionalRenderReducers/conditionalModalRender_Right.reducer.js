const conditionalModalRenderReducer_Right = (state = 'MainRender', action) => {
    switch (action.type) {
        case 'SET_CONDITIONALMODALRENDER_RIGHT':
            return action.payload;
        default:
            return state;
    }
};

export default conditionalModalRenderReducer_Right;