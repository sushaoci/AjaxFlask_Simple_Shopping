const container = document.getElementById('container');

const username = document.getElementById('username');
const password = document.getElementById('password');
const register = document.getElementById('register');
const login = document.getElementById('login');
// const cartList = document.getElementById("cartList");

// const fragment = document.createDocumentFragment();
// const cartItem = document.createElement('div');
register.addEventListener('click', registerHandler);

function registerHandler(e){
    if(username.value!=''&&password.value!=''){
        console.log("yes")
    }else{
        const fragment = document.createDocumentFragment();
        const warning = document.createElement('p');
        warning.textContent="请将信息填写完整哦😯"
        fragment.appendChild(warning);
        container.appendChild(fragment)
    }
}