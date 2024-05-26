function shivAsyncFunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('Hi there');
        }, 3000)
    });
    return p;
}

async function main() {
    // no callbacks, no then. syntax
    // shivAsyncFunction.then(function (value) {
    //     console.log(value);
    // })
    let value = await shivAsyncFunction();
    console.log(value);
}

console.log('Hi there1');

main();