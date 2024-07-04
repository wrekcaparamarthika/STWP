import React from 'react';
import { Api, DataSponsor } from '../interface/EventOverview';
import { DEFAULT_VALUE_API } from '../constants/default';
import { API_REST_API } from '../constants/api';
import {
	Card,
	CardContent,
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
import ButtonPagination from '../components/ButtonPagination';
import { HeaderToggle } from '../components/HeaderToggle';
import { ColumnToggle } from '../components/ColumnToggle';
import { FilterInput } from '../components/FilterInput';
import { getDropDownValues, request } from '../lib/utils';
import { DataTableFacetedFilter } from '../components/DataTableFacetedFilter';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '../components/ui/skeleton';
const columnHelper = createColumnHelper<DataSponsor>();
const columns = [
	columnHelper.accessor('NO', {
		cell: (info) => info.row.index + 1,
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title='NO'
			/>
		),
	}),
	columnHelper.accessor('NAMA', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title='NAMA'
			/>
		),
	}),
	columnHelper.accessor('STATUS', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title='STATUS'
			/>
		),
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	}),
	columnHelper.accessor('DANA', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title='DANA'
			/>
		),
	}),
	columnHelper.accessor('JASA', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title='JASA'
			/>
		),
	}),
	columnHelper.accessor('BARANG', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title='BARANG'
			/>
		),
	}),
	columnHelper.accessor('DEMAND', {
		cell: (info) => info.getValue(),
		header: ({ column }) => (
			<HeaderToggle
				column={column}
				title='DEMAND'
			/>
		),
	}),
];

const Sponsorship = () => {
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	// const [data, setData] = React.useState<DataSponsor[]>(
	// 	DEFAULT_VALUE_SPONSOR
	// );
	// React.useEffect(() => {
	// 	async function init() {
	// 		const sponsor = await fetchData(API_REST_API);
	// 		if (sponsor) setData(sponsor.sponsor);
	// 	}
	// 	init();
	// }, []);
	const { data, isFetched } = useQuery({
		queryKey: ['api'],
		queryFn: () => request<Api>(API_REST_API),
		initialData: DEFAULT_VALUE_API,
	});
	const table = useReactTable({
		data: data.sponsor,
		columns,
		//row
		getCoreRowModel: getCoreRowModel(),
		//pagination
		getPaginationRowModel: getPaginationRowModel(),
		//sorting
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		//filter
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		//filter faced
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
		initialState: { pagination: { pageSize: 5 } },
	});
	if (!isFetched) {
		return (
			<Card className='w-full lg:w-1/2'>
				<CardHeader>
					<CardTitle className='capitalize'>
						<Skeleton className='w-full h-4' />
					</CardTitle>
					<FilterInput
						table={table}
						placeholder='Filter nama...'
						column='NAMA'
					/>
					<div className='flex items-center justify-between gap-1.5'>
						<div className='flex-col'>
							{table.getColumn('STATUS') && (
								<DataTableFacetedFilter
									column={table.getColumn('STATUS')}
									title='STATUS'
									options={getDropDownValues(
										data.sponsor,
										'STATUS'
									)}
								/>
							)}
						</div>
						<ColumnToggle table={table} />
					</div>
				</CardHeader>
				<CardContent className='mx-4 border rounded-md'>
					<Table style={{ width: table.getTotalSize() }}>
						<TableHeader>
							<TableRow>
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
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter className='px-2 pt-2 pb-4 m-0'>
					<ButtonPagination table={table} />
				</CardFooter>
			</Card>
		);
	}

	return (
		<Card className='w-full lg:w-1/2'>
			<CardHeader>
				<CardTitle className='capitalize'>daftar sponsorship</CardTitle>
				<FilterInput
					table={table}
					placeholder='Filter nama...'
					column='NAMA'
				/>
				<div className='flex items-center justify-between gap-1.5'>
					<div className='flex-col'>
						{table.getColumn('STATUS') && (
							<DataTableFacetedFilter
								column={table.getColumn('STATUS')}
								title='STATUS'
								options={getDropDownValues(
									data.sponsor,
									'STATUS'
								)}
							/>
						)}
					</div>
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
											<TableCell key={cell.id}>
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
			<CardFooter className='px-2 pt-2 pb-4 m-0'>
				<ButtonPagination table={table} />
			</CardFooter>
		</Card>
	);
};

export default Sponsorship;
