import React from 'react';
import { sponsorAcc } from '../Sections/EventOverviewSections';
import Table, { TableBody, TableHead } from './Table';
import Map from '../utils/Map';
import formatCurrency from '../utils/FormatCurrency';

const DetailSponsorAcc = ({ data }: { data: Array<sponsorAcc> }) => {
	return (
		<div className='w-full overflow-scroll h-1/2'>
			<Table className='overflow-y-scroll '>
				<thead>
					<tr className='font-bold capitalize bg-slate-50'>
						<TableHead>no</TableHead>
						<TableHead>nama</TableHead>
						<TableHead>dana</TableHead>
						<TableHead>jasa</TableHead>
						<TableHead>barang</TableHead>
						<TableHead>demand</TableHead>
					</tr>
				</thead>
				<tbody>
					<Map
						of={data}
						render={(item, index) => (
							<tr
								key={index}
								className={`${
									item.index % 2 === 0 ? 'bg-slate-50' : ''
								}`}>
								{!item.index ? null : (
									<React.Fragment>
										<TableBody>{item.index}</TableBody>
										<TableBody className='whitespace-nowrap'>
											{item.nama}
										</TableBody>
										<TableBody className='whitespace-nowrap text-end'>
											{formatCurrency(item.dana)}
										</TableBody>
										<TableBody className='whitespace-nowrap'>
											{item.jasa}
										</TableBody>
										<TableBody className='whitespace-nowrap'>
											{item.barang}
										</TableBody>
										<TableBody className='whitespace-nowrap'>
											{item.demand}
										</TableBody>
									</React.Fragment>
								)}
							</tr>
						)}
					/>
				</tbody>
			</Table>
		</div>
	);
};

export default DetailSponsorAcc;
