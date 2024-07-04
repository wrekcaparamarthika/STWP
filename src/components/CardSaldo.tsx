import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import { formatCurrency, formatPercentage } from '../lib/utils';
import { Skeleton } from './ui/skeleton';
interface Props {
	saldo: number;
	title: string;
	percentage?: number;
	isFetched: boolean;
	isDescriptionText?: boolean;
}
export const CardSaldo = ({
	isFetched,
	isDescriptionText = false,
	title,
	percentage,
	saldo,
}: Props) => {
	if (isFetched) {
		return (
			<Card className='w-full lg:w-1/2'>
				<CardHeader className='flex-col pb-1'>
					<CardTitle className='w-full text-lg capitalize'>
						<Skeleton className='w-full h-4' />
					</CardTitle>
					{isDescriptionText ? (
						<CardDescription className='w-full'>
							<Skeleton className='w-full h-4' />
						</CardDescription>
					) : null}
				</CardHeader>
				<CardContent className='text-3xl font-medium'>
					<Skeleton className='w-full h-14' />
				</CardContent>
			</Card>
		);
	}
	return (
		<Card className='w-full lg:w-1/2'>
			<CardHeader className='flex-col pb-1 space-y-0'>
				<CardTitle className='text-lg capitalize'>{title}</CardTitle>
				{percentage ? (
					<CardDescription
						className={`${
							percentage > -1 ? 'text-green-600' : 'text-red-600'
						}`}>
						{`
					${percentage > -1 ? '▲' : '▼'}${formatPercentage(percentage)} ${
							percentage ? 'Total Keuntungan' : 'Total Kerugian'
						}
				`}
					</CardDescription>
				) : null}
			</CardHeader>
			<CardContent className='text-3xl font-medium'>
				<span>{formatCurrency(saldo)}</span>
			</CardContent>
		</Card>
	);
};
