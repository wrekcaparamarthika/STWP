import { result } from '../Sections/x';
import Map from '../utils/Map';
import formatCurrency from '../utils/FormatCurrency';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Tabel, TabelBody, TabelHead } from './Tabel';
const TabelIncome = ({ data }: { data: result[] }) => {
	return (
		<Tabel>
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
					<TabelHead>source</TabelHead>
					<TabelHead>Rp.-</TabelHead>
				</tr>
			</thead>
			<tbody>
				<Map
					of={data}
					render={(item, index) => (
						<tr
							key={index}
							className={index % 2 === 0 ? '' : 'bg-slate-50'}>
							<TabelBody>{item.source || <Skeleton />}</TabelBody>
							<TabelBody className='text-end'>
								{formatCurrency(item.total) || <Skeleton />}
							</TabelBody>
						</tr>
					)}
				/>
			</tbody>
		</Tabel>
	);
};

export default TabelIncome;
