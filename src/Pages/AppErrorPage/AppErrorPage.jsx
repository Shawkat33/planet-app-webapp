import React from "react";
import img from "../../../src/assets/assets/App-Error.png";
import { Link } from "react-router";

const AppErrorPage = () => {
	return (
		<div className="flex flex-col text-center items-center gap-4 px-5 py-10 2xl:p-20">
			<img className="max-w-125 max-md:max-w-80 mx-5 px-5" src={img} alt="" />

			<h1 className="text-5xl leading-15 font-semibold text-[#001931]">
				Oops, App Not Found!
			</h1>

			<h4 className="text-5 leading-8 text-[#627382]">
				The App you are looking for is not available
			</h4>

			<Link to="/apps">
				<button className="custom-btn">Go Back!</button>
			</Link>
		</div>
	);
};

export default AppErrorPage;
