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
};
