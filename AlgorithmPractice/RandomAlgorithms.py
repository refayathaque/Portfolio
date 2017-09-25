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

def reversearrayone(list):
    temp = 0;
    for i in range(0, len(list) / 2):
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
    return list
q = [1, 2, 3, 4, 5]
print reversearrayone(q)
print('------------09/21/17------------')

def reversearrayoneALT(list):
    temp = 0
    left = 0
    right = len(list) - 1
    while left < right:
        temp = list[left]
        list[left] = list[right]
        list[right] = temp
        left += 1
        right -= 1
    return list
w = [1, 2, 3, 4, 5]
print reversearrayoneALT(w)
print('------------09/21/17------------')

def fizzbuzz3():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
        i += 1
fizzbuzz3()
print('------------09/25/17------------')

def fizzbuzz4():
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
fizzbuzz4()
print('------------09/25/17------------')

def reverselisttwo(list):
    temp = 0
    for i in range (0, len(list) / 2):
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
    return list
e = [1, 2, 3, 4, 5, 6, 7, 8]
print reverselisttwo(e)
print('------------09/25/17------------')

def reverselisttwoALT(list):
    temp = 0
    left = 0
    right = len(list) - 1
    while left < right:
        temp = list[left]
        list[left] = list[right]
        list[right] = temp
        left += 1
        right -= 1
    return list
r = [1, 2, 3, 4, 5, 6, 7, 8]
print reverselisttwoALT(r)
print('------------09/25/17------------')
