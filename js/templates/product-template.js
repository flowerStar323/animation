import { imagesList } from './product-images.js';
import { description } from './product-description.js';

export const productTemplate = (product, amount) => {
    return `
   <div class="prod__block js_prod__block" id="${product.id}">
   <div class="prod__img-box">
       <img src="${product.image}" alt="" class="img prod__img js_prod__img">
      
      ${product.images ? imagesList(product.images) : ''}

   </div>
   <div class="prod__block-right">
       <div class="prod__text-box">
           <h1 class="title prod__title js_prod__title">${product.name}</h1>
           <div class="prod__price-box">
               <span class="prod__price">$
                   <span class="js_price">${product.price}</span>
               </span>
               ${product.discount ? `<span class="prod__discount js_prod__discount">$${product.discount}</span>` : ''}
               
           </div>
       </div>
       <div class="prod__btns-box">
           <button class="prod__btn prod__btn-less js_prod__btn js_prod__btn-less disable-btn">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   x="0px" y="0px" viewBox="0 0 409.6 409.6"
                   style="enable-background:new 0 0 409.6 409.6;" xml:space="preserve">
                   <g>
                       <g>
                           <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467
c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                       </g>
                   </g>
               </svg>
           </button>
         
           <span class="prod__amount-span js_prod__amount-span">${amount || 1}</span>
         
           <button class="prod__btn prod__btn-more js_prod__btn js_prod__btn-more">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                   xml:space="preserve">
                   <g>
                       <g>
                           <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z" />
                       </g>
                   </g>
               </svg>
           </button>
       </div>
       <div class="prod__price-box">
       <span class="prod__price js_prod__price">$ ${product.price}</span>
       </div>
       <div class="add__btn-box">
       <p class="text success-message js_success-message">Success! You have added <span class="js_success-product-name"></span> to your shopping cart!</p>
       <button class="btn add__btn js_add__btn">add to cart</button>
       </div>
       <div class="prod__payments-box">
           <img src="./img/icons/mastercard.png" alt="" class="prod__payments-img">
           <img src="./img/icons/visa.png" alt="" class="prod__payments-img">
       </div>
      
       <div class="prod__text-block">
       ${description(product.description)}
         </div>
     
       <div class="prod__bottom-block">
           <button class="accordion">RETURN & WARRANTY</button>
           <div class="panel">
               <p class="text"><span class="bold">100% Secure payment</span> with SSL Encryption.
                   <br>If you're not <span class="bold">100% satisfied</span>, let us know and we'll make it right.</p>
           </div>

           <button class="accordion">SHIPPING POLICIES</button>
           <div class="panel">
               <p class="text">Orders ship within <span class="bold">5 to 10 business days</span>.
                   <br><span class="bold">Tip:</span> Buying 2 products or more at the same time will save you quite a lot on shipping fees.</p>
           </div>
       </div>
   </div>
</div>
`
}