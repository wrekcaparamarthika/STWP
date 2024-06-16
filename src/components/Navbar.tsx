import React from 'react';
import cn from '../utils/cn';
type NavbarProps = React.ComponentProps<'nav'>;
const Navbar = ({ className }: NavbarProps) => {
	return (
		<nav className={cn(className, 'h-20 bg-black')}>
			<h1>test</h1>
		</nav>
	);
};

export default Navbar;
