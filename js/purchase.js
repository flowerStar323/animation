import { products } from './data/products.js';
import {purchaseTemplate} from './templates/purchase-template.js';

const purchaseContainer = document.querySelector('.js_purchase__product-list');
purchaseContainer.insertAdjacentHTML('beforeend', purchaseTemplate(products));