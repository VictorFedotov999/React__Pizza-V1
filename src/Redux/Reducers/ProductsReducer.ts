import { ProductType, ProductsActionType } from '../types/productsType';

import {
    SET_PRODUCTS,
    ACTIVE_PAGINATION,
    UPDATE_PRODUCT_INFO,
    ACTIVE_SORT__POPUP,
} from '../actions/productsActions';

let initialState = {
    products: [] as ProductType[],
    productInfo: {} as Record<string, { productType: number; productSize: number }>,
    categories: {
        categoriesPagination: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
        ActiveCategoryIndex: 0,
    },
    sortPopup: {
        sortPopupType: ['популярности', 'цене', 'алфавиту'],
        ActiveSortPopupIndex: 0,
        OpenSortPopup: false,
    },
};

type InitialState = typeof initialState;

const ProductsReducer = (state = initialState, action: ProductsActionType): InitialState => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.products,
            };
        }
        case ACTIVE_PAGINATION: {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    ActiveCategoryIndex: action.index,
                },
            };
        }
        case UPDATE_PRODUCT_INFO: {
            return {
                ...state,
                productInfo: {
                    ...state.productInfo,
                    [action.productId]: {
                        productType: action.selectedType,
                        productSize: action.selectedSize,
                    },
                },
            };
        }

        case ACTIVE_SORT__POPUP: {
            return {
                ...state,
                sortPopup: {
                    ...state.sortPopup,
                    ActiveSortPopupIndex: action.ActiveSortPopupIndex,
                    OpenSortPopup: action.OpenSortPopup,
                },
            };
        }

        default:
            return state;
    }
};

export default ProductsReducer;
