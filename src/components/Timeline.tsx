import { date } from '../Sections/EventOverviewSections';
import Table, { TableBody } from './Table';
import Map from '../utils/Map';
const Timeline = ({ data }: { data: Array<date> }) => {
	return (
		<Table>
			<tbody>
				<Map
					of={data}
					render={(item, index) => (
						<tr
							key={index}
							className={`${
								index % 2 === 0 ? 'bg-slate-50' : ''
							}`}>
							<TableBody className='text-start'>
								{item.category}
							</TableBody>
							<TableBody className='text-end'>
								{item.value}
							</TableBody>
						</tr>
					)}
				/>
			</tbody>
		</Table>
	);
};

export default Timeline;
