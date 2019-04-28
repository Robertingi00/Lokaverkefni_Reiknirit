function insertionSort(arr) {
	let key, j;
	let len = arr.length -1
	for (let i = 1; i<= len; i++) {
		key = arr[i];
		
		j = i -1;
			
		while(j >= 0 && key < arr[j]){
			arr[j + 1] = arr[j];

			j = j - 1;
		}

		arr[j + 1] = key;
	}
	return arr;
}

