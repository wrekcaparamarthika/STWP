import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Table } from '@tanstack/react-table';
import { Button } from './ui/button';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { MapComponents } from '../lib/MapComponents';

interface Props<K> {
	table: Table<K>;
}
export const ColumnToggle = <K,>({ table }: Props<K>) => {
	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='sm'
					className='h-8 ml-auto lg:flex'>
					<MixerHorizontalIcon className='w-4 h-4 mr-2' />
					Select Columns
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='w-[150px]'>
				<DropdownMenuLabel>Columns</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<MapComponents
					of={table
						.getAllColumns()
						.filter(
							(column) =>
								typeof column.accessorFn !== 'undefined' &&
								column.getCanHide()
						)}
					render={(column) => (
						<DropdownMenuCheckboxItem
							key={column.id}
							checked={column.getIsVisible()}
							onCheckedChange={(value) =>
								column.toggleVisibility(!!value)
							}>
							{column.id}
						</DropdownMenuCheckboxItem>
					)}
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
