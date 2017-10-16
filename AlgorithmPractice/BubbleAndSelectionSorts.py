def bubbleSortASC(list):
    if len(list) == 0:
        return 'Empty list'
    if len(list) == 1:
        return list
    unsorted_flag = True
    while unsorted_flag == True:
        count = 0
        for i in range (len(list) - 1):
            if list[i] > list[i + 1]:
                temp = list[i + 1]
                list[i + 1] = list[i]
                list[i] = temp
            else:
                count += 1
        if count == len(list) - 1:
            unsorted_flag = False
    return list
list_a = [8, 1, 5, 3, 4, 7, 2, 6]
print bubbleSortASC(list_a)
