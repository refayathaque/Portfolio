// FizzBuzz
function fizzbuzz() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        }
        else {
            console.log(i);
        }
    }
}
fizzbuzz();
console.log('---------------------')

// FizzBuzz again
function fizzbuzz2() {
    for (i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        }
        else {
            console.log(i);
        }
    }
}
fizzbuzz2();
console.log('---------------------')

// FizzBuzz once more
function fizzbuzz3() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        }
        else {
            console.log(i);
        }
    }
}
fizzbuzz3();
console.log('---------------------')
