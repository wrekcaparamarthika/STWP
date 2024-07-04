import { CardSaldo } from './components/CardSaldo';
import Bendahara from './sections/Bendahara';
import Sponsorship from './sections/Sponsorship';
import { DataOverview, Sponsor } from './interface/EventOverview';
import {
	DEFAULT_VALUE_DATA_OVERVIEW,
	DEFAULT_VALUE_LIST_SPONSOR,
} from './constants/default';
import { API_OVERVIEW, API_SPONSOR } from './constants/api';
import { IFElseComponents } from './lib/IFElseComponents';
import GlobalDebitKredit from './sections/GlobalDebitKredit';
import SourceIncome from './sections/SourceIncome';
import GlobalTiketing from './sections/GlobalTiketing';
import StatusSponsorship from './sections/StatusSponsorship';
import { useQuery } from '@tanstack/react-query';
import { request } from './lib/utils';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { RocketIcon } from '@radix-ui/react-icons';
import React from 'react';

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
		<React.Fragment>
			<main className='flex items-center justify-center w-full px-2.5 py-4 flex-col gap-2.5'>
				<IFElseComponents
					state={!fetchedOverview && !fetchedSponsor}
					stateTrue={
						<Alert className='w-full lg:w-1/2'>
							<RocketIcon className='w-4 h-4' />
							<AlertTitle>Loading...</AlertTitle>
							<AlertDescription>
								Mohon tunggu sebentar data masih diproses!
							</AlertDescription>
						</Alert>
					}
					stateFalse={null}
				/>
				<CardSaldo
					saldo={globalSaldo}
					percentage={globalPercentage}
					title='global saldo'
					isDescriptionText={true}
					isFetched={!fetchedOverview}
				/>

				<GlobalDebitKredit
					data={dataOverview.resultDebitKredit}
					isFetched={!fetchedOverview}
				/>
				<SourceIncome
					data={dataOverview.resultIncome}
					isFetched={!fetchedOverview}
				/>
				<GlobalTiketing
					data={dataOverview.resultDetailKupon}
					isFetched={!fetchedOverview}
				/>
				<Bendahara />
				<CardSaldo
					saldo={dataSponsor.freshMoney}
					title='total freshmoney sponsorship'
					isFetched={!fetchedSponsor}
				/>
				<StatusSponsorship />
				<Sponsorship />
			</main>
			<footer className='w-full px-2 pb-2 m-auto font-medium text-center lg:w-1/2'>
				<h1 className=''>Panitia HUT. STWP - 47</h1>
				<a href='https://ef-studio.vercel.app/'>
					This site powered by
					<span className='underline'>
						{' '}
						EF-<span className='italic'>S</span>tudi
						<span className='italic'>o</span>//22
					</span>
				</a>
				<h1>©2024 STWP. All right reserved.</h1>
			</footer>
		</React.Fragment>
	);
};

export default App;
