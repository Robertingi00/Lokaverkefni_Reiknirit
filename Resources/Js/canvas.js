let c = document.getElementById("c");
let ctx = c.getContext("2d");

let width = 900;
c.width = width;
let height = 600
c.height = height;

let speed = 50;

let bar_width;
let spacing = 1;

let list = [];
for (let i = 0; i < 200; i++) {
	list.push(Math.floor(Math.random() * 100) + 1);
}

list = quickSort(list);

async function draw_list(list, key) {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, width, height);

	bar_width = (width - (spacing * list.length)) / list.length;

	let x = spacing;
	let y, length;
	tel = 0;

	for(let i of list){
		ctx.fillStyle = "white";
		if (tel == key){
			ctx.fillStyle = "green"
		}

		y = (height - (i * 2));
		length = height - y;
		ctx.fillRect(x, y, bar_width, length);
		x = x + bar_width + spacing;

		tel++
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function partition(arr, low, high) {
	let temp;
	i = (low - 1);
	pivot = arr[high]

	for(let j = low; j < high; j++){
		if (arr[j] <= pivot) {
			i = i + 1;
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			draw_list(arr, j);
			await sleep(speed);
			
		}
	}

	temp = arr[i + 1];
	arr[i + 1] = arr[high];
	arr[high] = temp;
	draw_list(arr, i);
	await sleep(speed);
	return i + 1;
}

async function quickSort(arr, low=0, high=null) {
	if (high == null) {
		high = arr.length -1;
	}

	if (low < high) {
		pi = await partition(arr, low, high);

		await quickSort(arr, low, pi - 1);
		await quickSort(arr, pi + 1, high);
	}
}

async function insertionSort(arr) {
	let key, j;
	let len = arr.length -1
	for (let i = 1; i<= len; i++) {
		key = arr[i];
		
		j = i -1;
		
		while(j >= 0 && key < arr[j]){
			arr[j + 1] = arr[j];
			draw_list(arr, j);
			await sleep(speed)

			j = j - 1;
		}

		arr[j + 1] = key;
		draw_list(arr, i);
		await sleep(speed)
	}

	return arr;
}

async function selectionSort(arr) {
	let min, temp;
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

		draw_list(arr, i);
		await sleep(speed);
	}

	return arr;
}

async function bubbleSort(list) {
	let swap = false;
	for (let i = 0; i <= list.length -1; i++) {
		if (list[i] > list[i+1]){
			t = list[i];
			list[i] = list[i+1];
			list[i+1] = t;
			draw_list(list, i);
			await sleep(speed);

			swap = true;

		}
	}

	if (!swap){
		return list;
	}
	
	return bubbleSort(list);
	
}

async function countingSort(arr){
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

  	draw_list(sort, i);
  	await sleep(speed);

  	count[arr[i]-1] -= 1;
  }
  return sort;
}

async function heapify(arr, n, i){
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
        draw_list(arr, i)
        await sleep(speed);
        
        await heapify(arr, n, largest)
    }
}

async function heapSort(arr){

    n = arr.length;

    for(i = n; i > -1; i--){
        await heapify(arr, n, i)
    }

    
    for(i = n-1; i > 0; i--){
        temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        draw_list(arr, i);
        await sleep(speed);

        await heapify(arr, i, 0)
    }
}

async function mergeSort(arr) {
	let n = arr.length;

	if(n > 1){

		let mid = Math.floor(n/2);
		let l = arr.slice(0, mid);
		let r = arr.slice(mid, n);

		await mergeSort(l);
		await mergeSort(r);

		let i = 0;
		let j = 0;
		let k = 0;

		while(i < l.length & j < r.length){
			if(l[i] < r[j]){
				arr[k] = l[i];
				i+=1
			}else{
				arr[k] = r[j];
				j+=1 
			}

			draw_list(arr, k);
			await sleep(speed);
			k+=1
		}

		while(i < l.length){
			arr[k] = l[i];

			draw_list(arr, i);
			await sleep(speed);

			i+=1
			k+=1
		}

		while(j < r.length){
			arr[k] = r[j];

			draw_list(arr, k);
			await sleep(speed);

			j+=1
			k+=1
		}

	}
}

async function shellSort(arr){
  let n = arr.length;
  let gap = Math.floor(n /2);
  
  while(gap > 0){
    
    for(let i = gap;i < n; i++){
      
      let temp = arr[i];
      
      let j = i;
      
      while(j >= gap & arr[j-gap] > temp){
        arr[j] = arr[j-gap];
        draw_list(arr, j)
        await sleep(speed);
        j -= gap;
      }
      arr[j] = temp;
      draw_list(arr, j)
      await sleep(speed);
    }
    gap = Math.floor(gap/2);
  }
}
