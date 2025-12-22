import {
    SET_PRODUCTS,
    ACTIVE_PAGINATION,
    UPDATE_PRODUCT_INFO,
    ACTIVE_SORT__POPUP,
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

export type activeSortPopupType = {
    type: typeof ACTIVE_SORT__POPUP;
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;
};

export type ProductsActionType =
    | SetProductsType
    | ActivePaginationType
    | UpdateProductInfoType
    | activeSortPopupType;
