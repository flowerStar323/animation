export const description = (description) => {
    const res = [];
    for (const item of description) {
        if (item.title) {
            res.push(`<p class="sub-title prod__subtitle">${item.title}</p><p class="text prod__text">${item.text}</p>`);
        } else {
            res.push(`<p class="text prod__text">${item.text}</p>`);
        }
    }
    return res.join('');
}