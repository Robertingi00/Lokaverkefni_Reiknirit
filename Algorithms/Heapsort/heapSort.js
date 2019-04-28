

function heapify(arr, n, i){
    let largest = i 
    let l = 2 * i + 1
    let r = 2 * i + 2

    if(l < n & arr[i] < arr[l]){ 
        largest = l 
    }

    if(r < n & arr[largest] < arr[r]){ 
        largest = r 
    }

    if(largest != i){
        temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp
        
        heapify(arr, n, largest)
    }
}

function heapSort(arr){

    n = arr.length;

    for(i = n; i > -1; i--){
        heapify(arr, n, i)
    }

    
    for(i = n-1; i > 0; i--){
        temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        heapify(arr, i, 0)
    }
}

arr = [ 12, 11, 13, 5, 6, 7] 
heapSort(arr) 
print(arr)
