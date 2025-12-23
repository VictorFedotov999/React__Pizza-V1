export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART' as const;
export const SET_PRODUCTS_CART = 'SET_PRODUCTS_CART' as const;
export const CLEAR_CART = 'CLEAR_CART' as const;
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT' as const;
export const PLUS_COUNT_PRODUCT = 'PLUS_COUNT_PRODUCT' as const;
export const MINUS_COUNT_PRODUCT = 'MINUS_COUNT_PRODUCT' as const;

// Экспортируем типы напрямую (убираем дублирование)
import {
    CartItemType,
    minusCountProductType,
    plusCountProductType,
    AddProductCartType,
    SetProductsCartType,
    clearCartType,
    removeCartProductType,
} from '../types/basketType';

// Action creators
export const AddProductCart = (productDate: CartItemType): AddProductCartType => {
    return {
        type: ADD_PRODUCT_CART,
        productDate,
    };
};

export const SetProductsCart = (productsCart: CartItemType[]): SetProductsCartType => {
    return {
        type: SET_PRODUCTS_CART,
        productsCart,
    };
};

export const clearCart = (): clearCartType => ({
    type: CLEAR_CART,
});

export const removeCartProduct = (productId: string): removeCartProductType => ({
    type: REMOVE_CART_PRODUCT,
    productId,
});

export const plusCountProduct = (id: string, selectedType: number, selectedSize: number) => ({
    type: PLUS_COUNT_PRODUCT,
    payload: { id, selectedType, selectedSize },
});

export const minusCountProduct = (id: string, selectedType: number, selectedSize: number) => ({
    type: MINUS_COUNT_PRODUCT,
    payload: { id, selectedType, selectedSize },
});
