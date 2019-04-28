function selectionSort(arr) {
	let min;
	for(let i = 0; i < arr.length; i++){
		min = i;
		for(let j = i + 1; j < arr.length; j++){
			if (arr[min] > arr[j]) {
				min = j;
			}
		}

		temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;

		console.log(i);
		console.log(arr);
	}

	return arr;
}