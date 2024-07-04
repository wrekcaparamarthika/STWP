import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../components/ui/card';
import { Result } from '../interface/EventOverview';
import { cn, formatCurrency } from '../lib/utils';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../components/ui/table';
import { MapComponents } from '../lib/MapComponents';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
	data: Result[];
}
const SourceIncome = ({ data, className, style, ...rest }: Props) => {
	console.log(data);
	return (
		<Card
			className={cn('w-full lg:w-1/2', className)}
			style={{ ...style }}
			{...rest}>
			<CardHeader>
				<CardTitle>Source of income</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader className='capitalize'>
						<TableRow>
							<TableHead>source</TableHead>
							<TableHead>rp.-</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<MapComponents
							of={data}
							render={(cell, index) => (
								<TableRow key={index}>
									<TableCell>{cell.source}</TableCell>
									<TableCell>
										{formatCurrency(cell.total)}
									</TableCell>
								</TableRow>
							)}
						/>
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<CardDescription className='text-justify'>
					{`
						Adapun rincian global Pendatapan HUT. STWP - 47 yaitu
						sebagai berikut : Kupon sejumlah ${data[0]?.total / 10000}
						Pcs atau ${formatCurrency(data[0]?.total)}, Merchandise
						${formatCurrency(data[1]?.total)}, Sponsor
						${formatCurrency(data[2]?.total)}, Pinjaman Modal
						${formatCurrency(data[3]?.total)}, dan Donatur
						${formatCurrency(data[4]?.total)} dengan total keseluruhan
						yaitu ${formatCurrency(data[5]?.total)}
				`}
				</CardDescription>
			</CardFooter>
		</Card>
	);
};

export default SourceIncome;
