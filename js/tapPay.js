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
    const url = `http://127.0.0.1:5000/post`;
    fetch(url, {
        method: 'POST',
        // , 'Authorization': `Bearer x${access_token}
        headers: { 'Content-Type': 'application/json' },
        // 用 Fetch POST的話，必須把轉成字串才行。 
        body: JSON.stringify({"test":"test"})
    })
        .then(res => {
            return res.json();
        })
        .then(json=>{
            console.log(json)
        })
        .catch(err => {
            console.log(err);
        });
    // 取得 API 回傳的訂單號碼 + 跳轉到 Thank You Page（將訂單號碼放在網址參數裡）
    // window.location.href = `index.html`;
}