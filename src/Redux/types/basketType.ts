import {
    ADD_PRODUCT_CART,
    SET_PRODUCTS_CART,
    CLEAR_CART,
    REMOVE_CART_PRODUCT,
    PLUS_COUNT_PRODUCT,
    MINUS_COUNT_PRODUCT,
} from '../actions/basketActions';

export interface CartItemType {
    id: number;
    productTitle: string;
    imageUrl: string;
    price: number;
    selectedType: number;
    selectedSize: number;
    typeName: string;
    productCount: number;
}

export type AddProductCartType = {
    type: typeof ADD_PRODUCT_CART;
    productDate: CartItemType;
};

export type SetProductsCartType = {
    type: typeof SET_PRODUCTS_CART;
    productsCart: CartItemType[];
};

export type clearCartType = {
    type: typeof CLEAR_CART;
};

export type removeCartProductType = {
    type: typeof REMOVE_CART_PRODUCT;
    productId: number;
};

export type plusCountProductType = {
    type: typeof PLUS_COUNT_PRODUCT;
    payload: { id: number; selectedType: number; selectedSize: number };
};

export type minusCountProductType = {
    type: typeof MINUS_COUNT_PRODUCT;
    payload: { id: number; selectedType: number; selectedSize: number };
};

export type BasketActionType =
    | AddProductCartType
    | SetProductsCartType
    | clearCartType
    | removeCartProductType
    | plusCountProductType
    | minusCountProductType;
