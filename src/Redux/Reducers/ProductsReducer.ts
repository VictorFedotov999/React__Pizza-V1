import { CartItemType, ProductType } from './../../Type/productsType';
import { cartApi, pizzasApi } from '../../Api/api';

import {
    AddProductCart,
    clearCart,
    REMOVE_CART_PRODUCT,
    SetProducts,
    SetProductsCart,
} from '../ActionCreator/ProductsAC';
import {
    SET_PRODUCTS,
    ACTIVE_PAGINATION,
    UPDATE_PRODUCT_INFO,
    ADD_PRODUCT_CART,
    SET_PRODUCTS_CART,
    ACTIVE_SORT__POPUP,
    CLEAR_CART,
} from '../ActionCreator/ProductsAC';
import { removeCartProduct } from '../ActionCreator/ProductsAC';
import { ProductsActionType } from '../ActionCreator/ProductsAC';
import { Dispatch } from 'redux';

let initialState = {
    products: [] as ProductType[],
    productInfo: {} as Record<string, { productType: number; productSize: number }>,
    productsCart: [] as CartItemType[],
    categories: {
        categoriesPagination: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
        ActiveCategoryIndex: 0,
    }, //true
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
        } //true
        case ACTIVE_PAGINATION: {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    ActiveCategoryIndex: action.index,
                },
            };
        } //true
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
        } //true
        case ADD_PRODUCT_CART: {
            return {
                ...state,
                productsCart: [...state.productsCart, action.productDate],
            };
        } //true
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

type DispatchType = Dispatch<ProductsActionType>;

export const getPizzas = () => {
    return (dispatch: DispatchType) => {
        pizzasApi.getPizzas().then((data) => {
            dispatch(SetProducts(data));
        });
    };
}; //true

export const addToCart = (productDate: CartItemType) => {
    return (dispatch: DispatchType) => {
        cartApi.addToCart(productDate).then(() => dispatch(AddProductCart(productDate)));
    };
}; //true

export const getProductCart = () => {
    return (dispatch: DispatchType) => {
        cartApi.getProductCart().then((data) => {
            dispatch(SetProductsCart(data));
        });
    };
}; // true

export const getFilteredProducts = (products: ProductType[], ActiveCategoryIndex: number) => {
    if (ActiveCategoryIndex === 0) {
        return products;
    }
    return products.filter((product) => product.category === ActiveCategoryIndex - 1);
};

export const removeCartThunk = () => {
    return async (dispatch: any) => {
        try {
            await cartApi.clearCart();
            dispatch(clearCart());
        } catch (error) {}
    };
};

export const removeCartProductThunk = (productId: string) => {
    return (dispatch: any) => {
        cartApi.removeCartProduct(productId).then(() => {
            dispatch(removeCartProduct(productId));
        });
    };
};

export default ProductsReducer;
