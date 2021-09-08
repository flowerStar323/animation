const cardsContainer = document.querySelector('.js_card-box-dropdown');
const cardsName = document.querySelectorAll('.js_card-name');
const cardsImg = document.querySelectorAll('.js_card-img');

cardsName.forEach(card => {
    card.addEventListener('click', toggleCard);
});

function toggleCard(e) {
    const button = e.currentTarget;

    if(!button.classList.contains('hidden-btn')) {
        cardsName.forEach(btn => {
            if(btn.classList.contains('hidden-btn')) {
                btn.classList.add('hidden-btn-vis');
            }
        })
       return; 
    }

    button.classList.remove('hidden-btn-vis');
    button.classList.remove('hidden-btn');
    const buttonId = button.getAttribute('id');

    cardsName.forEach(btn => {
        if(btn.getAttribute('id') !== buttonId) {
            btn.classList.add('hidden-btn');
            cardsImg.forEach(img => {
               if(img.getAttribute('data-id') !== buttonId) {
                   img.classList.add('hidden');
                   return;
               } 
               img.classList.remove('hidden');
            })
            
        }
    })
}
