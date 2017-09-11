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
    if (arr.length === 0) {
        return 'Array is empty';
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > lrg) { // Switch sign if looking for smallest element
            lrg = arr[i];
        }
    }
    return lrg;
}
console.log(printLargestElemInArr([1, 2, 3, -4]));

console.log('=======================');

// 4. Print Odds 1-255

function printOdds1To255() {
    for (i = 1; i < 256; i += 2) {
        console.log(i);
    }
}
printOdds1To255()

console.log('=======================');

// 5. Array with Odds

function arrayWithOdds1To255() {
    var array = [];
    for (i = 1; i < 256; i += 2) {
        array.push(i);
    }
    return array;
}
console.log(arrayWithOdds1To255());

console.log('=======================');

// 6. Get and Print Average

function arrayAverage(arr) {
    if (arr.length === 0) {
        return 'Array is empty'
    }
    var sum = arr[0];
    for (i = 1; i < arr.length; i++) {
        sum += arr[i]
    }
    return (sum / arr.length);
}
console.log(arrayAverage([5, 5, 5]));

console.log('=======================');

// 7. Greater than Y

function greaterThanY(arr, y) {
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    return count;
}
q = [1, 2, 3, 4, 5]
console.log(greaterThanY(q, 1));

console.log('=======================');
