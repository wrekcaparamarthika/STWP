import formatCurrency from '../utils/FormatCurrency';
import formatPercentage from '../utils/FormatPercentage';
interface Saldo {
	saldo: number;
	text: string;
	percentage?: number;
}
const CardSaldo = ({ saldo, text, percentage }: Saldo) => {
	return (
		<div className='flex flex-col w-full px-2 py-5 m-auto border lg:w-1/2 border-slate-300 bg-slate-50'>
			<span className='text-lg capitalize'>{text}</span>
			{percentage ? (
				<span
					className={`${
						percentage > 1 ? 'text-green-600' : 'text-red-600'
					}`}>
					{percentage > 1 ? '+' : '-'}&nbsp;
					{formatPercentage(percentage)}
				</span>
			) : null}
			<span className='text-3xl font-medium'>
				{formatCurrency(saldo)}
			</span>
		</div>
	);
};
export default CardSaldo;
