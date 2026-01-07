export const SET_PRODUCTS = 'SET_PRODUCTS' as const;
export const ACTIVE_PAGINATION = 'ACTIVE_PAGINATION' as const;
export const UPDATE_PRODUCT_INFO = 'UPDATE_PRODUCT_INFO' as const;
export const ACTIVE_SORT__POPUP = 'ACTIVE_SORT__POPUP' as const;

import {
    ProductType,
    SetProductsType,
    ActivePaginationType,
    UpdateProductInfoType,
    ActiveSortPopupType,
} from '../../ts/types/productsType';

export const SetProducts = (products: ProductType[]): SetProductsType => {
    return {
        type: SET_PRODUCTS,
        payload: {
            products,
        },
    };
};

export const ActivePagination = (index: number): ActivePaginationType => {
    return {
        type: ACTIVE_PAGINATION,
        payload: {
            index,
        },
    };
};

export const UpdateProductInfo = (
    id: string,
    selectedType: number,
    selectedSize: number,
): UpdateProductInfoType => {
    return {
        type: UPDATE_PRODUCT_INFO,
        payload: {
            id,
            selectedType,
            selectedSize,
        },
    };
};

export const activeSortPopup = (
    ActiveSortPopupIndex: number,
    OpenSortPopup: boolean,
): ActiveSortPopupType => {
    return {
        type: ACTIVE_SORT__POPUP,
        payload: { ActiveSortPopupIndex, OpenSortPopup },
    };
};
