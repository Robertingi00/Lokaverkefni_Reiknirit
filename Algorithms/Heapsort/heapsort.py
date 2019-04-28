
def heapify(arr, n, i):
    largest = i 
    l = 2 * i + 1
    r = 2 * i + 2
    if l < n and arr[i] < arr[l]: 
        largest = l 
        

    if r < n and arr[largest] < arr[r]: 
        largest = r 

    if largest != i:
        temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp
        
        heapify(arr, n, largest)


def heapSort(arr):

    n = len(arr)

    for i in range(n, -1, -1):
        heapify(arr, n, i)

    print("-----")
    
    for i in range(n-1, 0, -1):
        print(i)
        temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        heapify(arr, i, 0)


arr = [ 12, 11, 13, 5, 6, 7] 
heapSort(arr) 
print(arr)
