const conditionalModalRenderReducer_Left = (state = 'MainRender_Left', action) => {
    switch (action.type) {
        case 'SET_CONDITIONALMODALRENDER_LEFT':
            return action.payload;
        default:
            return state;
    }
};

export default conditionalModalRenderReducer_Left;