def countingSort(arr):

    sort = [0]*len(arr)
    count = [0]*max(arr)

    for i in range(len(arr)):
        count[(arr[i])-1] += 1

    for i in range(len(count)-1):
        count[i+1] += count[i]

    for i in range(len(arr)):
        sort[count[arr[i]-1]-1] = arr[i]
        count[arr[i]-1] -= 1

    

    return sort
    
listi = [ 12, 34, 54, 2, 3] 

print(countingSort(listi))


