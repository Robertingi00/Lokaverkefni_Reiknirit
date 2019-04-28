def countingSort(arr, exp1): 
  
    n = len(arr) 
    output = [0] * (n) 
    count = [0] * (max(arr)) 
  
    for i in range(0, n): 
        index = (arr[i]/exp1)
        count[ int((index)%10) ] += 1

    print(count)
   
    for i in range(1,len(count)): 
        count[i] += count[i-1] 
  
    i = n-1
    while i>=0: 
        index = (arr[i]/exp1) 
        output[ count[ int((index)%10) ] - 1] = arr[i] 
        count[ int((index)%10) ] -= 1
        i -= 1
  
    i = 0
    for i in range(0,len(arr)): 
        arr[i] = output[i] 
  

def radixSort(arr):
    
    max1 = max(arr)
    exp = 1
    while max1/exp > 0: 
        countingSort(arr,exp) 
        exp *= 10

arr = [ 170, 45, 75] 
radixSort(arr) 
  
for i in range(len(arr)): 
    print(arr[i]), 
  
# This code is contributed by Mohit Kumra 
