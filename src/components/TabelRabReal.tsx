import Map from '../utils/Map';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Tabel, TabelBody, TabelHead } from './Tabel';
import { Rab } from '../types/EventOverviewType';
const TabelRabReal = ({ data }: { data: Rab[] }) => {
	return (
		<Tabel>
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
					<TabelHead colSpan={2}>Rab Real dan Kekurangan</TabelHead>
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
	);
};

export default TabelRabReal;
