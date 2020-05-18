// render Product
function renderPD(list) {
    const row = document.getElementById("row");

    const fragment = document.createDocumentFragment();

    for(let i = 0; i < list.data.length; i++) {

        const product = document.createElement("div");
        product.className = "product";

        const prodLink = document.createElement("a");
        prodLink.href = `./product.html?id=${list.data[i].id}`;
        product.appendChild(prodLink);

        const mainImg = document.createElement("img");
        mainImg.src = `${list.data[i].mainImg}`;

        const title = document.createElement("div");
        title.className = "title";
        title.textContent = `${list.data[i].name}`;

        const price = document.createElement("div");
        price.className = "price";
        price.textContent = "￥" + `${list.data[i].price}`;

        product.appendChild(mainImg);
        product.appendChild(title);
        product.appendChild(price);

    
        fragment.appendChild(product);
    }
    
    row.appendChild(fragment);
}