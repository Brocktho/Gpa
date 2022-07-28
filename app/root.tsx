/** @format */

import { json } from "@remix-run/node";
import Navbar from "~/components/Navigation/Navbar";
import tailwind from "./styles/app.css";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: tailwind }];
};

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "New Remix App",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Navbar />
				<div className="mt-32 flex h-full w-full flex-col items-center gap-4">
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</div>
			</body>
		</html>
	);
}
