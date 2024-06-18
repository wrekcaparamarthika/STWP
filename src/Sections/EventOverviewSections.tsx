import axios from 'axios';
import React from 'react';
import { DataOverview, DataSponsor } from '../types/EventOverviewInterface';
import {
	DefaultDataOverview,
	DefaultDataSponsor,
} from '../constants/EventOverviewConstant';
import { apiOverview, apiSponsor } from '../constants/api';
import Timeline from '../components/Timeline';
import TabelRabReal from '../components/TabelRabReal';
import TabelIncome from '../components/TabelIncome';
import TabelDetailKupon from '../components/TabelDetailKupon';
import TabelDebitKredit from '../components/TabelDebitKredit';
import DetailSponsor from '../components/DetailSponsor';
import DetailSponsorAcc from '../components/DetailSponsorAcc';
import CardSaldo from '../components/CardSaldo';
async function fetchData(url: string) {
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}
const EventOverviewSections = () => {
	const [dataOverview, setDataOverview] =
		React.useState<DataOverview>(DefaultDataOverview);
	const [dataSponsor, setDataSponsor] =
		React.useState<DataSponsor>(DefaultDataSponsor);

	React.useEffect(() => {
		async function initFetch() {
			const overviewData = await fetchData(apiOverview);
			const sponsorData = await fetchData(apiSponsor);
			if (overviewData) setDataOverview(overviewData);
			if (sponsorData) setDataSponsor(sponsorData);
		}
		initFetch();
	});
	const saldoDebitKredit = dataOverview.resultDebitKredit[2]?.total;
	const percentageDebitKredit =
		dataOverview.resultDebitKredit[0]?.total /
			dataOverview.resultDebitKredit[1]?.total -
		1;
	return (
		<section className='flex flex-col gap-10 px-5'>
			<h1 className='text-4xl text-center'>
				Event Overview <br />
				HUT. STWP - 47
			</h1>
			<Timeline data={dataOverview.resultDate} />
			<TabelRabReal data={dataOverview.resultRab} />
			<TabelIncome data={dataOverview.resultIncome} />
			<TabelDetailKupon data={dataOverview.resultDetailKupon} />
			<CardSaldo
				saldo={saldoDebitKredit}
				text='Event saldo'
				percentage={percentageDebitKredit}
			/>
			<TabelDebitKredit data={dataOverview.resultDebitKredit} />
			<DetailSponsor data={dataSponsor.resultGetListSponsorship} />
			<CardSaldo
				saldo={dataSponsor.freshMoney}
				text='Total fresh money sponsor'
			/>
			<DetailSponsorAcc data={dataSponsor.resultSponsorAcc} />
		</section>
	);
};
export default EventOverviewSections;
