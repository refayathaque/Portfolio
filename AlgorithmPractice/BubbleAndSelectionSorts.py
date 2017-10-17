def bubbleSortAsc(list):
    if len(list) == 0:
        return 'Empty list'
    if len(list) == 1:
        return list
    unsorted_flag = True
    while unsorted_flag == True:
        l = len(list) - 1
        count = 0
        for i in range(l):
            if list[i] > list[i + 1]:
                temp = list[i + 1]
                list[i + 1] = list[i]
                list[i] = temp
            else:
                count += 1
        if count == l:
            unsorted_flag = False
    return list
list_a = [8, 1, 5, 3, 4, 7, 2, 6]
print bubbleSortAsc(list_a)

# Sorting RECURSIVELY
def bubbleSortAscRec(list):
    if len(list) == 0:
        return 'Empty list'
    if len(list) == 1:
        return list
    unsorted_flag = True
    l = len(list) - 1
    for i in range(l):
        if list[i] > list[i + 1]:
            temp = list[i + 1]
            list[i + 1] = list[i]
            list[i] = temp
            unsorted_flag = False
    if unsorted_flag == False:
        bubbleSortAscRec(list)
    return list
list_b = [14, 10, 17, 16, 11, 15, 12, 13]
print bubbleSortAscRec(list_b)

def selectionSortAsc(list):
    if len(list) == 0:
        return 'Empty list'
    if len(list) == 1:
        return list
    l = len(list)
    for i in range(l):
        for y in range(i + 1, l):
            if list[y] < list[i]:
                temp = list[y]
                list[y] = list[i]
                list[i] = temp
    return list
list_c = [111, 999, 222, 888, 333, 777, 444]
print selectionSortAsc(list_c)
