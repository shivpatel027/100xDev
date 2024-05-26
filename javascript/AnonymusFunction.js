function square(n) {
    return n*n;
}

function cube(n) {
    return n*n*n;
}

function sumOfSomething(a, b, fn) {
    let var1 = fn(a);
    let var2 = fn(b);

    return var1 + var2;
}

let ans = sumOfSomething(12, 13, function (n) {
    return n*n*n;
});
console.log(ans); 