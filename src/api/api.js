import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const pizzasApi = {
    getPizzas() {
        return instance.get('/pizzas').then((response) => {
            return response.data;
        });
    },
};

export const cartApi = {
    addToCart(product) {
        return instance.post('/cart', product);
    },

    getProductCart() {
        return instance.get('/cart').then((response) => {
            return response.data;
        });
    },

    clearCart() {
        return instance.get('/cart').then((response) => {
            const items = response.data;

            if (items.length === 0) {
                return Promise.resolve([]);
            }

            const deletePromises = items.map((item) => instance.delete(`/cart/${item.id}`));

            return Promise.all(deletePromises);
        });
    },

    removeCartProduct(productId) {
        return instance.delete(`/cart/${productId}`);
    },
};
