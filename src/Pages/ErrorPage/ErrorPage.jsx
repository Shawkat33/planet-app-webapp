import React from "react";
import img from "../../../src/assets/assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
	return (
		<div className="flex flex-col text-center items-center gap-4 px-5 py-10 2xl:p-20">
			<img className="max-w-125 max-md:max-w-80 mx-5 px-5" src={img} alt="" />

			<h1 className="text-5xl leading-15 font-semibold text-[#001931]">
				Oops, Page Not Found!
			</h1>

			<h4 className="text-5 leading-8 text-[#627382]">
				The page you are looking for is not available
			</h4>

			<Link to="/">
				<button className="custom-btn cursor-pointer">Go Back!</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
