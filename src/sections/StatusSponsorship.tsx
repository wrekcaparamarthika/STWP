import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '../components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../components/ui/table';
import { MapComponents } from '../lib/MapComponents';

type KeteranganSponsor = {
	status: string;
	keterangan: string;
};
const KeteranganSponsors: KeteranganSponsor[] = [
	{
		keterangan: 'proposal belum terkirim',
		status: 'not sent',
	},
	{
		keterangan: 'proposal sudah terkirim',
		status: 'sent',
	},
	{
		keterangan:
			'proposal sudah terkirim tapi belum ada konfirmasi dari penggirim maupun sponsorship',
		status: 'pending',
	},
	{
		keterangan:
			'proposal sudah terkonfirmasi baik dari pengirim maupun sponsorship',
		status: 'follow up',
	},
	{
		keterangan: 'sponsorship siap bekerjasama dalam hut. stwp',
		status: 'acc',
	},
	{
		keterangan: 'proposal dibatalkan oleh pihak panitia',
		status: 'cancel',
	},
	{
		keterangan: 'proposal di tolak oleh pihak sponsorship',
		status: 'reject',
	},
];
const StatusSponsorship = () => {
	return (
		<Card className='w-full lg:w-1/2'>
			<CardHeader>
				<CardTitle className='capitalize'>
					keterangan status sponsorship
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow className='capitalize'>
							<TableHead>status</TableHead>
							<TableHead>keterangan</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<MapComponents
							of={KeteranganSponsors}
							render={(cell, index) => (
								<TableRow key={index}>
									<TableCell className='uppercase'>
										{cell.status}
									</TableCell>
									<TableCell className='capitalize'>
										{cell.keterangan}
									</TableCell>
								</TableRow>
							)}
						/>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};

export default StatusSponsorship;
