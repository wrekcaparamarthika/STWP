import Map from '../utils/Map';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ResultDate } from '../types/EventOverviewType';
import { Tabel, TabelHead, TabelBody } from './Tabel';
const Timeline = ({ data }: { data: ResultDate[] }) => {
	return (
		<Tabel>
			<thead>
				<tr>
					<TabelHead
						colSpan={2}
						className='bg-slate-50'>
						Timeline
					</TabelHead>
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
							<TabelBody className='text-start'>
								{item.category || <Skeleton />}
							</TabelBody>
							<TabelBody className='text-end'>
								{item.value || <Skeleton />}
							</TabelBody>
						</tr>
					)}
				/>
			</tbody>
		</Tabel>
	);
};

export default Timeline;
