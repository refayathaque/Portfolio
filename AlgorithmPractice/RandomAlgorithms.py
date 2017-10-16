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

def fizzbuzz5():
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
fizzbuzz5()
print('------------09/27/17------------')

def reverselistthree(list):
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
t = [1, 2, 3, 4, 5, 6]
print reverselistthree(t)
print('------------09/27/17------------')

def reverselistthreeALT(list):
    temp = 0
    i = 0
    while i < (len(list) / 2):
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
        i += 1
    return list
u = [1, 2, 3, 4, 5, 6]
print reverselistthreeALT(u)
print('------------09/27/17------------')

def fizzbuzz6():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print 'Fizzbuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
fizzbuzz6()
print('------------09/28/17------------')

def reverselistfour(list):
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
i = [2, 4, 6, 8]
print reverselistfour(i)
print('------------09/28/17------------')

def reverselistfourALT(list):
    temp = 0
    i = 0
    while i < (len(list) / 2):
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
        i += 1
    return list
o = [3, 5, 7, 9]
print reverselistfourALT(o)
print('------------09/28/17------------')

def fizzbuzz7():
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
fizzbuzz7()
print('------------10/02/17------------')

def reverselistfive(list):
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
p = [1, 2, 3, 4]
print reverselistfive(p)
print('------------10/02/17------------')

def reverselistfiveALT(list):
    temp = 0
    i = 0
    while i < len(list) / 2:
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
        i += 1
    return list
a = [1, 2, 3, 4]
print reverselistfiveALT(a)
print('------------10/02/17------------')

def fizzbuzz8():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
fizzbuzz8()
print('------------10/03/17------------')

def reverselistsix(list):
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
s = [21, 32, 1, 5]
print reverselistsix(s) # Mutates list, this is passed into method below and what we will see returned is [21, 32, 1, 5]
print('------------10/03/17------------')

def reverselistsixALT(list):
    temp = 0
    i = 0
    while i < len(list) / 2:
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
        i += 1
    return list
print reverselistsixALT(s)
print('------------10/03/17------------')

def fizzbuzz9():
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
fizzbuzz9()
print('------------10/04/17------------')

def reverselistseven(list):
    temp = 0
    left = 0
    right = len(list) - 1
    while left < right:
        temp = list[left]
        list[left] = list[right]
        list[right] = temp
        left += 1
        right -=1
    return list
d = [9, 7, 5, 3]
print(reverselistseven(d))
print('------------10/04/17------------')

def reverselistsevenALT(list):
    temp = 0
    i = 0
    while i < len(list) / 2:
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
        i += 1
    return list
f = [1, 2, 3, 4]
print(reverselistsevenALT(f))
print('------------10/04/17------------')

#/////////////////////////////
# Some Lambda function experimentation

lambda_func = lambda x : x*x

print lambda_func(9), 'lambda experimentation'

#/////////////////////////////

def fizzbuzz10():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
fizzbuzz10()
print('------------10/05/17------------')

def reverselisteight(list):
    temp = 0
    i = 0
    while i < len(list) / 2:
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
        i += 1
    return list
g = [12, 13, 14, 15]
print(reverselisteight(g))
print('------------10/05/17------------')

def reverselisteightALT(list):
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
print(reverselisteightALT(g))
print('------------10/05/17------------')

#/////////////////////////////

def fizzbuzz11():
    for i in range(100, 0, -1): # DECREMENTING for loop
        if i % 3 == 0 and i % 5 == 0:
            print 'Fizzbuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
fizzbuzz11()
print('------------10/07/17------------')

def reverselistnine(list):
    temp = 0
    i = 0
    while i < len(list) / 2:
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
        i += 1
    return list
h = [3, 5, 7, 9]
print(reverselistnine(h))
print('------------10/07/17------------')

def reverselistnineALT(list):
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
print(reverselistnineALT(h))
print('------------10/07/17------------')

#/////////////////////////////

def fizzbuzz12():
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
fizzbuzz12();
print('------------10/09/17------------')

def reverselistten(list):
    temp = 0
    i = 0
    while i < len(list) - 1:
        temp = list[i]
        list[i] = list[(len(list) - 1) - i]
        list[(len(list) - 1) - i] = temp
        i += 1
    return list
j = [12, 13, 14, 15, 16]
print reverselistten(j)
print('------------10/09/17------------')

def reverselisttenALT(list):
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
print reverselisttenALT(j)
print('------------10/09/17------------')

#/////////////////////////////

def newListInReverse(list):
    newlist = []
    for i in range(0, len(list) - 1):
        newlist.append(list[-i - 1]) # Negative indexes can be used to access elements at the end of the list, the last element has key of -1
    return newlist

mm = [3, 1, 4, 1, 5, 9, 2, 6]
print(newListInReverse(mm))
print('------------10/12/17------------')

#/////////////////////////////

def fizzbuzz13():
    i = 100
    while i > 0:
        if i % 3 == 0 and i % 5 == 0:
            print 'FizzBuzz'
        elif i % 3 == 0:
            print 'Fizz'
        elif i % 5 == 0:
            print 'Buzz'
        else:
            print i
        i -= 1
fizzbuzz13()
print('------------10/16/17------------')
