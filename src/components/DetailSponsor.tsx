import { Tabel, TabelBody, TabelHead } from './Tabel';
import Map from '../utils/Map';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ListSponsor } from '../types/EventOverviewType';
const DetailSponsor = ({ data }: { data: ListSponsor[] }) => {
	return (
		<div>
			<h1 className='text-4xl text-center'>Progress Sponsorship</h1>
			<div className='w-full m-auto border bg-slate-50 lg:w-1/2 border-slate-300'>
				<VictoryChart
					theme={VictoryTheme.material}
					domainPadding={2}>
					<VictoryBar
						horizontal
						data={data.map((item) => [item.total])}
						labels={data.map((item) => `${[item.category]}`)}
					/>
				</VictoryChart>
			</div>
			<Tabel>
				<caption className='text-lg'>
					List Status Sponsorship Event HUT. STWP - 47
				</caption>
				<caption className='text-justify caption-bottom'>
					Adapun rincian status dari sponsorship yaitu Not Sent
					sejumlah&nbsp;
					{data[0]?.total}, Sent sejumlah {data[1]?.total}, Pending
					sejumlah {data[2]?.total}, Follow Up sejumlah{' '}
					{data[3]?.total}, Acc sejumlah {data[4]?.total}, Cancel
					sejumlah {data[5]?.total}, Reject sejumlah {data[6]?.total}{' '}
					dengan total keseluruhan&nbsp;
					{data[7]?.total} sponsor
				</caption>
				<thead>
					<tr className='bg-slate-50'>
						<TabelHead>Status</TabelHead>
						<TabelHead>#</TabelHead>
					</tr>
				</thead>
				<tbody>
					<Map
						of={data}
						render={(item, index) => (
							<tr
								key={index}
								className={`${
									index % 2 === 0 ? '' : 'bg-slate-50'
								}`}>
								<TabelBody>
									{item.category || <Skeleton />}
								</TabelBody>
								<TabelBody className='text-end'>
									{item.total || <Skeleton />}
								</TabelBody>
							</tr>
						)}
					/>
				</tbody>
			</Tabel>
		</div>
	);
};

export default DetailSponsor;
