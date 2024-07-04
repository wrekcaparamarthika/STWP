import {
	DataBendahara,
	DataOverview,
	DataSponsor,
	Sponsor,
} from '../interface/EventOverview';

export const DEFAULT_VALUE_DATA_BENDAHARA: DataBendahara[] = [
	{
		DEBET: '',
		KET: '',
		KREDIT: '',
		NO: '',
		PIC: '',
		SALDO: '',
		TANGGAL: '',
	},
];
export const DEFAULT_VALUE_SPONSOR: DataSponsor[] = [
	{
		BARANG: '',
		DANA: '',
		DEMAND: '',
		JASA: '',
		NAMA: '',
		NO: '',
		STATUS: '',
	},
];
export const DEFAULT_VALUE_DATA_OVERVIEW: DataOverview = {
	resultDebitKredit: [
		{
			source: '',
			total: 0,
		},
	],
	resultDetailKupon: [
		{
			number: 0,
			precentage: 0,
			profit: 0,
			quarter: '',
		},
	],
	resultIncome: [
		{
			source: '',
			total: 0,
		},
	],
	resultRab: [
		{
			category: '',
			total: '',
		},
	],
	resultDate: [
		{
			category: '',
			value: '',
		},
	],
};

export const DEFAULT_VALUE_LIST_SPONSOR: Sponsor = {
	resultGetListSponsorship: [
		{
			category: '',
			total: 0,
		},
	],
	resultSponsorAcc: [
		{
			index: 0,
			nama: '',
			dana: 0,
			jasa: '',
			barang: '',
			demand: '',
		},
	],
	freshMoney: 0,
};
