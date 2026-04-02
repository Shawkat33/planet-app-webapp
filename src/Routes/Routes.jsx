import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Apps from "../Pages/Apps/Apps";
import Installed from "../Pages/Installed/Installed";
import App from "../Pages/App/App";
import AppErrorPage from "../Pages/AppErrorPage/AppErrorPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				loader: async () => {
					const res = await fetch("/data.json");
					const data = await res.json();
					return data;
				},
				element: <Home />,
			},
			{
				path: "/home",
				loader: async () => {
					const res = await fetch("/data.json");
					const data = await res.json();
					return data;
				},
				element: <Home />,
			},
			{
				path: "/apps",
				element: <Apps />,
				loader: async () => {
					const res = await fetch("/data.json");
					const data = await res.json();
					return data;
				},
			},
			{
				path: "/installed",
				element: <Installed />,
				loader: async () => {
					const res = await fetch("/data.json");
					const data = await res.json();
					return data;
				},
			},
			{ path: "*", element: <ErrorPage /> },
			{
				path: "/apps/:appId",
				loader: async () => {
					const res = await fetch("/data.json");
					const data = await res.json();
					return data;
				},
				element: <App />,
			},
		],
	},
]);
