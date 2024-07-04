export type ListSponsor = {
	total: number;
	category: string;
};
export type SponsorAcc = {
	index: number;
	nama: string;
	dana: number;
	jasa: string;
	barang: string;
	demand: string;
};
export type DetailKupon = {
	quarter: string;
	number: number;
	profit: number;
	precentage: number;
};
export type Result = {
	source: string;
	total: number;
	percentage?: number;
};
export type Rab = {
	category: string;
	total: string;
};
export type ResultDate = {
	category: string;
	value: string;
};
export interface Sponsor {
	resultGetListSponsorship: ListSponsor[];
	resultSponsorAcc: SponsorAcc[];
	freshMoney: number;
}
export interface DataOverview {
	resultDetailKupon: DetailKupon[];
	resultIncome: Result[];
	resultDebitKredit: Result[];
	resultRab: Rab[];
	resultDate: ResultDate[];
}
export interface DataBendahara {
	NO: string;
	KET: string;
	DEBET: string;
	KREDIT: string;
	PIC: string;
	SALDO: string;
	TANGGAL: string;
}
export interface DataSponsor {
	NO: string;
	NAMA: string;
	STATUS: string;
	DANA: string;
	JASA: string;
	BARANG: string;
	DEMAND: string;
}
export interface Api {
	bendahara: DataBendahara[];
	sponsor: DataSponsor[];
}
