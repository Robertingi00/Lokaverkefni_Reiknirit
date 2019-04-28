function partition(arr, low, high) {
	let temp;
	i = (low - 1);
	pivot = arr[high]

	for(let j = low; j < high; j++){
		if (arr[j] <= pivot) {
			i = i + 1;
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}

	temp = arr[i + 1];
	arr[i + 1] = arr[high];
	arr[high] = temp;

	return i + 1
}

function quickSort(arr, low=0, high=null) {
	if (high == null) {
		high = arr.length -1;
	}

	if (low < high) {
		pi = partition(arr, low, high);

		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}