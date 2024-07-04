import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../components/ui/table';
import { API_REST_API } from '../constants/api';
import { Api, DataBendahara } from '../interface/EventOverview';
import { DEFAULT_VALUE_API } from '../constants/default';
import {
	ColumnFiltersState,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import { MapComponents } from '../lib/MapComponents';
import { IFElseComponents } from '../lib/IFElseComponents';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../components/ui/card';
import ButtonPagination from '../components/ButtonPagination';
import { ColumnToggle } from '../components/ColumnToggle';
import { HeaderToggle } from '../components/HeaderToggle';
import { FilterInput } from '../components/FilterInput';
import { DataTableFacetedFilter } from '../components/DataTableFacetedFilter';
import { getDropDownValues, request } from '../lib/utils';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '../components/ui/skeleton';

const columnHelper = createColumnHelper<DataBendahara>();
const columns = [
	columnHelper.accessor('NO', {
		cell: (info) => info.row.index + 1,
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title={`NO`}
			/>
		),
	}),
	columnHelper.accessor('TANGGAL', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title={`TANGGAL`}
			/>
		),
		minSize: 400,
	}),
	columnHelper.accessor('KET', {
		cell: (info) => info.getValue(),
		minSize: 50,
		maxSize: 100,
	}),

	columnHelper.accessor('PIC', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title={`PIC`}
			/>
		),
		minSize: 50,
		maxSize: 100,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	}),
	columnHelper.accessor('DEBET', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title={`DEBET`}
			/>
		),
		meta: {
			filterVariant: 'range',
		},
	}),
	columnHelper.accessor('KREDIT', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title={`KREDIT`}
			/>
		),
	}),
	columnHelper.accessor('SALDO', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title={`SALDO`}
			/>
		),
	}),
];

const Bendahara = () => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);
	// const [data, setData] = React.useState<DataBendahara[]>(
	// 	DEFAULT_VALUE_DATA_BENDAHARA
	// );
	// React.useEffect(() => {
	// 	async function init() {
	// 		const getData = await fetchData(API_REST_API);
	// 		if (getData) setData(getData.bendahara);
	// 	}
	// 	init();
	// }, [data]);
	const { data, isFetched } = useQuery({
		queryKey: ['api'],
		queryFn: () => request<Api>(API_REST_API),
		initialData: DEFAULT_VALUE_API,
	});
	const table = useReactTable({
		data: data.bendahara,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		autoResetPageIndex: false,
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),

		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedRowModel: getFacetedRowModel(),

		state: {
			sorting: sorting,
			columnFilters,
		},
		defaultColumn: {
			minSize: 50,
			maxSize: 500,
		},
		initialState: {
			pagination: { pageSize: 5 },
		},
	});
	if (!isFetched) {
		return (
			<Card className='w-full rounded-md sm:w-1/2'>
				<CardHeader className='pb-4'>
					<CardTitle className='capitalize'>
						<Skeleton className='w-full h-4' />
					</CardTitle>
					<FilterInput
						table={table}
						placeholder='Filter ket...'
						column='KET'
					/>
					<div className='flex items-center justify-between gap-1.5'>
						{table.getColumn('PIC') && (
							<DataTableFacetedFilter
								column={table.getColumn('PIC')}
								options={getDropDownValues(
									data.bendahara,
									'PIC'
								)}
								title='PIC'
							/>
						)}
						<ColumnToggle table={table} />
					</div>
				</CardHeader>
				<CardContent className='mx-4 border rounded-md'>
					<Table style={{ width: table.getTotalSize() }}>
						<TableHeader>
							<TableRow>
								<TableHead>
									<Skeleton className='w-full h-4 ' />
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>
									<Skeleton className='w-full h-4' />
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter className='p-2 pb-4'>
					<ButtonPagination table={table} />
				</CardFooter>
			</Card>
		);
	}
	return (
		<Card className='w-full rounded-md sm:w-1/2'>
			<CardHeader className='pb-4'>
				<CardTitle className='capitalize'>rincian bendahara</CardTitle>
				<FilterInput
					table={table}
					placeholder='Filter ket...'
					column='KET'
				/>
				<div className='flex items-center justify-between gap-1.5'>
					{table.getColumn('PIC') && (
						<DataTableFacetedFilter
							column={table.getColumn('PIC')}
							options={getDropDownValues(data.bendahara, 'PIC')}
							title='PIC'
						/>
					)}
					<ColumnToggle table={table} />
				</div>
			</CardHeader>
			<CardContent className='mx-4 border rounded-md'>
				<Table style={{ width: table.getTotalSize() }}>
					<TableHeader>
						<MapComponents
							of={table.getHeaderGroups()}
							render={(headerGroup) => (
								<TableRow key={headerGroup.id}>
									<MapComponents
										of={headerGroup.headers}
										render={(header) => (
											<TableHead key={header.id}>
												<IFElseComponents
													state={header.isPlaceholder}
													stateTrue={null}
													stateFalse={flexRender(
														header.column.columnDef
															.header,
														header.getContext()
													)}
												/>
											</TableHead>
										)}
									/>
								</TableRow>
							)}
						/>
					</TableHeader>
					<TableBody>
						<MapComponents
							of={table.getRowModel().rows}
							render={(row) => (
								<TableRow key={row.id}>
									<MapComponents
										of={row.getVisibleCells()}
										render={(cell) => (
											<TableCell>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										)}
									/>
								</TableRow>
							)}
						/>
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter className='p-2 pb-4'>
				<ButtonPagination table={table} />
			</CardFooter>
		</Card>
	);
};

export default Bendahara;
