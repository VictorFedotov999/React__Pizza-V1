import { AppStateType } from '../reduxStore';

export const getProductsCart = (state: AppStateType) => {
    return state.CartReducer.productsCart;
};
