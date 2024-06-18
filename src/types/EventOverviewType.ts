export type Result = {
	source: string;
	total: number;
	percentage?: number;
};
export type DetailKupon = {
	quarter: string;
	number: number;
	profit: number;
	precentage: number;
};
export type ListSponsor = {
	total: number;
	category: string;
};
export type ResultDate = {
	category: string;
	value: string;
};
export type SponsorAcc = {
	index: number;
	nama: string;
	dana: number;
	jasa: string;
	barang: string;
	demand: string;
};
export type Rab = { category: string; total: string };
