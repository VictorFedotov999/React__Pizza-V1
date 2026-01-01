import {
    ProductType,
    CategoriesType,
    SortPopupType,
    ProductInfoType,
    ProductInfoStateType,
} from '../types/productsType';

import { AppStateType } from '../reduxStore';
import { createSelector } from 'reselect';

export const getCategories = (state: AppStateType): CategoriesType => {
    return state.PageProduct.categories;
};

export const getProducts = (state: AppStateType) => {
    return state.PageProduct.products;
};

export const getProductInfo = (state: AppStateType): ProductInfoStateType => {
    return state.PageProduct.productInfo;
};

export const getSortPopup = (state: AppStateType): SortPopupType => {
    return state.PageProduct.sortPopup;
};

export const getSortedProducts = createSelector(
    [getProducts, getSortPopup],
    (products: ProductType[], sortPopup: SortPopupType): ProductType[] => {
        const sortedProducts = [...products];
        const sortIndex = sortPopup.ActiveSortPopupIndex;
        switch (sortIndex) {
            case 0:
                return sortedProducts.sort((a, b) => b.rating - a.rating);
            case 1:
                return sortedProducts.sort((a, b) => a.price - b.price);
            case 2:
                return sortedProducts.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
            default:
                return sortedProducts;
        }
    },
);

export const getFilteredSortedProducts = createSelector(
    [getSortedProducts, getCategories],
    (sortedProducts: ProductType[], categories: CategoriesType): ProductType[] => {
        if (categories.ActiveCategoryIndex === 0) {
            return sortedProducts;
        }
        return sortedProducts.filter(
            (product) => product.category === categories.ActiveCategoryIndex - 1,
        );
    },
);
