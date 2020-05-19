function renderOrder(data) {
    // console.log(data)
    const cartList = document.getElementById("cartList");
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
        const cartItem = document.createElement('div');
        cartItem.classList = "cartItem";
        cartItem.dataset.confirm = data[i].confirm;

        const cartLeft = document.createElement('div');
        cartLeft.classList = "cartLeft";

        const cartRight = document.createElement('div');
        cartRight.classList = "cartRight";

        cartItem.appendChild(cartLeft);
        cartItem.appendChild(cartRight);

        const cartImgWrap = document.createElement('div');
        cartImgWrap.classList = "cartImg";

        const cartImg = document.createElement('img');
        cartImg.src = data[i].mainImg;

        cartImgWrap.appendChild(cartImg);
        cartLeft.appendChild(cartImgWrap);

        const cartBasic = document.createElement('div');
        cartBasic.classList = "cartBasic";
        cartBasic.innerHTML = data[i].name + '<br><br>' + data[i].id;

        cartLeft.appendChild(cartBasic);

        const cartQty = document.createElement('div');
        cartQty.classList = "cartQty";

        const cartM1 = document.createElement('div');
        cartM1.classList = "cartMoji";
        cartM1.textContent = "数量";

        const qtySelect = document.createElement('p');
        qtySelect.textContent = data[i].qty;

        cartQty.appendChild(cartM1);
        cartQty.appendChild(qtySelect);

        cartRight.appendChild(cartQty);

        const cartPiece = document.createElement('div');
        const cartM2 = document.createElement('div');
        cartM2.classList = "cartMoji";
        cartM2.textContent = "单价";

        const cartPrice = document.createElement('p');
        cartPrice.id = "cartPiecePrice";
        cartPrice.textContent = "￥" + data[i].price;

        cartPiece.appendChild(cartM2);
        cartPiece.appendChild(cartPrice);
        cartRight.appendChild(cartPiece);

        const cartSub = document.createElement('div');

        const cartM3 = document.createElement('div');
        cartM3.classList = "cartMoji";
        cartM3.textContent = "小计";

        const cartTotal = document.createElement('p');
        cartTotal.id = "cartSubTotal";
        cartTotal.dataset.confirm = data[i].confirm;
        cartTotal.textContent = "￥" + data[i].price * data[i].qty;

        cartSub.appendChild(cartM3);
        cartSub.appendChild(cartTotal);

        cartRight.appendChild(cartSub);

        fragment.appendChild(cartItem);
    }

    cartList.appendChild(fragment);
}

const cartYesPay = document.querySelector('#cartYesPay'); 
cartYesPay.addEventListener("click", ()=>{
    localStorage.setItem("_id",'');
    window.location.href = `profile.html`;
});

const url = `http://127.0.0.1:5000/get`;
fetch(url, {
    method: 'POST',
    // , 'Authorization': `Bearer x${access_token}
    headers: { 'Content-Type': 'application/json' },
    // 用 Fetch POST的話，必須把轉成字串才行。 
    body: JSON.stringify(
        { "id": localStorage.getItem("_id") }
    )
})
    .then(res => {
        return res.json();
    })
    .then(json => {
        console.log('fdsfds',json)
        renderOrder(json)
    })
    .catch(err => {
        console.log(err);
    });
