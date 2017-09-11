// Coding Dojo's Basic 13 Algorithm Challenges

// 1. Print 1 - 255

function print1To255One() {
    var number = 1;
    while (number < 256) {
        console.log(number);
        number += 1;
    }
}
print1To255One()

console.log('=======================');

function print1To255Two() {
    for (i = 1; i < 256; i++) {
        console.log(i);
    }
}
print1To255Two()

console.log('=======================');

// 2. Print Ints and Sum 0 - 255

function print0To255SumOne() {
    var sum = 0;
    for (i = 0; i < 256; i++) {
        console.log('Number : ', i, ' and Sum : ', sum += i); // Updates var sum even within console.log
    }
}
print0To255SumOne()

console.log('=======================');

// 3. Print the largest element in a given array

function printLargestElemInArr(arr) {
    var lrg = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > lrg) { // Switch sign if looking for smallest element
            lrg = arr[i];
        }
    }
    return lrg;
}
console.log(printLargestElemInArr([-5, -2, -3]));

console.log('=======================');
