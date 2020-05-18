// 展示页
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

// 单一商品页
function renderDetails(list) {
    
    const left = document.querySelector('#left');
    const leftImg = document.createElement('img');
    leftImg.src = list.data.mainImg;
    left.appendChild(leftImg);

    const prodTitle = document.querySelector('#prodTitle');
    prodTitle.textContent = list.data.name;

    const prodId = document.querySelector('#prodId');
    prodId.textContent = list.data.id;

    const prodPrice = document.querySelector('#prodPrice');
    prodPrice.textContent = '￥' + list.data.price;


    const prodNote = document.querySelector('#prodNote');
    prodNote.textContent = list.data.note;

    const prodTexture = document.querySelector('#prodTexture');
    prodTexture.textContent = list.data.texture;

    const prodDesc = document.querySelector('#prodDesc');
    prodDesc.textContent = list.data.description;

    const madeIn = list.data.place;
    const prodPlace = document.querySelector('#prodPlace');
    prodPlace.innerHTML = '素材產地 / ' + madeIn + '<br>加工產地 / ' + madeIn;
} 