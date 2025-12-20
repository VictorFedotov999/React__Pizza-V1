import {
    ProductType,
    CartItemType,
    SetProductsType,
    ActivePaginationType,
    UpdateProductInfoType,
    AddProductCartType,
    SetProductsCartType,
    activeSortPopupType,
    clearCartType,
    removeCartProductType,
} from '../types/productsType';

export const SET_PRODUCTS = 'SET_PRODUCTS' as const;
export const ACTIVE_PAGINATION = 'ACTIVE_PAGINATION' as const;
export const UPDATE_PRODUCT_INFO = 'UPDATE_PRODUCT_INFO' as const;
export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART' as const;
export const SET_PRODUCTS_CART = 'SET_PRODUCTS_CART' as const;
export const ACTIVE_SORT__POPUP = 'ACTIVE_SORT__POPUP' as const;
export const CLEAR_CART = 'CLEAR_CART' as const;
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT' as const;

export const SetProducts = (products: ProductType[]): SetProductsType => {
    return {
        type: SET_PRODUCTS,
        products,
    };
};

export const ActivePagination = (index: number): ActivePaginationType => {
    return {
        type: ACTIVE_PAGINATION,
        index,
    };
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

export const clearCart = (): clearCartType => ({
    type: CLEAR_CART,
});

export const removeCartProduct = (productId: string): removeCartProductType => ({
    type: REMOVE_CART_PRODUCT,
    productId,
});

export const getFilteredProducts = (products: ProductType[], ActiveCategoryIndex: number) => {
    if (ActiveCategoryIndex === 0) {
        return products;
    }
    return products.filter((product) => product.category === ActiveCategoryIndex - 1);
};
