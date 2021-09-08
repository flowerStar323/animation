export const imagesList = (images) => {
  return ` <ul class="prod__img-list">
       
    ${images.map(image => (
    `<li class="prod__img-item">
        <img src="${image}" alt="" class="img prod__subimg js_prod__subimg">
       </li>`
  )).join('')}

    </ul>`
}