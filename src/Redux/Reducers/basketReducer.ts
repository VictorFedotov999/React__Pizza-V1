import { CartItemType } from '../types/componentsTypes/basketType';
import {
    ADD_PRODUCT_CART,
    SET_PRODUCTS_CART,
    CLEAR_CART,
    REMOVE_CART_PRODUCT,
    PLUS_COUNT_PRODUCT,
    MINUS_COUNT_PRODUCT,
} from '../actions/basketActions';
import { BasketActionType } from '../types/componentsTypes/basketType';

let initialState = {
    productsCart: [] as CartItemType[],
};

type InitialState = typeof initialState;

const BasketReducer = (state = initialState, action: BasketActionType): InitialState => {
    switch (action.type) {
        case SET_PRODUCTS_CART: {
            return {
                ...state,
                productsCart: action.productsCart,
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

        case PLUS_COUNT_PRODUCT: {
            return {
                ...state,
            };
        }

        case MINUS_COUNT_PRODUCT: {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export default BasketReducer;
