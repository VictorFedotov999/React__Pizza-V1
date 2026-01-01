import {
    SET_PRODUCTS,
    ACTIVE_PAGINATION,
    UPDATE_PRODUCT_INFO,
    ACTIVE_SORT__POPUP,
} from '../actions/productsActions';

export type ProductType = {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};

export type ProductInfoType = {
    selectedType: number;
    selectedSize: number;
};

export type ProductInfoStateType = {
    [productId: number]: ProductInfoType;
};

export type CategoriesType = {
    categoriesPagination: string[];
    ActiveCategoryIndex: number;
};

export type SortPopupType = {
    sortPopupType: string[];
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;
};

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
    productId: number;
    selectedType: number;
    selectedSize: number;
};

export type ActiveSortPopupType = {
    type: typeof ACTIVE_SORT__POPUP;
    ActiveSortPopupIndex: number;
    OpenSortPopup: boolean;
};

export type ProductsActionType =
    | SetProductsType
    | ActivePaginationType
    | UpdateProductInfoType
    | ActiveSortPopupType;
