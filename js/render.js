// 展示页
function renderPD(list) {
    const row = document.getElementById("row");

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < list.data.length; i++) {

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

// 购物车页面 
function renderCartList(list) {
    const cartList = document.getElementById("cartList");

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < list.length; i++) {
        const cartItem = document.createElement('div');
        cartItem.classList = "cartItem";
        cartItem.dataset.confirm = list[i].confirm;

        const cartLeft = document.createElement('div');
        cartLeft.classList = "cartLeft";

        const cartRight = document.createElement('div');
        cartRight.classList = "cartRight";

        cartItem.appendChild(cartLeft);
        cartItem.appendChild(cartRight);

        const cartImgWrap = document.createElement('div');
        cartImgWrap.classList = "cartImg";

        const cartImg = document.createElement('img');
        cartImg.src = list[i].mainImg;

        cartImgWrap.appendChild(cartImg);
        cartLeft.appendChild(cartImgWrap);

        const cartBasic = document.createElement('div');
        cartBasic.classList = "cartBasic";
        cartBasic.innerHTML = list[i].name + '<br><br>' + list[i].id;

        cartLeft.appendChild(cartBasic);

        const cartQty = document.createElement('div');
        cartQty.classList = "cartQty";

        const cartM1 = document.createElement('div');
        cartM1.classList = "cartMoji";
        cartM1.textContent = "數量";

        const qtySelect = document.createElement('p');
        qtySelect.textContent = list[i].qty;

        cartQty.appendChild(cartM1);
        cartQty.appendChild(qtySelect);

        cartRight.appendChild(cartQty);



        const cartPiece = document.createElement('div');
        const cartM2 = document.createElement('div');
        cartM2.classList = "cartMoji";
        cartM2.textContent = "單價";

        const cartPrice = document.createElement('p');
        cartPrice.id = "cartPiecePrice";
        cartPrice.textContent = "￥" + list[i].price;

        cartPiece.appendChild(cartM2);
        cartPiece.appendChild(cartPrice);
        cartRight.appendChild(cartPiece);

        const cartSub = document.createElement('div');

        const cartM3 = document.createElement('div');
        cartM3.classList = "cartMoji";
        cartM3.textContent = "小計";

        const cartTotal = document.createElement('p');
        cartTotal.id = "cartSubTotal";
        cartTotal.dataset.confirm = list[i].confirm;
        cartTotal.textContent = "￥" + list[i].price * list[i].qty;

        cartSub.appendChild(cartM3);
        cartSub.appendChild(cartTotal);


        cartRight.appendChild(cartSub);

        const cartDelete = document.createElement('div');
        cartDelete.classList = "cartDelete";
        cartDelete.dataset.confirm = list[i].confirm;
        cartRight.appendChild(cartDelete);

        fragment.appendChild(cartItem);
    }

    cartList.appendChild(fragment);

}
function test(){
    console.log("hello")
}
// renderCartList(list);