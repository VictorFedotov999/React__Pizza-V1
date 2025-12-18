import { ProductType, CartItemType } from '../../Type/productsType';

export const SET_PRODUCTS = 'SET_PRODUCTS' as const;
export const ACTIVE_PAGINATION = 'ACTIVE_PAGINATION' as const;
export const UPDATE_PRODUCT_INFO = 'UPDATE_PRODUCT_INFO' as const;
export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART' as const;
export const SET_PRODUCTS_CART = 'SET_PRODUCTS_CART' as const;
export const ACTIVE_SORT__POPUP = 'ACTIVE_SORT__POPUP' as const;
export const CLEAR_CART = 'CLEAR_CART' as const;
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT' as const;

type SetProductsType = {
    type: typeof SET_PRODUCTS;
    products: ProductType[];
};
export const SetProducts = (products: ProductType[]): SetProductsType => {
    return {
        type: SET_PRODUCTS,
        products,
    };
};

type ActivePaginationType = {
    type: typeof ACTIVE_PAGINATION;
    index: number;
};
export const ActivePagination = (index: number): ActivePaginationType => {
    return {
        type: ACTIVE_PAGINATION,
        index,
    };
};

type UpdateProductInfoType = {
    type: typeof UPDATE_PRODUCT_INFO;
    productId: string;
    selectedType: number;
    selectedSize: number;
};
export const UpdateProductInfo = (
    productId: string,
    selectedType: number,
    selectedSize: number,
): UpdateProductInfoType => {
    return {
        type: UPDATE_PRODUCT_INFO,
        productId,
        selectedType,
        selectedSize,
    };
};

type AddProductCartType = {
    type: typeof ADD_PRODUCT_CART;
    productDate: CartItemType;
};
export const AddProductCart = (productDate: CartItemType): AddProductCartType => {
    return {
        type: ADD_PRODUCT_CART,
        productDate,
    };
};

type SetProductsCartType = {
    type: typeof SET_PRODUCTS_CART;
    productsCart: CartItemType[];
};

export const SetProductsCart = (productsCart: CartItemType[]): SetProductsCartType => {
    return {
        type: SET_PRODUCTS_CART,
        productsCart,
    };
};

type activeSortPopupType = {
    type: typeof ACTIVE_SORT__POPUP;
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;
};
export const activeSortPopup = (
    ActiveSortPopupIndex: number,
    OpenSortPopup: boolean,
): activeSortPopupType => {
    return {
        type: ACTIVE_SORT__POPUP,
        ActiveSortPopupIndex,
        OpenSortPopup,
    };
};

type clearCartType = {
    type: typeof CLEAR_CART;
};

export const clearCart = (): clearCartType => ({
    type: CLEAR_CART,
});

type removeCartProductType = {
    type: typeof REMOVE_CART_PRODUCT;
    productId: string;
};

export const removeCartProduct = (productId: string): removeCartProductType => ({
    type: REMOVE_CART_PRODUCT,
    productId,
});

export type ProductsActionType =
    | SetProductsType
    | ActivePaginationType
    | UpdateProductInfoType
    | AddProductCartType
    | SetProductsCartType
    | activeSortPopupType
    | clearCartType
    | removeCartProductType;
