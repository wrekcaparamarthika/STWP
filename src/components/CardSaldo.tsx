import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import { formatCurrency, formatPercentage } from '../lib/utils';
interface Props {
	saldo: number;
	title: string;
	percentage?: number;
}
export const CardSaldo = ({ title, percentage, saldo }: Props) => {
	return (
		<Card className='w-full lg:w-1/2'>
			<CardHeader className='flex-row items-center pb-1'>
				<CardTitle className='text-lg capitalize'>{title}</CardTitle>
				{percentage ? (
					<CardDescription
						className={`${
							percentage > -1 ? 'text-green-600' : 'text-red-600'
						}`}>
						&nbsp;{percentage > -1 ? '▲' : '▼'}
						{formatPercentage(percentage)}
					</CardDescription>
				) : null}
			</CardHeader>
			<CardContent className='text-3xl font-medium'>
				<span>{formatCurrency(saldo)}</span>
			</CardContent>
		</Card>
	);
};
