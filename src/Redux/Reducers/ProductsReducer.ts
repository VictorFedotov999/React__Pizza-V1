import {
    ProductInfoType,
    ProductType,
    ProductsActionType,
    SortPopupType,
    CategoriesType,
    ProductInfoStateType,
} from '../types/productsType';

import {
    SET_PRODUCTS,
    ACTIVE_PAGINATION,
    UPDATE_PRODUCT_INFO,
    ACTIVE_SORT__POPUP,
} from '../actions/productsActions';

let initialState = {
    products: [] as ProductType[],
    productInfo: {} as ProductInfoStateType,
    categories: {
        categoriesPagination: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
        ActiveCategoryIndex: 0,
    } as CategoriesType,
    sortPopup: {
        sortPopupType: ['популярности', 'цене', 'алфавиту'],
        ActiveSortPopupIndex: 0,
        OpenSortPopup: false,
    } as SortPopupType,
};

type InitialStateType = typeof initialState;

const ProductsReducer = (state = initialState, action: ProductsActionType): InitialStateType => {
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
                        selectedType: action.selectedType,
                        selectedSize: action.selectedSize,
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
