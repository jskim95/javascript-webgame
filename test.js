let arr1 = [3, 1, 35, 22, 13, 7];
let arr2 = [3, 1, 35, 22, 13, 7];

arr1.sort(function(a, b) {
    return a - b;
})
arr2.slice().sort(function(a, b) {
    return a - b;
})
arr2.slice().splice(1, 2)
console.log(arr1); // [ 1, 3, 7, 13, 22, 35 ]
console.log(arr2); // [ 3, 1, 35, 22, 13, 7 ]