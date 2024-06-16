import axios from 'axios';
import React from 'react';
import TableIncome from '../components/TableIncome';
import TableDetailKupon from '../components/TableDetailKupon';
import TableDebitKredit from '../components/TableDebitKredit';
import DetailSponsor from '../components/DetailSponsor';
import formatCurrency from '../utils/FormatCurrency';
import formatPercentage from '../utils/FormatPercentage';
import DetailSponsorAcc from '../components/DetailSponsorAcc';
import TabelRabReal from '../components/TabelRabReal';
import Timeline from '../components/Timeline';

export type result = {
	source: string;
	total: number;
	percentage?: number;
};
export type detailKupon = {
	quarter: string;
	number: number;
	profit: number;
	precentage: number;
};
export type listSponsor = {
	total: number;
	category: string;
};
export type sponsorAcc = {
	index: number;
	nama: string;
	dana: number;
	jasa: string;
	barang: string;
	demand: string;
};
export type rab = {
	category: string;
	total: number;
};
interface Data {
	resultDetailKupon: Array<detailKupon>;
	resultIncome: Array<result>;
	resultDebitKredit: Array<result>;
	resultRab: Array<rab>;
	resultDate: Array<date>;
}
export type date = {
	category: string;
	value: string;
};
interface Sponsorship {
	resultGetListSponsorship: Array<listSponsor>;
	resultSponsorAcc: Array<sponsorAcc>;
	freshMoney: number;
}
const defaultDataValues: Data = {
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
const defaultValuesSponsorship: Sponsorship = {
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
const apiOverview =
	'https://script.googleusercontent.com/macros/echo?user_content_key=TQboDIEnBaQHj_fv_rcMuVA3SyLClXnw9HvweE5XQA6_cBYBkSfgcO3WvmI-MrrWM7b9WOCsZ6AKUi459Zt93FhX44jCSS2Em5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNGP1D0N39eoLk0fLkePM3_Iri8gJWPiLgDQSPp62kE3jq8LFmGbcS_dVU1JsPnO6_26a68i-yo52jPpUMfz6wfDoZ71kwJX4dz9Jw9Md8uu&lib=MJ7DYy4ZIPLw6Le5xgxMlEhsoTN8THAby';
const apiSponsor =
	'https://script.googleusercontent.com/macros/echo?user_content_key=7p-kFrk4zq7u2g3YNVt6wB6-JdWyYfpVFZODq6cdyLhIIs3_oGzmz4Do6ishYBj2abq657vTsY7baP5UC-n1am1r-uaoV_xXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD9-9NUVab_Y5krUgs3Oz26TY_5GGUGvfpEFsTLCDCYCYKqHyJJ0QGMPEilE8oMmPJ4DtvSWRubPoVdOW6hhOxEaWUb3D616RA&lib=MrYGkE4O3aTIEYsGRsR-8zZY-i5frPOL6';
const EventOverviewSections = () => {
	const [data, setData] = React.useState<Data>({ ...defaultDataValues });
	const [dataSponsor, setDataSponsor] = React.useState<Sponsorship>({
		...defaultValuesSponsorship,
	});
	const percentageDebitKredit =
		data.resultDebitKredit[0]?.total / data.resultDebitKredit[1]?.total - 1;
	async function fetchingOverview() {
		try {
			const { data } = await axios.get(apiOverview);
			setData(data);
		} catch (error) {
			console.log(error);
		}
	}
	async function fetchingSponsor() {
		try {
			const { data } = await axios.get(apiSponsor);
			setDataSponsor(data);
		} catch (error) {
			console.log(error);
		}
	}
	React.useEffect(() => {
		fetchingOverview();
		fetchingSponsor();
	}, []);
	return (
		<section className='flex flex-col gap-10 px-5'>
			<h1 className='text-4xl text-center'>
				Event Overview <br />
				HUT. STWP - 47
			</h1>
			<Timeline data={data.resultDate} />
			<TabelRabReal data={data.resultRab} />
			<TableIncome data={data.resultIncome} />
			<TableDetailKupon data={data.resultDetailKupon} />
			<div className='w-full px-2 py-5 m-auto border lg:w-1/2 bg-slate-50 border-slate-300'>
				<span className='text-lg'>Event Saldo</span>{' '}
				<span
					className={`${
						percentageDebitKredit > 1
							? 'text-green-600'
							: 'text-red-600'
					}`}>
					{percentageDebitKredit > 1 ? '+' : '-'}
					{formatPercentage(percentageDebitKredit)}
				</span>
				<br />
				<span className='text-3xl font-medium'>
					{formatCurrency(data.resultDebitKredit[2]?.total)}
				</span>
			</div>
			<TableDebitKredit data={data.resultDebitKredit} />
			<DetailSponsor data={dataSponsor.resultGetListSponsorship} />
			<DetailSponsorAcc data={dataSponsor.resultSponsorAcc} />
			<div className='w-full px-2 py-10 m-auto mb-4 border border-slate-300 bg-slate-50 lg:w-1/2'>
				<span className='text-sm capitalize'>
					Total fresh money sponsor
				</span>
				<br />
				<span className='text-3xl font-medium'>
					{formatCurrency(dataSponsor.freshMoney)}
				</span>
			</div>
		</section>
	);
};

export default EventOverviewSections;
