import {
	DetailKupon,
	ListSponsor,
	Rab,
	Result,
	ResultDate,
	SponsorAcc,
} from './EventOverviewType';

export interface DataSponsor {
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
