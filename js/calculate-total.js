import {cartSpan} from './add-to-cart.js';
import {localStorage} from './local-storage.js';
import {setAmountToCartSpan} from './on-load.js';
import {showSuccessMessage} from './add-to-cart.js';
const incrementBtn = document.querySelector('.js_prod__btn-more');
const decrementBtn = document.querySelector('.js_prod__btn-less');
const calculateBtns = document.querySelectorAll('.js_prod__btn');
const amountSpan = document.querySelector('.js_prod__amount-span');
const priceSpan = document.querySelector('.js_prod__price');
const price = document.querySelector('.js_price');
const discountSpan = document.querySelector('.js_prod__discount');
const addProductPageBtn = document.querySelector('.js_add__btn');
let name = document.querySelector('.js_prod__title');
if(name) {
    name = name.textContent;
}
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
addProductPageBtn.addEventListener('click', cartAdd);
calculateTotal(Number(amountSpan.textContent));

export const minAmount = 1;
export const maxAmount = 12;



function cartAdd(e) {
    console.log(111)
    const btn = e.currentTarget;
    const parent = btn.closest('.js_prod__block');
    const amount = parent.querySelector('.js_prod__amount-span');
    cartSpan.textContent = Number(amount.textContent) + Number(cartSpan.textContent);
    setAmountToCartSpan();
    const id = parent.getAttribute('id');

    console.log('btn', btn)
    // ADD TO LOCAL STORAGE
    localStorage(id, amount.textContent);
    console.log('btn', btn)
    const successMessageSpan = document.querySelector('.js_success-product-name');
    const successMessage = document.querySelector('.js_success-message');
    const name = document.querySelector('.js_prod__title').textContent;
    showSuccessMessage(successMessage, successMessageSpan, name);
}

function increment(e) {
    decrementBtn.classList.remove('disable-btn');
    if(e.currentTarget.classList.contains('disable-btn')) {
        return;
    }
    // cartSpan.textContent = Number(cartSpan.textContent) + 1;
    amountSpan.textContent = Number(amountSpan.textContent) + 1;
    // if(Number(amountSpan.textContent) === maxAmount) {
    //     e.currentTarget.classList.add('disable-btn');
    // }
    calculateTotal(Number(amountSpan.textContent));
}

function decrement(e) {
    console.log('decrement')
    // incrementBtn.classList.remove('disable-btn');
    // if(e.currentTarget.classList.contains('disable-btn')) {
    //     return;
    // }
    // cartSpan.textContent = Number(cartSpan.textContent) - 1;
    amountSpan.textContent = Number(amountSpan.textContent) - 1;
    if(Number(amountSpan.textContent) === minAmount) {
    e.currentTarget.classList.add('disable-btn');
    }
    calculateTotal(Number(amountSpan.textContent));
}

function calculateTotal(amount) {
    const productPrice = Number(price.textContent);
   priceSpan.textContent = `$${(productPrice * amount).toFixed(2)}`;
}



function priceAmount(value) {
    switch(value) {
        case 1:  
        return 19.99;  
        case 2: 
        return 24.99;
        case 3:
        return 35.32;
        case 4:
        return 39.99;
        case 5:
        return 43.98;
        case 6:  
        return 49.95;
        case 7:
        return 69.99;
        case 8:
        return 79.99;
        case 9:
        return 84.41;
        case 10:
        return 89.99;
        case 11:
        return 109;
        case 12:
        return 119;
    }
}

function discountAmount(quantity) {
    switch(quantity) {
        case 1:  
        return '';  
        case 2: 
        return 39.98;
        case 3:
        return 59.97;
        case 4:
        return 79.96;
        case 5:
        return 99.95;
        case 6:  
        return 119.94;
        case 7:
        return 139.93;
        case 8:
        return 159.92;
        case 9:
        return 179.91;
        case 10:
        return 199.90;
        case 11:
        return 219.89;
        case 12:
        return 239.88;
    }
}
