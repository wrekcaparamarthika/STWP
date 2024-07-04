import { Table } from '@tanstack/react-table';
import { Input } from './ui/input';
interface Props<K> {
	table: Table<K>;
	placeholder: string;
	column: string;
}
export const FilterInput = <K,>({ table, placeholder, column }: Props<K>) => {
	return (
		<div>
			<div className='flex items-center py-4'>
				<Input
					placeholder={placeholder}
					value={
						(table.getColumn(column)?.getFilterValue() as string) ??
						''
					}
					onChange={(event) =>
						table
							.getColumn(column)
							?.setFilterValue(event.target.value)
					}
					className='w-full'
				/>
			</div>
		</div>
	);
};
