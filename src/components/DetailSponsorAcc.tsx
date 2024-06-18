import React from 'react';
import { sponsorAcc } from '../Sections/x';
import { Tabel, TabelBody, TabelHead } from './Tabel';
import Map from '../utils/Map';
import formatCurrency from '../utils/FormatCurrency';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const DetailSponsorAcc = ({ data }: { data: sponsorAcc[] }) => {
	return (
		<div className='w-full m-auto overflow-scroll lg:w-1/2 h-1/2'>
			<Tabel className='overflow-y-scroll'>
				<thead>
					<tr className='font-bold capitalize bg-slate-50'>
						<TabelHead>no</TabelHead>
						<TabelHead>nama</TabelHead>
						<TabelHead>dana</TabelHead>
						<TabelHead>jasa</TabelHead>
						<TabelHead>barang</TabelHead>
						<TabelHead>demand</TabelHead>
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
										<TabelBody>
											{item.index || <Skeleton />}
										</TabelBody>
										<TabelBody className='whitespace-nowrap'>
											{item.nama || <Skeleton />}
										</TabelBody>
										<TabelBody className='whitespace-nowrap text-end'>
											{formatCurrency(item.dana)}
										</TabelBody>
										<TabelBody className='whitespace-nowrap'>
											{item.jasa}
										</TabelBody>
										<TabelBody className='whitespace-nowrap'>
											{item.barang}
										</TabelBody>
										<TabelBody className='whitespace-nowrap'>
											{item.demand}
										</TabelBody>
									</React.Fragment>
								)}
							</tr>
						)}
					/>
				</tbody>
			</Tabel>
		</div>
	);
};

export default DetailSponsorAcc;
