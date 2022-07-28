/** @format */

import { Link } from "@remix-run/react";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 z-10 flex h-32 w-full flex-row justify-around border-b-2 border-slate-100 bg-slate-50 shadow-xl dark:bg-slate-700">
			<div className="w-1/5 bg-slate-400"></div>
			<div className="hidden flex-row items-center justify-center gap-4 bg-red-400 md:flex md:w-2/5">
				<MyNavLink to="/home">Home</MyNavLink>
				<MyNavLink to="/about">About</MyNavLink>
				<MyNavLink to="/weather">Weather</MyNavLink>
				<MyNavLink to="/contact">Contact</MyNavLink>
			</div>
			<div className="flex w-3/5 flex-row items-center justify-center bg-green-400 px-4 md:w-1/5"></div>
		</nav>
	);
};

export default Navbar;
