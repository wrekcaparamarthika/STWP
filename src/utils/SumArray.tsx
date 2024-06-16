const sumArray = (arr: Array<number>) => {
	let total: number = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
};

export default sumArray;
