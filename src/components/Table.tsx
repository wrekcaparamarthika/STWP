import React from 'react';
import cn from '../utils/cn';
const TableHead = ({
	children,
	className,
	rowSpan,
	colSpan,
}: React.TdHTMLAttributes<HTMLTableCellElement>) => {
	return (
		<td
			colSpan={colSpan}
			className={cn(
				className,
				'py-3 text-center border border-slate-300'
			)}
			rowSpan={rowSpan}>
			{children}
		</td>
	);
};
const TableBody = ({
	className,
	children,
	rowSpan,
}: React.TdHTMLAttributes<HTMLTableCellElement>) => {
	return (
		<td
			rowSpan={rowSpan}
			className={cn(className, 'px-2 py-1 border border-slate-300')}>
			{children}
		</td>
	);
};

const Table = ({
	className,
	children,
}: React.TableHTMLAttributes<HTMLTableElement>) => {
	return (
		<table
			className={cn(
				className,
				'w-full m-auto lg:w-1/2 border border-slate-300 bg-white'
			)}>
			{children}
		</table>
	);
};

export default Table;
export { TableHead, TableBody, Table };
