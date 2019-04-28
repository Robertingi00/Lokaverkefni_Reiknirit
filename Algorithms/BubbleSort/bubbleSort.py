def bubbleSort(list):
    swap = False
    for a in range(len(list) -1):
        if list[a] > list[a+1]:
            swap = True
            list[a], list[a+1] = list[a+1], list[a]

    if not swap:
        return list

    return bubbleSort(list)
