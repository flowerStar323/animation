import { products } from './data/products.js';
import {productTemplate} from './templates/product-template.js';
import {getLocalStorageItem} from './local-storage.js';

const container = document.querySelector('.js_prod__block');
const id = new URLSearchParams(window.location.search).get('id');

const product = products.find(product => product.id === id);
const dataArray = getLocalStorageItem();
const amount = dataArray.find(item => item.id === product.id)?.quantity;
container.insertAdjacentHTML('beforeend', productTemplate(product, amount));



