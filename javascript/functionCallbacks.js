// Passing function as a argument.

function calculator(a, b, arithmaticFinalFunction) {
    const ans = arithmaticFinalFunction(a, b);
    return ans;
}

function sum(a, b) {
    return a + b;
}

const value= calculator(1, 3, sum);
console.log(value);