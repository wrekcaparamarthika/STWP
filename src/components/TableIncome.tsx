import { result } from '../Sections/EventOverviewSections';
import Map from '../utils/Map';
import formatCurrency from '../utils/FormatCurrency';
import { TableBody, TableHead, Table } from './Table';
const TableIncome = ({ data }: { data: Array<result> }) => {
	return (
		<Table>
			<caption className='text-lg'>
				Global Pendapatan/Pemasukan HUT. STWP - 47
			</caption>
			<caption className='text-justify caption-bottom'>
				Adapun rincian global Pendatapan HUT. STWP - 47 yaitu sebagai
				berikut : Kupon sejumlah {data[0]?.total / 10000} Pcs atau&nbsp;
				{formatCurrency(data[0]?.total)}, Merchandise&nbsp;
				{formatCurrency(data[1]?.total)}, Sponsor&nbsp;
				{formatCurrency(data[2]?.total)}, Pinjaman Modal&nbsp;
				{formatCurrency(data[3]?.total)}, dan Donatur&nbsp;
				{formatCurrency(data[4]?.total)} dengan total keseluruhan
				yaitu&nbsp;
				{formatCurrency(data[5]?.total)}
			</caption>
			<thead>
				<tr className='text-lg capitalize bg-slate-50'>
					<TableHead>source</TableHead>
					<TableHead>Rp.-</TableHead>
				</tr>
			</thead>
			<tbody>
				<Map
					of={data}
					render={(item, index) => (
						<tr
							key={index}
							className={index % 2 === 0 ? '' : 'bg-slate-50'}>
							<TableBody>{item.source}</TableBody>
							<TableBody>{formatCurrency(item.total)}</TableBody>
						</tr>
					)}
				/>
			</tbody>
		</Table>
	);
};

export default TableIncome;
