

function mergeSort(arr) {
	let n = arr.length;
	if(n > 1){
		let mid = Math.floor(n/2);
		let l = arr.slice(0, mid);
		let r = arr.slice(mid, n);
		mergeSort(l);
		mergeSort(r);
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
			k+=1
		}
		while(i < l.length){
			arr[k] = l[i];
			i+=1
			k+=1
		}
		while(j < r.length){
			arr[k] = r[j];
			j+=1
			k+=1
		}
	}
}
arr = [12, 11, 13, 5, 6, 7]  
mergeSort(arr);