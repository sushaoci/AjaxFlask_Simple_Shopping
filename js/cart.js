
let sumTotalNum = [];
let shippingFeeNum = 30;
let payableNum = 0;

const cartYesPay = document.querySelector('#cartYesPay'); 

document.addEventListener("DOMContentLoaded", () => {
    cartTopTitle.textContent = "购物车(" + countGoods() + ")";
    initCart();
});

// 初始畫面，購物車沒東西就說空空，購物車有東西就 render 出來 + 執行一些功能
function initCart() {
    if (list.length === 0) {
        cartNothing();
    } else {
        renderCartList(list);
        calcTotal();
        changeQty();
        deleteItem();
    }
}

// 換數量功能
function changeQty() {
    const select = document.querySelectorAll('.cartQty > select');

    select.forEach((opt) => {
        opt.addEventListener('change', (e) => {
            // 找到正確的要改數量的商品
            list.forEach((li) => {
                if (li.confirm === e.target.getAttribute("data-confirm")) {
                    // 更新 qty
                    li.qty = e.target.value;
                    // 更新小計
                    updateSubTotal(li);
                }
            });
            // 存回 local storage
            localStorage.setItem('list', JSON.stringify(list));
            console.log("換數量後", list);
            // 重算價錢
            calcTotal();
            // Nav 右上、cartList 左上數字
            countGoods();
            cartTopTitle.textContent = "购物车(" + countGoods() + ")";
        });
    });
}

// 更新小計功能
function updateSubTotal(li) {
    const cartSubTotal = document.querySelectorAll('#cartSubTotal');
    cartSubTotal.forEach((p) => {
        if (p.getAttribute("data-confirm") === li.confirm) {
            p.textContent = "NT." + `${li.price * parseInt(li.qty)}`;
        }
    });
}

// 空空畫面
function cartNothing() {
    const cartEmpty = document.createElement('div');
    cartEmpty.textContent = '您的購物車是空的喔～!';
    cartEmpty.className = 'cartEmpty';
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }
    cartList.appendChild(cartEmpty);
}

// 計算價錢
function calcTotal() {
    if (list.length === 0) {
        // 如果購物車空空，沒事。
        return;
    } else {
        sumTotalNum = list.map((li) => {
            return li.price * parseInt(li.qty);
        });
        sumTotalNum = sumTotalNum.reduce((acc, curr) => {
            return acc + curr;
        });

        payableNum = sumTotalNum + shippingFeeNum;

        // 顯示數字在正確的 div 內。
        sumTotal.textContent = sumTotalNum;
        shippingFee.textContent = shippingFeeNum;
        payable.textContent = payableNum;
    }
}

// 移除功能
function deleteItem() {
    const trashCan = document.querySelectorAll('.cartDelete');
    const items = document.querySelectorAll('.cartItem');

    // 垃圾桶被按
    trashCan.forEach((tc) => {
        tc.addEventListener('click', deleteHelper);
    });

    function deleteHelper(e) {
        // 刪除 localStorage 資料，然後存回去
        list = list.filter((li) => {
            return li.confirm != e.target.dataset.confirm;
        });
        localStorage.setItem('list', JSON.stringify(list));
        console.log("購物車移除商品後", list);

        if (list.length === 0) {
            // 如果購物車變空的，顯示空空畫面，價格都歸零
            cartNothing();
            sumTotal.textContent = 0;
            shippingFee.textContent = 0;
            payable.textContent = 0;
        } else {
            // 購物車還有其他商品，比對刪除碼，移除那項符合的商品
            items.forEach((item) => {
                if (item.getAttribute("data-confirm") === e.target.getAttribute("data-confirm")) {
                    item.parentNode.removeChild(item);
                }
            });
        }
        // 重算價錢
        calcTotal();
        // Nav 右上、cartList 左上數字
        countGoods();
        cartTopTitle.textContent = "购物车(" + countGoods() + ")";
    }
}