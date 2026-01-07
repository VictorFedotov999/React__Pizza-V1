import {
    SET_PRODUCTS,
    ACTIVE_PAGINATION,
    UPDATE_PRODUCT_INFO,
    ACTIVE_SORT__POPUP,
} from '../actions/productsActions';

import {
    ProductType,
    ProductsActionType,
    SortPopupType,
    ProductInfoStateType,
    CategoriesType,
} from '../../ts/types/productsType';

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
                products: action.payload.products,
            };
        }
        case ACTIVE_PAGINATION: {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    ActiveCategoryIndex: action.payload.index,
                },
            };
        }
        case UPDATE_PRODUCT_INFO: {
            return {
                ...state,
                productInfo: {
                    ...state.productInfo,
                    [action.payload.id]: {
                        selectedType: action.payload.selectedType,
                        selectedSize: action.payload.selectedSize,
                    },
                },
            };
        }
        case ACTIVE_SORT__POPUP: {
            return {
                ...state,
                sortPopup: {
                    ...state.sortPopup,
                    ActiveSortPopupIndex: action.payload.ActiveSortPopupIndex,
                    OpenSortPopup: action.payload.OpenSortPopup,
                },
            };
        }
        default:
            return state;
    }
};

export default ProductsReducer;
