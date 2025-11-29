export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ACTIVE_PAGINATION = 'ACTIVE_PAGINATION';
export const UPDATE_PRODUCT_INFO = 'UPDATE_PRODUCT_INFO';
export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART';

export const SetProductsAC = (products) => {
    return {
        type: SET_PRODUCTS,
        products,
    };
};

export const ActivePaginationAC = (index) => {
    return {
        type: ACTIVE_PAGINATION,
        index,
    };
};

export const UpdateProductInfoAC = (productId, selectedType, selectedSize) => {
    return {
        type: UPDATE_PRODUCT_INFO,
        productId,
        selectedType,
        selectedSize,
    };
};

export const AddProductCartAC = (productDate) => {
    return {
        type: ADD_PRODUCT_CART,
        productDate,
    };
};
