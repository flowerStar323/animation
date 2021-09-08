export const tableRowTemplate = (product) => {
    return `
    <tr id="${product.id}" class="js_remove-product-parent">
    <td class="text">
      <p>${product.name}</p>
    </td>
    <td class="text">
      <p>${product.quantity}</p>
    </td>
    <td class="text">
      <p>${`$${product.price}`}</p>
    </td>
    <td class="text">${(product.quantity * product.price).toFixed(2)}</td>
    <td>
      <button class="orders__close-btn js_remove-product"></button>
    </td>
  </tr>
      `
  }