if (localStorage.getItem('_id') != '') {
    window.location.href = `order.html`;
}
const container = document.getElementById('container');
const username = document.getElementById('username');
const password = document.getElementById('password');
const register = document.querySelector('#register');
const login = document.querySelector('#login');

register.addEventListener('click', (e) => {
    if (username.value != '' && password.value != '') {

        const url = `http://127.0.0.1:5000/register`;
        fetch(url, {
            method: 'POST',
            // , 'Authorization': `Bearer x${access_token}
            headers: { 'Content-Type': 'application/json' },
            // 用 Fetch POST的話，必須把轉成字串才行。 
            body: JSON.stringify(
                { "user": { "username": username.value, "password": password.value }, "info": { "id": username.value, "list": [] } }
            )
        })
            .then(res => {
                return res.json();
            })
            .then(json => {
                localStorage.setItem('_id', username.value);
                // renderOrder(json.data)
                window.location.href = `index.html`;
            })
            .catch(err => {
                console.log(err);
            });
    } else {
        const fragment = document.createDocumentFragment();
        const warning = document.createElement('p');
        warning.textContent = "请将信息填写完整哦😯"
        fragment.appendChild(warning);
        container.appendChild(fragment)
    }
});

login.addEventListener('click', (e) => {
    if (username.value != '' && password.value != '') {

        const url = `http://127.0.0.1:5000/login`;
        fetch(url, {
            method: 'POST',
            // , 'Authorization': `Bearer x${access_token}
            headers: { 'Content-Type': 'application/json' },
            // 用 Fetch POST的話，必須把轉成字串才行。 
            body: JSON.stringify(
                { "username": username.value, "password": password.value }
            )
        })
            .then(res => {
                return res.json();
            })
            .then(json => {
                if (json.check) {
                    localStorage.setItem('_id', username.value);
                    window.location.href = `order.html`;
                }
                else {
                    const fragment = document.createDocumentFragment();
                    const warning = document.createElement('p');
                    warning.textContent = "请先注册哦😯"
                    fragment.appendChild(warning);
                    container.appendChild(fragment)
                }
            })
            .catch(err => {
                console.log(err);
            });
    } else {
        const fragment = document.createDocumentFragment();
        const warning = document.createElement('p');
        warning.textContent = "请将信息填写完整哦😯"
        fragment.appendChild(warning);
        container.appendChild(fragment)
    }
});
// function renderOrder(data) {
//     // console.log(data)
//     const cartList = document.getElementById("cartList");
//     const fragment = document.createDocumentFragment();
//     for (let i = 0; i < data.length; i++) {
//         const cartItem = document.createElement('div');
//         cartItem.classList = "cartItem";
//         cartItem.dataset.confirm = data[i].confirm;

//         const cartLeft = document.createElement('div');
//         cartLeft.classList = "cartLeft";

//         const cartRight = document.createElement('div');
//         cartRight.classList = "cartRight";

//         cartItem.appendChild(cartLeft);
//         cartItem.appendChild(cartRight);

//         const cartImgWrap = document.createElement('div');
//         cartImgWrap.classList = "cartImg";

//         const cartImg = document.createElement('img');
//         cartImg.src = data[i].mainImg;

//         cartImgWrap.appendChild(cartImg);
//         cartLeft.appendChild(cartImgWrap);

//         const cartBasic = document.createElement('div');
//         cartBasic.classList = "cartBasic";
//         cartBasic.innerHTML = data[i].name + '<br><br>' + data[i].id;

//         cartLeft.appendChild(cartBasic);

//         const cartQty = document.createElement('div');
//         cartQty.classList = "cartQty";

//         const cartM1 = document.createElement('div');
//         cartM1.classList = "cartMoji";
//         cartM1.textContent = "數量";

//         const qtySelect = document.createElement('p');
//         qtySelect.textContent = data[i].qty;

//         cartQty.appendChild(cartM1);
//         cartQty.appendChild(qtySelect);

//         cartRight.appendChild(cartQty);

//         const cartPiece = document.createElement('div');
//         const cartM2 = document.createElement('div');
//         cartM2.classList = "cartMoji";
//         cartM2.textContent = "單價";

//         const cartPrice = document.createElement('p');
//         cartPrice.id = "cartPiecePrice";
//         cartPrice.textContent = "￥" + data[i].price;

//         cartPiece.appendChild(cartM2);
//         cartPiece.appendChild(cartPrice);
//         cartRight.appendChild(cartPiece);

//         const cartSub = document.createElement('div');

//         const cartM3 = document.createElement('div');
//         cartM3.classList = "cartMoji";
//         cartM3.textContent = "小計";

//         const cartTotal = document.createElement('p');
//         cartTotal.id = "cartSubTotal";
//         cartTotal.dataset.confirm = data[i].confirm;
//         cartTotal.textContent = "￥" + data[i].price * data[i].qty;

//         cartSub.appendChild(cartM3);
//         cartSub.appendChild(cartTotal);

//         cartRight.appendChild(cartSub);

//         fragment.appendChild(cartItem);
//     }

//     cartList.appendChild(fragment);
// }