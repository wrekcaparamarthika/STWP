import React from 'react';
interface Props<T> {
	of: T[];
	render: (item: T, index: number) => React.ReactNode;
}
const Map = <T,>({ of, render }: Props<T>) => {
	return React.Children.toArray(of.map((item, index) => render(item, index)));
};
export default Map;
