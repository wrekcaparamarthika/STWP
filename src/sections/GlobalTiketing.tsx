import React from 'react';
import { DetailKupon } from '../interface/EventOverview';
import { cn, formatCurrency, formatPercentage } from '../lib/utils';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
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
import { Skeleton } from '../components/ui/skeleton';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
	data: DetailKupon[];
	isFetched: boolean;
}
const GlobalTiketing = ({
	data,
	isFetched,
	className,
	style,
	...rest
}: Props) => {
	if (isFetched) {
		return (
			<Card
				className={cn(`w-full lg:w-1/2`, className)}
				style={{ ...style }}
				{...rest}>
				<CardHeader>
					<CardTitle className='capitalize'>
						<Skeleton className='w-full h-4' />
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow className='capitalize'>
								<TableHead>
									<Skeleton className='w-full h-4' />
								</TableHead>
								<TableHead>
									<Skeleton className='w-full h-4' />
								</TableHead>
								<TableHead>
									<Skeleton className='w-full h-4' />
								</TableHead>
								<TableHead>
									<Skeleton className='w-full h-4' />
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>
									<Skeleton className='w-full h-4' />
								</TableCell>
								<TableCell>
									<Skeleton className='w-full h-4' />
								</TableCell>
								<TableCell>
									<Skeleton className='w-full h-4' />
								</TableCell>
								<TableCell>
									<Skeleton className='w-full h-4' />
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter>
					<CardDescription className='w-full'>
						<Skeleton className='w-full h-14' />
					</CardDescription>
				</CardFooter>
			</Card>
		);
	}
	return (
		<Card
			className={cn(`w-full lg:w-1/2`, className)}
			style={{ ...style }}
			{...rest}>
			<CardHeader>
				<CardTitle className='capitalize'>
					penjualan kupon per - quarter
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow className='capitalize'>
							<TableHead>quarter</TableHead>
							<TableHead>#</TableHead>
							<TableHead>Rp.-</TableHead>
							<TableHead>%</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<MapComponents
							of={data}
							render={(cell, index) => (
								<TableRow key={index}>
									<TableCell>{cell.quarter}</TableCell>
									<TableCell>{cell.number}</TableCell>
									<TableCell>
										{formatCurrency(cell.profit)}
									</TableCell>
									<TableCell>
										{formatPercentage(cell.precentage)}
									</TableCell>
								</TableRow>
							)}
						/>
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<CardDescription className='text-justify'>
					{`Adapun rincian Penjualan Kupon per - Quarter yaitu sebagai berikut : Quarter 1 sejumlah ${
						data[0]?.number
					} Pcs atau ${formatCurrency(
						data[0]?.profit
					)}, Quarter 2 sejumlah ${
						data[1]?.number
					} Pcs atau ${formatCurrency(
						data[1]?.profit
					)}, Quarter 3 sejumlah ${data[2]?.number}
						Pcs atau ${formatCurrency(data[2]?.profit)}, Quarter 4
						sejumlah ${data[3]?.number} Pcs atau ${formatCurrency(
						data[3]?.profit
					)} dengan total keseluruhan ${
						data[4]?.number
					} Pcs atau ${formatCurrency(
						data[4]?.profit
					)} atau ${formatPercentage(data[4]?.precentage)}
					`}
				</CardDescription>
			</CardFooter>
		</Card>
	);
};

export default GlobalTiketing;
