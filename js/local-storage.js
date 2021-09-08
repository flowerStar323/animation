import { products } from './data/products.js';
export const localStorage = (id, count) => {
    const actualProduct = products.find(product => product.id === id);
    let cart = window.localStorage.getItem('cart');
    if(cart) {
        cart = JSON.parse(cart);
        const isFindProduct = cart.some(product => product.id === id);
        if(isFindProduct) {
            const updateCart = cart.map(product => product.id === id ? {...product,quantity : count ? Number(count) : product.quantity + 1} : product);
            window.localStorage.setItem('cart', JSON.stringify(updateCart));
            return;
        }
        const updateCart = [...cart, {...actualProduct, quantity : count ? Number(count) : 1}];
        window.localStorage.setItem('cart', JSON.stringify(updateCart));
        return;
    };
    const createCart = [{...actualProduct, quantity : count ? Number(count) : 1}];
    window.localStorage.setItem('cart', JSON.stringify(createCart));
}

export const getLocalStorageItem = () => {
    let localStorageData = window.localStorage.getItem('cart');
    if(localStorageData) {
        return JSON.parse(localStorageData);
    }
    return [];
}

