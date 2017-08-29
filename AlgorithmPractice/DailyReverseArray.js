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
