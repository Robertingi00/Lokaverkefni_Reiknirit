function countingSort(arr){
  (sort = []).length = arr.length;
  sort.fill(0);

  (count = []).length = Math.max(...arr);
  count.fill(0);

  for(let i = 0; i < arr.length; i++){
  	count[(arr[i])-1] += 1;
  }

  for(let i = 0; i < count.length-1; i++){
  	count[i+1] += count[i];
  }

  for(let i = 0; i < arr.length; i++){
  	sort[count[arr[i]-1]-1] = arr[i];
  	count[arr[i]-1] -= 1;
  }
  return sort;
 

let arr = [12, 34, 54, 2, 3];
arr = countingSort(arr);

console.log(arr);
//console.log(arr);