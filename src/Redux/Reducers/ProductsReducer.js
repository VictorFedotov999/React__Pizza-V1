import { cartApi, pizzasApi } from '../../Api/api';
import { SetProductsAC, setProductsCart } from '../ActionCreator/ProductsAC';
import {
    SET_PRODUCTS,
    ACTIVE_PAGINATION,
    UPDATE_PRODUCT_INFO,
    ADD_PRODUCT_CART,
    SET_PRODUCTS_CART,
} from '../ActionCreator/ProductsAC';

let initialState = {
    products: [],
    productInfo: {},
    productsCart: [],
    categories: {
        categoriesPagination: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
        quantity: 0,
    },
};

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            };
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
            let product = {
                id: action.productDate.id,
                productTitle: action.productDate.name,
                imageUrl: action.productDate.imageUrl,
                price: action.productDate.price,
                selectedType: action.productDate.selectedType,
                selectedSize: action.productDate.selectedSize,
                typeName: action.productDate.typeName,
                productCount: 1,
            };
            return {
                ...state,
                productsCart: [...state.productsCart, product],
            };
        }

        case SET_PRODUCTS_CART: {
            return {
                ...state,
                productsCart: action.productsCart,
            };
        }

        default:
            return state;
    }
};

export const getPizzas = () => {
    return (dispatch) => {
        pizzasApi.getPizzas().then((data) => {
            dispatch(SetProductsAC(data));
        });
    };
};

export const addToCart = (productDate) => {
    return (dispatch) => {
        cartApi.addToCart(productDate);
    };
};

export const getProductCart = () => {
    return (dispatch) => {
        cartApi.getProductCart().then((data) => {
            dispatch(setProductsCart(data));
        });
    };
};

export default ProductsReducer;
