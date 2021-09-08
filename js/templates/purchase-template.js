export const purchaseTemplate = (products) => {
 
    let result = [];

    products.forEach(product => {
        result.push(`<p class="text">${product.name} - <span class="bold"> $${product.price}</span></p>`)
    })
    
    result = result.join('');
    return result;
}