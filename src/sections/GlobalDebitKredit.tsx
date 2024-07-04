import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../components/ui/table';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../components/ui/card';
import { Result } from '../interface/EventOverview';
import { cn, formatCurrency, formatPercentage } from '../lib/utils';
import { MapComponents } from '../lib/MapComponents';
import { Skeleton } from '../components/ui/skeleton';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	data: Result[];
	isFetched: boolean;
}
const GlobalDebitKredit = ({
	data,
	isFetched,
	className,
	style,
	...rest
}: Props) => {
	const profitLoss = data[0]?.total / data[1]?.total - 1;
	const findIndex = data.findIndex((_, index) => index === 0);
	if (findIndex !== -1) {
		data[findIndex] = { ...data[findIndex], percentage: profitLoss };
	}
	if (isFetched) {
		return (
			<Card
				className={cn('w-full lg:w-1/2', className)}
				style={{ ...style }}
				{...rest}>
				<CardHeader>
					<CardTitle>
						<Skeleton className='w-full h-4' />
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
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
			className={cn('w-full lg:w-1/2', className)}
			style={{ ...style }}
			{...rest}>
			<CardHeader>
				<CardTitle>Global Debit Kredit</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Source</TableHead>
							<TableHead>Rp.-</TableHead>
							<TableHead>%</TableHead>
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
									{cell.percentage ? (
										<TableCell
											rowSpan={3}
											className={`${
												cell.percentage > -1
													? 'text-green-600'
													: 'text-red-600'
											} font-bold text-center`}>
											{cell.percentage > -1 ? '▲' : '▼'}
											{formatPercentage(cell.percentage)}
										</TableCell>
									) : null}
								</TableRow>
							)}
						/>
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<CardDescription className='text-justify'>
					{`
					Total Debit Event HUT. STWP - 47 yaitu sebesar ${formatCurrency(
						data[0]?.total
					)}, Total Kredit Event HUT.
					STWP - 47 yaitu ${formatCurrency(data[1]?.total)} dengan
					Saldo akhir sejumlah ${formatCurrency(data[2]?.total)} atau
					${profitLoss > -1 ? 'total keuntungan' : 'total kerugian'} sejumlah
					`}
					<span
						className={
							profitLoss ? 'text-green-600' : 'text-red-600'
						}>
						{`	${profitLoss > -1 ? '+' : '-'}${formatPercentage(
							profitLoss
						)}`}
					</span>
				</CardDescription>
			</CardFooter>
		</Card>
	);
};

export default GlobalDebitKredit;
