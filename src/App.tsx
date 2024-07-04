import React from 'react';
import { CardSaldo } from './components/CardSaldo';
import Bendahara from './sections/Bendahara';
import Sponsorship from './sections/Sponsorship';
import { DataOverview, Sponsor } from './interface/EventOverview';
import {
	DEFAULT_VALUE_DATA_OVERVIEW,
	DEFAULT_VALUE_LIST_SPONSOR,
} from './constants/default';
import { fetchData } from './lib/axios';
import { API_OVERVIEW, API_SPONSOR } from './constants/api';
import { IFElseComponents } from './lib/IFElseComponents';
import GlobalDebitKredit from './sections/GlobalDebitKredit';
import SourceIncome from './sections/SourceIncome';
import GlobalTiketing from './sections/GlobalTiketing';
import StatusSponsorship from './sections/StatusSponsorship';
import { useQuery } from '@tanstack/react-query';
import { request } from './lib/utils';

const App = () => {
	// const [dataOverview, setDataOverview] = React.useState<DataOverview>(
	// 	DEFAULT_VALUE_DATA_OVERVIEW
	// );
	// const [dataSponsor, setDataSponsor] = React.useState<Sponsor>(
	// 	DEFAULT_VALUE_LIST_SPONSOR
	// );
	// const [isLoading, setLoading] = React.useState<boolean>(false);
	// React.useEffect(() => {
	// 	async function init() {
	// 		const overview = await fetchData(API_OVERVIEW);
	// 		const sponsor = await fetchData(API_SPONSOR);
	// 		if (overview) setDataOverview(overview);
	// 		if (sponsor) setDataSponsor(sponsor);
	// 		if (overview && sponsor) setLoading(true);
	// 	}
	// 	init();
	// }, []);
	const { data: dataOverview, isFetched: fetchedOverview } = useQuery({
		queryKey: ['overview'],
		queryFn: () => request<DataOverview>(API_OVERVIEW),
		initialData: DEFAULT_VALUE_DATA_OVERVIEW,
	});
	const { data: dataSponsor, isFetched: fetchedSponsor } = useQuery({
		queryKey: ['sponsor'],
		queryFn: () => request<Sponsor>(API_SPONSOR),
		initialData: DEFAULT_VALUE_LIST_SPONSOR,
	});
	const globalSaldo = dataOverview.resultDebitKredit[2]?.total;
	const globalPercentage =
		dataOverview.resultDebitKredit[0]?.total /
			dataOverview.resultDebitKredit[1]?.total -
		1;
	return (
		<main className='flex items-center justify-center w-full px-2.5 py-10 flex-col gap-2.5'>
			<IFElseComponents
				state={!fetchedOverview && !fetchedSponsor}
				stateTrue={
					<h1>Mohon tunggu sebentar data masih di proses...</h1>
				}
				stateFalse={null}
			/>
			<CardSaldo
				saldo={globalSaldo}
				percentage={globalPercentage}
				title='global saldo'
			/>

			<GlobalDebitKredit data={dataOverview.resultDebitKredit} />
			<SourceIncome data={dataOverview.resultIncome} />
			<GlobalTiketing data={dataOverview.resultDetailKupon} />
			<Bendahara />
			<CardSaldo
				saldo={dataSponsor.freshMoney}
				title='total freshmoney sponsorship'
			/>
			<StatusSponsorship />
			<Sponsorship />
		</main>
	);
};

export default App;
