//NOTES FROM PREWORK ALGORITHM CHALLENGES

//Function printing strings based on conditional
function greetSomeone(person){
  var person1 = person.toLowerCase();
  if (person1 == "refayat")
  {
    console.log("Hey there Refayat!");
  }
  else
  {
    console.log("Hey there other guy!");
  }
}
greetSomeone("Refayat") //Hey there Refayat!
greetSomeone("refayat") //Hey there Refayat!
greetSomeone("George") //Hey there other guy!

console.log('----');

//Function printing string passed in
function printMyName(name){
  console.log(name);
}
printMyName('Refayat'); //Refayat

var othername = printMyName('Harry'); //Harry
console.log(othername); //Undefined..not sure why
//Bc function call can't be assigned to var?

console.log('----');

//Most difficult Algorithm Challenge
var array = [5, 3, 4, 1];
for(var x = 0; x < array.length; x++) //for(var x=0; x<4; x++)
{
  for(var y = array.length-1; y >= x; y--) //for(var y=3; y>=x; y--)
  {
    if(array[x] > array[y])
    {
      var temp = array[y]; //MUTATES THE CALLER! Modifies 'var array'
      array[y] = array[x];
      array[x] = temp;
    }
  }
}
console.log(array) //[1, 3, 4, 5]

console.log('----');

//Function CONCATENATING integers
var number = ''; //Empty STRING
var x = 5;
while (x < 10)
{
  number += x; //String CONCATENATION
  x++;
}
console.log(number); //STRING '56789'

console.log('----');

//Function to get sum of even numbers from 1 to 1000
function get_even_numbers() {
  var sum = 0;
  for(var i = 1; i <= 1000; i++) { //or 'i < 1001'
    if(i % 2 == 0) { //for odd 'i % 2 != 0'
      sum += i; //Same as sum = sum + i
    }
  }
  console.log(sum); //250500
}
get_even_numbers();

console.log('----');

//Function to get sum of even numbers in a given array
function array_EvenSum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) { //Iterates with indexing
    if(arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  console.log(sum); //12
}
array_EvenSum([1, 2, 3, 4, 5, 6]);

console.log('----');

//Function to get sum of elements in a given array
function array_SumElements(arr) {
  var sum = '';
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]; //Integer converts to String and is CONCATENATED
  }
  console.log(sum); //Hello1Goodbye2
}
array_SumElements(['Hello', 1, 'Goodbye', 2]);

console.log('----');

//Function to get highest number in a given array
function arr_Max(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(max < arr[i]) { //Can't compare w previous element
      max = arr[i]; //Updates (reassigns) var max
    }
  }
  console.log(max); //8
}
arr_Max([1, 4, 3, 2, 8, 6, -3]);

console.log('----');

//Function to get highest number in a given array with JS methods

function findMax(arr) {
  arr.sort(function(a, b){return a - b}); //MUTATES THE CALLER! Modifies arr
  console.log(arr.pop()); //8, pop method returns arrary's last element
}
findMax([1, 4, 3, 2, 8, 6, -3]);

console.log('----');

/* (https://www.codecademy.com/blog/78) 'a semicolon after the round
backets of an if, for, while, or switch statment is a bad idea'.

var x = 5
var y = 5
if (x === y); {alert("hi")}

Code above will alert "hi", NOT BC x === y, but bc of the semicolon. The ;
makes JS think that you have an EMPTY STATEMENT there, so everything to
the right of the ; becomes INDEPENDENT of the 'if' conditional. */

//Function to get the average of elements in a given array
function findAvg(arr) {
  var sum = 0;
  for(x = 0; x < arr.length; x++) {
    sum += arr[x]
  }
  console.log(sum/arr.length) //2.5
}
findAvg([1, 2, 3, 4])

console.log('----');

//Function to get an array of odd numbers in a given array
function arrOdd(arr) {
  oddarr = [];
  for(var x = 0; x < arr.length; x++) {
    if(arr[x] % 2 != 0) {
      oddarr.push(arr[x]);
    }
  }
  console.log(oddarr); //[1, 3, 5, 7]
}
arrOdd([1, 2, 3, 4, 5, 6, 7, 8])
// Without passing in an array...
function oddArr() {
  arr = [];
  for(x = 1; x <= 8; x++) {
    if(x % 2 != 0) {
      arr.push(x);
    }
  }
  console.log(arr); //[1, 3, 5, 7]
}
oddArr();

console.log('----');

//Function to get elements in a given array greater than a passed value.
function greaterThan(arr, y) {
  var greaterarr = [];
  for(var x = 0; x < arr.length; x++) {
    if(arr[x] > y) {
      greaterarr.push(arr[x]);
    }
  }
  console.log(greaterarr); //[8, 5]
}
greaterThan([1, 2, 8, 3, 5], 4)
//Without printing in array form...
function greaterthanValue(arr, y) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > y) {
      console.log(arr[i]); //8, 5
    }
  }
}
greaterthanValue([1, 2, 8, 3, 5], 4)

console.log('----');

//Function to get count of elements in a given array less than a passed value.
function freqLessThan(arr, y) {
  var freq = 0;
  for(var x = 0; x < arr.length; x++) {
    if(arr[x] < y) {
      freq++; //Useful for keeping count
    }
  }
  console.log(freq); //3
}
freqLessThan([4, 8, 3, 2, 5], 5)

console.log('----');

//Function to get squared values of elements in a given array
function squared(arr) {
  var squaredarr = [];
  for(var x = 0; x < arr.length; x++) {
    squaredarr.push(arr[x] * arr[x]);
  }
  console.log(squaredarr); //[4, 9, 16, 25]
}
squared([2, 3, 4, 5]);
//Without printing in array form...
function squaredelements(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(Math.pow(arr[i], 2)); //[4, 9, 16, 25]
  } //JS base-exponent method above...
}
squaredelements([2, 3, 4, 5]);
//Without printing a new array, modifying original
function square(arr) {
  for(var x = 0; x < arr.length; x++) {
    arr[x] = arr[x] * arr[x];
  }
  console.log(arr); //[4, 9, 16, 25]
}
square([2, 3, 4, 5]);

console.log('----');

//Function that replaces negative integers in a given array with 'neg'
function negToneg(arr) {
  for(var x = 0; x < arr.length; x++) {
    if(arr[x] < 0) {
      arr[x] = 'neg';
    }
  }
  console.log(arr); //[1, 'neg', 3, 'neg']
}
negToneg([1, -2, 3, -4]);

console.log('----');

//Function that gets the maximum, minimum, and average of a given array
function maxminavg(arr) {
  var sum = 0;
  var min = arr[0];
  var max = arr[0];
  for(x = 0; x < arr.length; x++) {
    sum += arr[x];
    if(min > arr[x]) {
      min = arr[x];
    }
    if(max < arr[x]) {
      max = arr[x];
    }
  }
  console.log([max, min, sum/arr.length]); //[5, 2, 3.5]
}
maxminavg([2, 3, 4, 5])

console.log('----');

//Function that swaps the first and last values of a given array
function swap(arr) {
  var temp = arr[0];
  arr[0] = arr[arr.length - 1]
  arr[arr.length - 1] = temp
  console.log(arr); //[5, 3, 4, 2]
}
swap([2, 3, 4, 5])

console.log('----');

//Function that replaces negative integers in a given array with zeros
function negForzero(arr) {
  for(i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr); //[0, 3, 4, 0]
}
negForzero([-2, 3, 4, -5])

console.log('----');

//Function that goes through a range and gets the sum of all odd numbers
function sumOdd() {
  var sum = 0;
  for(x = 0; x <= 5; x++) {
    if(x % 2 != 0) {
      sum += x;
    }
  }
  console.log(sum); //9
}
sumOdd();

console.log('----');

/*Example of 'break' in the LAST LINE of a for loop block. 'Break' exits out
of the for loop. It won't execute any more iterations when inside a for loop
block. Only code preceeding the 'break' in the first iteration will be
executed.*/
for(var x = 17; x > 7; x--)
{
  console.log(x); //Outputs 17
  break;
}

console.log('----');

//Function that moves all values left by one index and replaces last value with
//0 in a given array
function shiftArrayValsLeft(arr) {
  for(var x = 0; x < arr.length; x++) {
    arr[x] = arr[x + 1];
      if(x === arr.length - 1) {
        arr[x] = 0;
      }
  }
  console.log(arr); //Outputs [4, 6, 8, 0]
}
shiftArrayValsLeft([2, 4, 6, 8]);

console.log('----');

//Function that reverses a given array
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

console.log('----');

//Another way to reverse a given array
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

console.log('----');

//Poor Kenny on page 25
function poorkenny() {
  var day = 0;
  var string = "Kenny dies by ";
  day = Math.trunc(Math.random()*100); //JS 'Math' library,
    if (day <= 9) {
      console.log(string + 'volcano') }
    else if (day >= 10 && day <= 24) {
      console.log(string + 'tsunami') }
    else if (day >= 25 && day <= 44) {
      console.log(string + 'earthquake') }
    else if (day >= 45 && day <= 70) {
      console.log(string + 'blizzard') }
    else {
      console.log(string + 'meteor') }
  console.log(day);
}
poorkenny();

console.log('----');

//Pushing in a value to a given array from the front
function pushFront(arr, val) {
  for(var i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  console.log(arr); //Outputs [4, 1, 2, 3]
}
pushFront([1, 2, 3], 4);
