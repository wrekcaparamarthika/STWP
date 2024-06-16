import Map from '../utils/Map';
import { ProposalDetails } from '../constants';
const BackgroundSections = () => {
	return (
		<section className='flex flex-col items-stretch gap-8 px-8 py-8 lg:flex-row'>
			<div className='flex flex-col w-full gap-2 text-justify basis-1/2'>
				<h1 className='text-4xl lg:text-center'>Latar Belakang</h1>
				<p>{ProposalDetails.background}</p>
			</div>
			<div className='flex flex-col w-full gap-2 text-justify basis-1/2'>
				<h1 className='text-4xl'>Latar Belakang</h1>
				<p>{ProposalDetails.intentAndPurpose}</p>
				<b>Tujuan dari penyelenggaraan kegiatan ini adalah :</b>
				<ol className='px-8 list-decimal'>
					<Map
						of={ProposalDetails.intentList}
						render={(item, index) => <li key={index}>{item}</li>}
					/>
				</ol>
				<p>
					Semoga kegiatan ini dapat memberikan dampak positif dan
					berperan dalam meningkatkan kualitas hidup bagi semua
					lapisan masyarakat
				</p>
			</div>
		</section>
	);
};

export default BackgroundSections;
