import { CartItemType, ProductType, ProductsActionType } from '../types/productsType';

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

let initialState = {
    products: [] as ProductType[],
    productInfo: {} as Record<string, { productType: number; productSize: number }>,
    productsCart: [] as CartItemType[],
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
        case ADD_PRODUCT_CART: {
            const newItem = action.productDate;

            const existingItemIndex = state.productsCart.findIndex(
                (item) =>
                    item.id === newItem.id &&
                    item.selectedType === newItem.selectedType &&
                    item.selectedSize === newItem.selectedSize,
            );

            if (existingItemIndex >= 0) {
                const updatedCart = [...state.productsCart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    productCount: updatedCart[existingItemIndex].productCount + 1,
                };

                return {
                    ...state,
                    productsCart: updatedCart,
                };
            } else {
                return {
                    ...state,
                    productsCart: [...state.productsCart, newItem],
                };
            }
        }
        case SET_PRODUCTS_CART: {
            return {
                ...state,
                productsCart: action.productsCart,
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
        case CLEAR_CART: {
            return {
                ...state,
                productsCart: [],
            };
        }
        case REMOVE_CART_PRODUCT: {
            return {
                ...state,
                productsCart: state.productsCart.filter((item) => item.id !== action.productId),
            };
        }
        default:
            return state;
    }
};

export default ProductsReducer;
