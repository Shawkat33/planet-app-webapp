import React, { Suspense } from "react";
import Home from "../Home/Home";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";

const Spinner = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<span className="loading loading-spinner text-primary loading-xl scale-400 mx-auto"></span>
		</div>
	);
};

const Root = () => {
	const navigation = useNavigation();

	const isNavigating = Boolean(navigation.location);

	// Can't be used as Component if declared as constant, but can be used as a component when declared as a function

	return (
		<div className="min-h-screen flex flex-col inter">
			<Navbar></Navbar>
			<main className="flex-1 bg-[#F5F5F5]">
				{/* {isNavigating && <Spinner />} will not work when declared using const, but when with a function it can */}
				{isNavigating && <Spinner />}
				{!isNavigating && <Outlet></Outlet>}
			</main>
			<Footer></Footer>
		</div>
	);
};

export default Root;
