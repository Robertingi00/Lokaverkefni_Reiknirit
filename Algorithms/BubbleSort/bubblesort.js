function bubbleSort(list) {
	let swap = false;
	for (let i = 0; i <= list.length -1; i++) {
		if (list[i] > list[i+1]){
			t = list[i];
			list[i] = list[i+1];
			list[i+1] = t;

			swap = true;

		}
	}

	if (!swap){
		return list;
	}
	
	return bubbleSort(list);
	
}