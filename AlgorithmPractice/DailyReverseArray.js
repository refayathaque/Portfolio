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
