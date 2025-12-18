import { AppStateType } from '../Redux/reduxStore';

export const getActiveCategoryIndex = (state: AppStateType) => {
    return state.PageProduct.categories.ActiveCategoryIndex;
};

export const getProducts = (state: AppStateType) => {
    return state.PageProduct.products;
};

export const getCategoriesPagination = (state: AppStateType) => {
    return state.PageProduct.categories.categoriesPagination;
};

export const getProductInfo = (state: AppStateType) => {
    return state.PageProduct.productInfo;
};

export const getSortPopupType = (state: AppStateType) => {
    return state.PageProduct.sortPopup.sortPopupType;
};

export const getActiveSortPopupIndex = (state: AppStateType) => {
    return state.PageProduct.sortPopup.ActiveSortPopupIndex;
};

export const getOpenSortPopup = (state: AppStateType) => {
    return state.PageProduct.sortPopup.OpenSortPopup;
};
