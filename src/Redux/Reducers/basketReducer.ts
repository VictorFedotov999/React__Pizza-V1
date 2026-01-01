import { CartItemType, BasketActionType } from '../types/basketType';
import {
    ADD_PRODUCT_CART,
    SET_PRODUCTS_CART,
    CLEAR_CART,
    REMOVE_CART_PRODUCT,
    PLUS_COUNT_PRODUCT,
    MINUS_COUNT_PRODUCT,
} from '../actions/basketActions';

let initialState = {
    productsCart: [] as CartItemType[],
};

type InitialStateType = typeof initialState;

const BasketReducer = (state = initialState, action: BasketActionType): InitialStateType => {
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
            const { id, selectedType, selectedSize } = action.payload;
            return {
                ...state,
                productsCart: state.productsCart.map((item) =>
                    item.id === id &&
                    item.selectedType === selectedType &&
                    item.selectedSize === selectedSize
                        ? { ...item, productCount: item.productCount + 1 }
                        : item,
                ),
            };
        }

        case MINUS_COUNT_PRODUCT: {
            const { id, selectedType, selectedSize } = action.payload;
            return {
                ...state,
                productsCart: state.productsCart.map((item) =>
                    item.id === id &&
                    item.selectedType === selectedType &&
                    item.selectedSize === selectedSize &&
                    item.productCount > 1
                        ? { ...item, productCount: item.productCount - 1 }
                        : item,
                ),
            };
        }

        default:
            return state;
    }
};

export default BasketReducer;
