let initialState = {};

const BasketReducer = (state = initialState, action: any) => {
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
