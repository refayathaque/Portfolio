// One way to do it
function reverseArray(arr) {
  var temp = 0;
  for(var left = 0, right = arr.length - 1; left < right; left++, right--) {
    temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
  }
  console.log(arr); //Outputs [5, 4, 3, 2, 1]
}
reverseArray([1, 2, 3, 4, 5]);
console.log('---------------------')

//Another way to do it
function reverseArray2(arr) {
  var temp = 0;
  for(var x = 0; x < (arr.length / 2); x++) {
    temp = arr[(arr.length - 1) - x];
    arr[(arr.length - 1) - x] = arr[x];
    arr[x] = temp;
  }
  console.log(arr); //Outputs [5, 4, 3, 2, 1]
}
reverseArray2([1, 2, 3, 4, 5]);
console.log('---------------------')
