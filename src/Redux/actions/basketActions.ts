export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART' as const;
export const SET_PRODUCTS_CART = 'SET_PRODUCTS_CART' as const;
export const CLEAR_CART = 'CLEAR_CART' as const;
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT' as const;
export const PLUS_COUNT_PRODUCT = 'PLUS_COUNT_PRODUCT' as const;
export const MINUS_COUNT_PRODUCT = 'MINUS_COUNT_PRODUCT' as const;

import {
    CartItemType,
    minusCountProductType,
    plusCountProductType,
    AddProductCartType,
    SetProductsCartType,
    clearCartType,
    removeCartProductType,
} from '../types/basketType';

export const AddProductCart = (product: CartItemType): AddProductCartType => {
    return {
        type: ADD_PRODUCT_CART,
        payload: product,
    };
};

export const SetProductsCart = (products: CartItemType[]): SetProductsCartType => {
    return {
        type: SET_PRODUCTS_CART,
        payload: products,
    };
};

export const clearCart = (): clearCartType => ({
    type: CLEAR_CART,
});

export const removeCartProduct = (key: string): removeCartProductType => ({
    type: REMOVE_CART_PRODUCT,
    payload: {
        key,
    },
});

export const plusCountProduct = (key: string) => ({
    type: PLUS_COUNT_PRODUCT,
    payload: {
        key,
    },
});

export const minusCountProduct = (key: string) => ({
    type: MINUS_COUNT_PRODUCT,
    payload: {
        key,
    },
});
