import { ProductType } from '../types/productsType';
import { AppStateType } from '../reduxStore';
import { createSelector } from 'reselect';

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

export const getSortedProducts = createSelector(
    [getProducts, getActiveSortPopupIndex],
    (products: ProductType[], sortIndex: number): ProductType[] => {
        // Создаем копию массива, чтобы не мутировать оригинал
        const sortedProducts = [...products];

        switch (sortIndex) {
            case 0: // популярности (по умолчанию)
                return sortedProducts.sort((a, b) => b.rating - a.rating);

            case 1: // цене (по возрастанию)
                return sortedProducts.sort((a, b) => a.price - b.price);

            case 2: // алфавиту
                return sortedProducts.sort((a, b) => a.name.localeCompare(b.name, 'ru'));

            default:
                return sortedProducts;
        }
    },
);

export const getFilteredSortedProducts = createSelector(
    [getSortedProducts, getActiveCategoryIndex],
    (sortedProducts: ProductType[], activeCategoryIndex: number): ProductType[] => {
        if (activeCategoryIndex === 0) {
            return sortedProducts;
        }
        return sortedProducts.filter((product) => product.category === activeCategoryIndex - 1);
    },
);
