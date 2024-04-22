// this is a function declaration.
function myFunction(x, y) {
    return x*y;
}
const num = myFunction(20, 4);
console.log(num);


// this is a callback functions.
function showCallFunc(fn) {
    const value = 10;
    fn(value)
}
showCallFunc(function (value) {
    console.log(value);
});