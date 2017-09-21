def fizzbuzz1():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
fizzbuzz1()
print('------------09/21/17------------')


def fizzbuzz2():
    i = 1
    while i < 101:
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
        i += 1
fizzbuzz2()
print('------------09/21/17------------')
