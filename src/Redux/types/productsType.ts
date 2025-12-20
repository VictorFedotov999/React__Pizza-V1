import {
    SET_PRODUCTS,
    ACTIVE_PAGINATION,
    UPDATE_PRODUCT_INFO,
    ADD_PRODUCT_CART,
    SET_PRODUCTS_CART,
    ACTIVE_SORT__POPUP,
    CLEAR_CART,
    REMOVE_CART_PRODUCT,
} from '../actions/productsActions';

export interface ProductType {
    id: string;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export interface CartItemType {
    id: string;
    productTitle: string;
    imageUrl: string;
    price: number;
    selectedType: number;
    selectedSize: number;
    typeName: string;
    productCount: number;
}

export type SetProductsType = {
    type: typeof SET_PRODUCTS;
    products: ProductType[];
};

export type ActivePaginationType = {
    type: typeof ACTIVE_PAGINATION;
    index: number;
};

export type UpdateProductInfoType = {
    type: typeof UPDATE_PRODUCT_INFO;
    productId: string;
    selectedType: number;
    selectedSize: number;
};

export type AddProductCartType = {
    type: typeof ADD_PRODUCT_CART;
    productDate: CartItemType;
};

export type SetProductsCartType = {
    type: typeof SET_PRODUCTS_CART;
    productsCart: CartItemType[];
};

export type activeSortPopupType = {
    type: typeof ACTIVE_SORT__POPUP;
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;
};

export type clearCartType = {
    type: typeof CLEAR_CART;
};

export type removeCartProductType = {
    type: typeof REMOVE_CART_PRODUCT;
    productId: string;
};

export type ProductsActionType =
    | SetProductsType
    | ActivePaginationType
    | UpdateProductInfoType
    | AddProductCartType
    | SetProductsCartType
    | activeSortPopupType
    | clearCartType
    | removeCartProductType;
