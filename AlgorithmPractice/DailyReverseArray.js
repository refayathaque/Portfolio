// One way to do it
function reverseArray(arr) {
    var temp = 0;
    for (var left = 0, right = arr.length - 1; left < right; left++, right--) {
        temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
    }
    console.log(arr); // Outputs [5, 4, 3, 2, 1]
}
reverseArray([1, 2, 3, 4, 5]);
console.log('---------------------');

// Another way to do it
function reverseArrayALT(arr) {
    var temp = 0;
    for (var x = 0; x < (arr.length / 2); x++) {
        temp = arr[(arr.length - 1) - x];
        arr[(arr.length - 1) - x] = arr[x];
        arr[x] = temp;
    }
    console.log(arr); // Outputs [5, 4, 3, 2, 1]
}
reverseArrayALT([1, 2, 3, 4, 5]);
console.log('---------------------');

////////////////////////////////////

function reverseArray1(array) {
    var temp = 0;
    for (l = 0, r = (array.length - 1); l < r; l++, r--) {
        temp = array[r];
        array[r] = array[l];
        array[l] = temp;
    }
    return(array);
}
console.log(reverseArray1([9, 7, 5, 3])); // Outputs [3, 5, 7, 9]
// 'l < r' ensures that this works for odd length arrays as well,
// basically says that 'l !== r', so the indexes can't be same
console.log('---------------------');

function reverseArray2(array) {
    var temp = 0;
    for (var i = 0; i < (array.length / 2); i++) {
        temp = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = array[i];
        array[i] = temp;
    }
    return(array);
}
console.log(reverseArray2([1, 2, 3, 4, 5])); // Outputs [ 5, 4, 3, 2, 1 ]
// 'array[(array.length - 1) - i]' basically moving index left
// on each for loop iteration, by using incrementing i value
console.log('---------------------');

////////////////////////////////////

function reverseArray3(array) {
    var temp = 0;
    for (left = 0, right = (array.length - 1); left < right; left++, right--) {
        temp = array[right];
        array[right] = array[left];
        array[left] = temp;
    }
    return(array);
}
var q = [1, 2, 3, 4];
console.log(reverseArray3(q)); // Outputs [ 4, 3, 2, 1 ]
console.log('---------------------');

function reverseArray4(array) {
    var temp = 0;
    for (var i = 0; i < (array.length / 2); i++) {
        temp = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = array[i];
        array[i] = temp;
    }
    return(array);
}
var w = [9, 8, 7, 6, 5];
console.log(reverseArray4(w)); // Outputs [ 5, 6, 7, 8, 9 ]
console.log('---------------------');

////////////////////////////////////

function reverseArray5(arr) {
    var temp = 0;
    for (l = 0, r = (arr.length - 1); l < r; l++, r--) {
        temp = arr[r];
        arr[r] = arr[l];
        arr[l] = temp;
    }
    return(arr);
}
var e = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(reverseArray5(e));
console.log('---------------------');

function reverseArray6(arr) {
    var temp = 0;
    for (i = 0; i < (arr.length / 2); i++) {
        temp = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = arr[i];
        arr[i] = temp;
    }
    return(arr);
}
var r = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(reverseArray6(r));
console.log('---------------------');

////////////////////////////////////

function reverseArray7(array) {
    var temp = 0;
    for (left = 0, right = (array.length - 1); left < right; left++, right--) {
        temp = array[right]
        array[right] = array[left]
        array[left] = temp;
    }
    return(array);
}
var t = [10, 20, 30, 40]
console.log(reverseArray7(t));
console.log('---------------------');

function reverseArray8(arr) {
    var temp = 0;
    for (i = 0; i < (arr.length / 2); i++) {
        temp = arr[(arr.length - 1) - i]
        arr[(arr.length - 1) - i] = arr[i]
        arr[i] = temp
    }
    return(arr);
}
var y = [1, 2, 3, 4, 5, 6, 7]
console.log(reverseArray8(y));
console.log('---------------------');

////////////////////////////////////

function reverseArray9(array) {
    var temp = 0;
    for (l = 0, r = array.length - 1; l < r; l++, r--) {
        temp = array[l];
        array[l] = array[r];
        array[r] = temp;
    }
    return(array);
}
var u = [3, 6, 9, 12]
console.log(reverseArray9(u));
console.log('---------------------');

function reverseArray10(array) {
    var temp = 0;
    for (i = array.length - 1; i >= (array.length / 2); i--) {
        temp = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = array[i]
        array[i] = temp;
    }
    return(array);
}
var i = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(reverseArray10(i));
console.log('---------------------');

////////////////////////////////////

function reverseArray11(arr) {
    var temp = 0;
    for (left = 0, right = (arr.length - 1); left < right; left++, right--) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return(arr);
}
var o = [9, 7, 5, 3, 1];
console.log(reverseArray11(o));
console.log('---------------------');

function reverseArray12(array) {
    var temp = 0;
    for (i = 0; i < (array.length / 2); i++) {
        temp = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = array[i];
        array[i] = temp;
    }
    return array;
}
var p = [1, 2, 3, 4, 5, 6];
console.log(reverseArray12(p));
console.log('---------------------');

////////////////////////////////////

function reverseArray13(array) {
    var temp = 0;
    for (left = 0, right = (array.length - 1); left < right; left++, right--) {
        temp = array[right];
        array[right] = array[left];
        array[left] = temp;
    }
    return array;
}
var a = [1, 3, 5, 7, 9];
console.log(reverseArray13(a));
console.log('---------------------');

function reverseArray14(arr) {
    var temp = 0;
    for (i = 0; i < (arr.length / 2); i++) {
        temp = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
var s = [1, 3, 5, 7, 9];
console.log(reverseArray14(s));
console.log('---------------------');

////////////////////////////////////

function reverseArray15(array) {
    let temp = 0;
    for (left = 0, right = (array.length - 1); left < right; left++, right--) {
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array;
}
d = [9, 8, 7, 6]
console.log(reverseArray15(d));
console.log('---------------------');

function reverseArray16(array) {
    let temp = 0;
    for (i = 0; i < (array.length / 2); i++) {
        temp = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(arr.length - 1) - i] = temp;
    }
    return array;
}
e = [9, 8, 7, 6]
console.log(reverseArray15(e));
console.log('---------------------');

////////////////////////////////////

function reverseArray17(array) {
    let temp = 0;
    for (left = 0, right = (array.length - 1); left < right; left++, right--) {
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array;
}
b = [1, 3, 5, 7]
console.log(reverseArray17(b));
console.log('---------------------');

function reverseArray18(array) {
    let temp = 0;
    for (i = 0; i < (array.length / 2); i++) {
        temp = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = temp;
    }
    return array;
}
l = [1, 3, 5, 7]
console.log(reverseArray18(l));
console.log('---------------------');

////////////////////////////////////

function reverseArray18(arr) {
    let temp = 0;
    for (left = 0, right = arr.length - 1; left < right; left++, right--) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr
}
console.log(reverseArray18([7, 8, 9, 10]));
console.log('---------------------');

function reverseArray19(arr) {
    let temp = 0;
    for (i = 0; i < (arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = temp;
    }
    return arr;
}
console.log(reverseArray19([10, 9, 8, 7]));
console.log('---------------------');

////////////////////////////////////

function reverseArray20(arr) {
    let temp = 0;
    for (left = 0, right = (arr.length - 1); left < right; left++, right--) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr;
}
z = [1, 2, 3, 4, 5, 6]
console.log(reverseArray20(z));
console.log('---------------------');

function reverseArray21(arr) {
    let temp = 0;
    for (i = 0; i < (arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = temp;
    }
    return arr;
}
x = [1, 2, 3, 4, 5, 6]
console.log(reverseArray21(x));
console.log('---------------------');

////////////////////////////////////

function reverseArray22(array) {
    let temp = 0;
    for (left = 0, right = (array.length - 1); left < right; left++, right--) {
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array;
}
c = [2, 4, 6, 8]
console.log(reverseArray22(c));
console.log('---------------------');

function reverseArray23(array) {
    let temp = 0;
    for (i = 0; i < (array.length / 2); i++) {
        temp = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = temp;
    }
    return array;
}
v = [1, 3, 5, 7]
console.log(reverseArray23(v));
console.log('---------------------');

////////////////////////////////////

function reverseArray24(array) {
    let temp = 0;
    for (left = 0, right = (array.length - 1); left < right; left++, right--) {
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array;
}
b = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(reverseArray24(b));
console.log('---------09/27/17------------');

function reverseArray25(array) {
    let temp = 0;
    for (i = 0; i < (array.length / 2); i++) {
        temp = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = temp;
    }
    return array;
}
n = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(reverseArray25(n));
console.log('---------09/27/17------------');

////////////////////////////////////

function reverseArray26(array) {
    let temp = 0;
    for (left = 0, right = (array.length - 1); left < right; left++, right--) {
        temp = array[left]
        array[left] = array[right]
        array[right] = temp
    }
    return array
}
m = [9, 7, 5, 3]
console.log(reverseArray26(m));
console.log('---------09/28/17------------');

function reverseArray27(array) {
    let temp = 0;
    for (i = 0; i < (array.length / 2); i++) {
        temp = array[i]
        array[i] = array[(array.length - 1) - i]
        array[(array.length - 1) - i] = temp
    }
    return array
}
qw = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(reverseArray27(qw));
console.log('---------09/28/17------------');

////////////////////////////////////

function reverseArray28(array) {
    let temp = 0;
    for (left = 0, right = (array.length - 1); left < right; left++, right--) {
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array;
}
er = [9, 8, 7, 6]
console.log(reverseArray28(er));
console.log('---------10/02/17------------');

function reverseArray29(array) {
    let temp = 0;
    for (i = 0; i < (array.length / 2); i++) {
        temp = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = temp;
    }
    return array
}
ty = [6, 5, 4, 3]
console.log(reverseArray29(ty));
console.log('---------10/02/17------------');

////////////////////////////////////

function reverseArray30(arr) {
    let temp = 0;
    for (left = 0, right = (arr.length - 1); left < right; left++, right--) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr
}
console.log(reverseArray30(ty));
console.log('---------10/03/17------------');

function reverseArray31(arr) {
    let temp = 0;
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[(arr.length - 1)- i];
        arr[(arr.length - 1)- i] = temp;
    }
    return arr
}
console.log(reverseArray30(ty));
console.log('---------10/03/17------------');

////////////////////////////////////

function reverseArray32(arr) {
    let temp = 0
    for (left = 0, right = arr.length - 1; left < right; left++, right--) {
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }
    return arr
}
ui = [4, 5, 6, 7]
console.log(reverseArray32(ui));
console.log('---------10/04/17------------');

function reverseArray33(arr) {
    let temp = 0
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i]
        arr[i] = arr[(arr.length - 1) - i]
        arr[(arr.length - 1) - i] = temp
    }
    return arr
}
console.log(reverseArray33(ui));
console.log('---------10/04/17------------');

////////////////////////////////////
// Some Lambda function experimentation

// ES5 way *.map does NOT mutate the array

let fat_arrow_arr = [1, 2, 3, 4, 5]

console.log(fat_arrow_arr.map(
    function(element) {
        return element + 1
    }
));

// ES6 way ('fat arrow', return is implied) *.map does NOT mutate the array

console.log(fat_arrow_arr.map(element => element + 1));

////////////////////////////////////

function reversearray34(array) {
    let temp = 0
    for (i = 0; i < array.length / 2; i++) {
        temp = array[i]
        array[i] = array[(array.length - 1) - i]
        array[(array.length - 1) - i] = temp
    }
    return array
}
op = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(reversearray34(op));
console.log('---------10/05/17------------');

function reversearray34ALT(array) {
    let temp = 0
    for (left = 0, right = array.length - 1; left < right; left++, right--) {
        temp = array[left]
        array[left] = array[right]
        array[right] = temp
    }
    return array
}
console.log(reversearray34ALT(op));
console.log('---------10/05/17------------');

////////////////////////////////////

function reversearray35(arr) {
    let temp = 0;
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i]
        arr[i] = arr[(arr.length - 1) - i]
        arr[(arr.length - 1) - i] = temp
    }
    return arr
}
as = [2, 4, 6, 8]
console.log(reversearray35(as));
console.log('---------10/07/17------------');

function reversearray35ALT(arr) {
    let temp = 0;
    for (left = 0, right = arr.length - 1; left < right; left++, right--) {
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }
    return arr
}
console.log(reversearray35ALT(as));
console.log('---------10/07/17------------');

////////////////////////////////////

function reversearray36(arr) {
    let temp = 0;
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i]
        arr[i] = arr[(arr.length - 1) - i]
        arr[(arr.length - 1) - i] = temp
    }
    return arr
}
df = [12, 13, 14, 15]
console.log(reversearray36(df));
console.log('---------10/09/17------------');

function reversearray36ALT(arr) {
    let temp = 0;
    for (left = 0, right = arr.length - 1; left < right; left++, right--) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr
}
console.log(reversearray36ALT(df));
console.log('---------10/09/17------------');

////////////////////////////////////

// Returning after a while, no matter what I'm working on I must do these Algorithms on a daily basis!
// Implementing ES6 'Fat Arrow' below

const reversearray37 = (arr) => {
    let temp = 0;
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = temp
    }
    return arr
}
gh = [2, 4, 6, 8]
console.log(reversearray37(gh));
console.log('---------10/15/17------------');

const reversearray37ALT = (array) => {
    let temp = 0;
    for (left = 0, right = array.length - 1; left < right; left++, right--) {
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array
}
console.log(reversearray37ALT(gh));
console.log('---------10/15/17------------');

// Have something with .map (basically iterates over an array and runs functions on each element) https://codeplanet.io/es6-fat-arrow-functions/

let jk = [1, 2, 3, 4, 5]

const squareElementInArr = (arr) => arr.map(element => element * element)
console.log(squareElementInArr(jk));
console.log('---------10/16/17------------');

////////////////////////////////////

const reverseArr38 = (arr) => {
    let temp = 0
    for (left = 0, right = arr.length - 1; left < right; left++, right--) {
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }
    return arr
}
let lz = [12, 13, 14, 15, 16]
console.log(reverseArr38(lz));
console.log('---------10/16/17------------');

const reverseArr38ALT = (arr) => {
    let temp = 0
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i]
        arr[i] = arr[(arr.length - 1) - i]
        arr[(arr.length - 1) - i] = temp
    }
    return arr
}
console.log(reverseArr38ALT(lz));
console.log('---------10/16/17------------');

const squareElementInArr1 = (arr) => arr.map(element => element * element)
console.log(squareElementInArr1(lz));
console.log('---------10/16/17------------');
