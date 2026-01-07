import {
    ADD_PRODUCT_CART,
    SET_PRODUCTS_CART,
    CLEAR_CART,
    REMOVE_CART_PRODUCT,
    PLUS_COUNT_PRODUCT,
    MINUS_COUNT_PRODUCT,
} from '../actions/basketActions';

import { CartItemType, BasketActionType } from '../../ts/types/basketType';

let initialState = {
    productsCart: [] as CartItemType[],
};

type InitialStateType = typeof initialState;

const BasketReducer = (state = initialState, action: BasketActionType): InitialStateType => {
    switch (action.type) {
        case SET_PRODUCTS_CART: {
            return {
                ...state,
                productsCart: action.payload,
            };
        }

        case ADD_PRODUCT_CART: {
            const newItem = action.payload;

            const existingItemIndex = state.productsCart.findIndex(
                (item) => item.key === newItem.key,
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

        case REMOVE_CART_PRODUCT:
            return {
                ...state,
                productsCart: state.productsCart.filter(
                    (item) => !(item.key === action.payload.key),
                ),
            };

        case PLUS_COUNT_PRODUCT: {
            return {
                ...state,
                productsCart: state.productsCart.map((item) =>
                    item.key === action.payload.key
                        ? { ...item, productCount: item.productCount + 1 }
                        : item,
                ),
            };
        }

        case MINUS_COUNT_PRODUCT: {
            return {
                ...state,
                productsCart: state.productsCart
                    .map((item) =>
                        item.key === action.payload.key
                            ? { ...item, productCount: item.productCount - 1 }
                            : item,
                    )
                    .filter((item) => item.productCount > 0),
            };
        }

        default:
            return state;
    }
};

export default BasketReducer;
