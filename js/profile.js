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