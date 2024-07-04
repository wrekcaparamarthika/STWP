import React from 'react';

interface Props {
	state: boolean;
	stateTrue: React.ReactNode;
	stateFalse: React.ReactNode;
}
export const IFElseComponents = ({ state, stateFalse, stateTrue }: Props) => {
	return state ? stateTrue : stateFalse;
};
