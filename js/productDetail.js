
// 單一產品頁網址
let prodURL = new URL(window.location);
fetch(`http://127.0.0.1:5000/product${prodURL.search}`)
    .then(res => {
        return res.json();
    })
    .then(json => {
        document.getElementById("prod").style.display = 'flex';

        renderDetails(json);

        orderHelper(json.data);
    })
    .catch(err => {
        console.log(err);
    });


function orderHelper(data) {
    // 把客人選的顏色、顏色名、尺寸、數量、庫存，存成一個物件（初始是 0 或 ""）
    let order = { iro: '', iroName: '', size: '', amount: 0, userStock: 0 };

    const minus = document.querySelector("#minus");
    const plus = document.querySelector("#plus");

    const count = document.querySelector("#count");

    const addToCart = document.querySelector("#addToCart");

    // 監聽減號被按
    minus.addEventListener("click", () => {
        if (count.value > 0) {
            addToCart.textContent = "加入購物車";
            count.value--;
        }
    });

    // 監聽加號被按
    plus.addEventListener("click", () => {
        addToCart.textContent = "加入購物車";
        addToCart.disabled = false;
        count.value++;
    });

    // 監聽「加入購物車」按鈕被按
    addToCart.addEventListener("click", () => {
        order.amount = count.value;

        if (order.amount <= 0) {
            // 顧客沒有選好款式及數量，不給加購物車，然後叫他選。
            addToCart.disabled = true; 
            addToCart.textContent = "請至少選擇一個";

        } else {
            addToCart.disabled = false;
            addToCart.textContent = "加入購物車";

            // 先看看 Local Storage 是否有加過同款的商品
            let alreadyExist = list.filter((goods) => {
                return goods.id === data.id;
            }).length;

            // 如果 filter 出來的陣列長度非 0，代表有重複的品項
            if (alreadyExist > 0) {
                list = JSON.parse(localStorage.getItem('list'));
                list.forEach(goods => {
                    if (goods.id === data.id) {
                        goods.qty = parseInt(goods.qty) + parseInt(order.amount);
                    }
                });
                localStorage.setItem("list", JSON.stringify(list));
            } else {
                // 沒重複的話，就在 Local Storage 新增一筆
                let newOrder = {
                    id: data.id,
                    name: data.title,
                    price: data.price,
                    qty: order.amount,
                    mainImg: data.main_image,
                };
                list.push(newOrder);
                console.log("有新一筆的List", list);
                localStorage.setItem("list", JSON.stringify(list));
            }
            order.amount = count.value = 0;
            alert('成功加入購物車!'); // eslint-disable-line no-alert
        }
        // countGoods();
    });
}