import { localStorage } from './local-storage.js';
// import { setAmountToCartSpan } from './on-load.js';
let allBtns = document.querySelectorAll('.js_add-to-cart');
export const cartSpan = document.querySelector('.js_cart__span');
export const successMessageSpan = document.querySelector('.js_success-product-name');
export const successMessage = document.querySelector('.js_success-message');


allBtns = [...allBtns];

allBtns.forEach(btn => {
    btn.addEventListener('click', addToCart);
});

let count = 0;

function addToCart(e) {
    const btn = e.currentTarget;
    const product = btn.closest('.js_product');
    const productId = product.getAttribute('id');
    cartSpan.textContent = Number(cartSpan.textContent) + 1;
    const name = e.currentTarget.closest('.js_product').querySelector('.js_product-name').textContent;
    showSuccessMessage(successMessage, successMessageSpan, name);

    // ADD TO LOCAL STORAGE
    localStorage(productId);
}


export function showSuccessMessage(message, span, name) {
    console.log(11111)
    span.textContent = name;
    console.log('message', message)
    message.classList.add('success-message--active');
    const tm = setTimeout(() => {
        hideSuccessMessage();
        clearTimeout(tm);
    }, 1200);
}
function hideSuccessMessage() {
    const successMessage = document.querySelector('.js_success-message');
    successMessage.classList.remove('success-message--active');
}

