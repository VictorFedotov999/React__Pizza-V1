import axios from 'axios';

import { CartItemType } from '../ts/types/basketType';
import { ProductType } from '../ts/types/productsType';
const instance = axios.create({
    baseURL: '/api/',
});

type PizzasType = {
    id: string;
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
        return instance.get<PizzasType[]>('/pizzas').then((response) => {
            return response.data;
        });
    },
};

export const cartApi = {
    addToCart(product: CartItemType): Promise<CartItemType> {
        return instance
            .post<CartItemType>('/cart', { ...product, id: product.key })
            .then((response) => response.data);
    },

    getProductCart(): Promise<CartItemType[]> {
        return instance.get<CartItemType[]>('/cart').then((response) => response.data);
    },

    clearCart() {
        return instance.get('/cart').then((response) => {
            const items = response.data;

            if (items.length === 0) {
                return Promise.resolve([]);
            }

            const deletePromises = items.map((item: ProductType) =>
                instance.delete(`/cart/${item.id}`),
            );

            return Promise.all(deletePromises);
        });
    },

    removeCartProduct(key: string): Promise<void> {
        return instance.delete(`/cart/${key}`);
    },

    updateCartItem(key: string, data: CartItemType) {
        return instance.patch(`/cart/${key}`, data);
    },
};
