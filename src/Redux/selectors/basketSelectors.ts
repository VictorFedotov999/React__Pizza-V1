import { AppStateType } from '../reduxStore';
import { CartItemType } from '../../ts/types/basketType';

export const getProductsCart = (state: AppStateType) => {
    return state.CartReducer.productsCart;
};

export const getTotalPizzasCount = (state: AppStateType): number => {
    return state.CartReducer.productsCart.reduce(
        (total: number, item: CartItemType) => total + item.productCount,
        0,
    );
};

export const getTotalPrice = (state: AppStateType): number => {
    return state.CartReducer.productsCart.reduce(
        (total: number, item: CartItemType) => total + item.price * item.productCount,
        0,
    );
};
