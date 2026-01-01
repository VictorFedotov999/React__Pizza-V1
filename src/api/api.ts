import axios from 'axios';
import { ProductType } from '../Redux/types/productsType';
import { CartItemType } from '../Redux/types/basketType';
const instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

type PizzasType = {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};

export const pizzasApi = {
    getPizzas() {
        return instance.get<PizzasType>('/pizzas').then((response) => {
            return response.data;
        });
    },
};

export const cartApi = {
    addToCart(product: CartItemType): Promise<CartItemType> {
        return instance.post<CartItemType>('/cart', product).then((response) => response.data);
    },

    getProductCart(): Promise<CartItemType[]> {
        return instance.get<CartItemType[]>('/cart').then((response) => response.data);
    },

    clearCart(): Promise<void> {
        // проверь реализацию
        return instance.delete('/cart');
    },

    removeCartProduct(productId: number): Promise<void> {
        return instance.delete(`/cart/${productId}`);
    },
};
