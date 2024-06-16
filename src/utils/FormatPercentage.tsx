const formatPercentage = (n: number, minimum?: number, maximum?: number) => {
	return new Intl.NumberFormat('en-ID', {
		style: 'percent',
		maximumFractionDigits: maximum ? maximum : 2,
		minimumFractionDigits: minimum ? minimum : 2,
	}).format(n);
};
export default formatPercentage;
