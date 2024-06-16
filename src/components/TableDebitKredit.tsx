import { TableBody, Table, TableHead } from './Table';
import { result } from '../Sections/EventOverviewSections';
import Map from '../utils/Map';
import formatCurrency from '../utils/FormatCurrency';
import formatPercentage from '../utils/FormatPercentage';
const TableDebitKredit = ({ data }: { data: Array<result> }) => {
	const profitLoss = data[0]?.total / data[1]?.total - 1;
	const findIndex = data.findIndex((_, index) => index === 0);
	if (findIndex !== -1) {
		data[findIndex] = { ...data[findIndex], percentage: profitLoss };
	}
	return (
		<Table>
			<caption className='text-lg'>
				Global Event HUT. STWP Profit/Loss
			</caption>
			<caption className='text-justify caption-bottom'>
				Total Debit Event HUT. STWP - 47 yaitu sebesar&nbsp;
				{formatCurrency(data[0]?.total)}, Total Kredit Event HUT. STWP -
				47 yaitu {formatCurrency(data[1]?.total)} dengan Saldo akhir
				sejumlah {formatCurrency(data[2]?.total)} atau profit/loss
				sejumlah {profitLoss > 1 ? '+' : '-'}
				{formatPercentage(profitLoss)}
			</caption>
			<thead>
				<tr className='bg-slate-50'>
					<TableHead>Global Event Profit/Loss</TableHead>
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
							className={`${
								index % 2 === 0 ? '' : 'bg-slate-50'
							}`}>
							<TableBody>{item.source}</TableBody>
							<TableBody className='text-end'>
								{formatCurrency(item.total)}
							</TableBody>
							{item.percentage ? (
								<TableBody
									rowSpan={3}
									className={`${
										item.percentage > 1
											? 'text-green-600'
											: 'text-red-600'
									} font-bold text-center`}>
									{item.percentage > 1 ? '+' : '-'}
									{formatPercentage(item.percentage, 2, 2)}
								</TableBody>
							) : null}
						</tr>
					)}
				/>
			</tbody>
		</Table>
	);
};

export default TableDebitKredit;
