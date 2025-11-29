let initialState = {};

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fff': {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export default BasketReducer;
