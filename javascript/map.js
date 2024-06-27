// map, filter, arrow fns

//given an array, give me back a new array in which every  value is multiplied by 2

const input = [1,2,3,4,5];

function transform(i) {
    return i*2;
}

const ans = input.map(transform);
console.log(ans);

const ans1 = input.map(function (i) {
    return i * 2;
});
console.log(ans);

// create a map function that takes 2 inputes an array, and a transformation callback/fn
// and transforms the ino new using the transform function

