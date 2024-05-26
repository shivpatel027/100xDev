var d = new Promise( function (resolve) {
    resolve("Shiv  ");
})

function callback() {
    console.log(d);
}

d.then(callback);