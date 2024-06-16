const formatCurrency = (n: number) => {
	return new Intl.NumberFormat('en-ID', {
		style: 'currency',
		currency: 'IDR',
	}).format(n);
};
export default formatCurrency;
