import { detailKupon } from '../Sections/EventOverviewSections';
import { TableHead, TableBody, Table } from './Table';
import Map from '../utils/Map';
import formatCurrency from '../utils/FormatCurrency';
import formatPercentage from '../utils/FormatPercentage';

const TableDetailKupon = ({ data }: { data: Array<detailKupon> }) => {
	return (
		<Table className=''>
			<caption className='text-lg caption-top'>
				Global Penjualan Kupon Per - Quarter <br />{' '}
				{new Intl.DateTimeFormat('en-ID', {
					day: '2-digit',
					month: 'long',
					year: 'numeric',
				}).format(new Date())}
			</caption>
			<caption className='text-justify caption-bottom'>
				Adapun rincian Penjualan Kupon per - Quarter yaitu sebagai
				berikut : Quarter 1 sejumlah {data[0]?.number} Pcs atau&nbsp;
				{formatCurrency(data[0]?.profit)}, Quarter 2 sejumlah&nbsp;
				{data[1]?.number}
				&nbsp; Pcs atau {formatCurrency(data[1]?.profit)}, Quarter 3
				sejumlah&nbsp;
				{data[2]?.number}
				&nbsp; Pcs atau {formatCurrency(data[2]?.profit)}, Quarter 4
				sejumlah&nbsp;
				{data[3]?.number}
				&nbsp; Pcs atau {formatCurrency(data[3]?.profit)} dengan total
				keseluruhan {data[4]?.number} Pcs atau &nbsp;
				{formatCurrency(data[4]?.profit)} atau&nbsp;
				{formatPercentage(data[4]?.precentage)}
			</caption>
			<thead>
				<tr className='text-lg text-center capitalize bg-slate-50'>
					<TableHead>quarter</TableHead>
					<TableHead>#</TableHead>
					<TableHead>Rp.-</TableHead>
					<TableHead>%</TableHead>
				</tr>
			</thead>
			<tbody>
				<Map
					of={data}
					render={(item, index) => (
						<tr
							key={index}
							className={index % 2 === 0 ? '' : 'bg-slate-50'}>
							<TableBody>{item.quarter}</TableBody>
							<TableBody className='text-center'>
								{item.number}
							</TableBody>
							<TableBody className='text-end'>
								{formatCurrency(item.profit)}
							</TableBody>
							<TableBody className='text-end'>
								{formatPercentage(item.precentage)}
							</TableBody>
						</tr>
					)}
				/>
			</tbody>
		</Table>
	);
};

export default TableDetailKupon;
