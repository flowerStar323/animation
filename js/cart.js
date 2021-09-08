import { products } from './data/products.js';
import { item } from './templates/product-item.js';

const productsList = document.querySelector('.js_products__list');

products.forEach(product => {
    productsList.insertAdjacentHTML('beforeend',item(product));
})
