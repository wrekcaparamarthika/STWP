import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getDropDownValues<T>(data: T[], selector: keyof T) {
	const uniqueArray = [...new Set(data.map((item) => item[selector]))];
	const noEmptyValues = uniqueArray
		.filter((element) => element !== '')
		.sort();
	const optionsArray = noEmptyValues.map((listItem) => {
		return {
			value: listItem,
			label: listItem,
		};
	});
	return optionsArray;
}
export function formatPercentage(
	n: number,
	minimum?: number,
	maximum?: number
) {
	return new Intl.NumberFormat('en-ID', {
		maximumFractionDigits: maximum ? maximum : 2,
		minimumFractionDigits: minimum ? minimum : 2,
		style: 'percent',
	}).format(n);
}
export function formatCurrency(c: number) {
	return new Intl.NumberFormat('en-ID', {
		style: 'currency',
		currency: 'IDR',
	}).format(c);
}
