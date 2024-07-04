import React from 'react';

interface Props<K> {
	of: K[];
	render: (item: K, index: number) => React.ReactNode;
}
export const MapComponents = <K,>({ of, render }: Props<K>) => {
	return React.Children.toArray(of.map((item, index) => render(item, index)));
};
