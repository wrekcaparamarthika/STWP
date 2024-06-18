import { DataOverview, DataSponsor } from '../types/EventOverviewInterface';

const DefaultDataOverview: DataOverview = {
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
			total: 0,
		},
	],
	resultDate: [
		{
			category: '',
			value: '',
		},
	],
};
const DefaultDataSponsor: DataSponsor = {
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
export { DefaultDataOverview, DefaultDataSponsor };
