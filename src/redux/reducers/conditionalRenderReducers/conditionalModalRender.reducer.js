const conditionalModalRenderReducer = (state = 'MainRender', action) => {
    switch (action.type) {
        case 'SET_CONDITIONALMODALRENDER':
            return action.payload;
        default:
            return state;
    }
};

export default conditionalModalRenderReducer;