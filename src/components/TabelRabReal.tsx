import Table, { TableBody, TableHead } from './Table';
import { rab } from '../Sections/EventOverviewSections';
import Map from '../utils/Map';

const TabelRabReal = ({ data }: { data: Array<rab> }) => {
	return (
		<Table>
			<caption className='text-justify caption-bottom'>
				Adapun rincian dari Rab Real yaitu Uang Masuk sejumlah&nbsp;
				{data[2]?.total}&nbsp; dikurangi dengan Rab Real sejumlah&nbsp;
				{data[0]?.total} maka hasilnya {data[3]?.total}. Jika mengacu
				pada Rab Real sejumlah {data[0]?.total} maka target kupon yang
				harus dipenuhi yaitu Rab Real sejumlah {data[0]?.total} di bagi
				dengan harga kupon yaitu Rp. 10.000 maka hasilnya&nbsp;
				{data[1]?.total}
			</caption>
			<thead>
				<tr className='bg-slate-50'>
					<TableHead colSpan={2}>Rab Real dan Kekurangan</TableHead>
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
	);
};

export default TabelRabReal;
