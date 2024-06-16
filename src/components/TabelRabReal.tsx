import Table, { TableBody, TableHead } from './Table';
import { rab } from '../Sections/EventOverviewSections';
import Map from '../utils/Map';

const TabelRabReal = ({ data }: { data: Array<rab> }) => {
	return (
		<Table>
			<thead>
				<tr className='bg-slate-50'>
					<TableHead>Source</TableHead>
					<TableHead>Rp.-</TableHead>
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
