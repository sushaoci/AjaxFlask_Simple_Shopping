function get(api) {
    // 設定一個 query string 參數叫 paging
    // let params = new URLSearchParams();
    // params.set('', '');
    // Fetch
    fetch(`http://127.0.0.1:5000/${api}`)
        .then(res => {
            return res.json();
        })
        .then(json => {
            console.log(json)
            renderPD(json);
        })
        .catch(err => {
            console.log(err);
        });
}

get('test')