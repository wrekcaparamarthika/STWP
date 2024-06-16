import { listSponsor } from '../Sections/EventOverviewSections';
import { TableHead, Table, TableBody } from './Table';
import Map from '../utils/Map';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
const DetailSponsor = ({ data }: { data: Array<listSponsor> }) => {
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
			<Table>
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
						<TableHead>Status</TableHead>
						<TableHead>#</TableHead>
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
								<TableBody>{item.category}</TableBody>
								<TableBody className='text-end'>
									{item.total}
								</TableBody>
							</tr>
						)}
					/>
				</tbody>
			</Table>
		</div>
	);
};

export default DetailSponsor;
