import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { QueryClient } from '@tanstack/react-query';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
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
export async function request<K>(option: AxiosRequestConfig): Promise<K> {
	const onSuccess = (response: AxiosResponse) => {
		const { data } = response;
		return data;
	};
	const onError = (error: AxiosError) => {
		return {
			message: error.message,
			code: error.code,
			response: error.response,
		};
	};
	return axios(option).then(onSuccess).catch(onError);
}
export const clientQuery = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
		},
	},
});
