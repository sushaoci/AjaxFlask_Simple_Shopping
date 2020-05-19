function get(api) {
    fetch(`http://127.0.0.1:5000/${api}`)
        .then(res => {
            return res.json();
        })
        .then(json => {
            // console.log(json)
            renderPD(json);
        })
        .catch(err => {
            console.log(err);
        });
}

get('main')