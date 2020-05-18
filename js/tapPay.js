// 確認付款按鈕綁定事件
cartYesPay.addEventListener("click", finalCheck);

function finalCheck(e) {
    e.preventDefault();

    cartYesPay.classList = 'cartYesPay';
    onSubmit();
}

function onSubmit() {
    console.log("onsubmit")
    checkOut();
}

function checkOut() {
    // 清空購物車，因為結帳了。
    localStorage.removeItem("list");
    // const url = `https://${host}/api/1.0/order/checkout`;
    // fetch(url, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer x${access_token}` },
    //     // 用 Fetch POST的話，必須把轉成字串才行。 
    //     body: JSON.stringify(order)
    // })
    //     .then(res => {
    //         return res.json();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // 取得 API 回傳的訂單號碼 + 跳轉到 Thank You Page（將訂單號碼放在網址參數裡）
    window.location.href = `index.html`;
}