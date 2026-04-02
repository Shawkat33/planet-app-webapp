import React, { useState, Suspense } from "react";
import AppCard from "../../Components/AppCard/AppCard";
import { useLoaderData, useNavigate, Link } from "react-router";

const Apps = () => {
	const data = useLoaderData();
	const totalAppNumber = data.length;
	const [filtered, setFiltered] = useState(data);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSearch = (e) => {
		setLoading(true); //Starts Spinner
		console.log(e.target.value);
		const searchValue = e.target.value;
		const filteredData = data.filter(
			(app) =>
				app.title.toLowerCase().slice(0, searchValue.length) === searchValue,
		);
		setFiltered(filteredData);
		setTimeout(() => {
			setLoading(false); //Stops Spinner
			if (filteredData.length === 0 && e.key === "Enter") {
				navigate(`/apps/${searchValue}`);
			}
		}, 300);
	};

	return (
		<div className="flex flex-col justify-center text-center md:px-10 lg:px-15 xl:px-20 sm:px-5 px-2 pt-20">
			<h2 className="inter font-bold text-5xl text-[#001931] mb-4 mx-auto">
				Our All Applications
			</h2>
			<h3 className="inter text-xl text-[#627382]">
				Explore All Apps on the Market developed by us. We code for Millions
			</h3>
			<div className="md:px-10 lg:px-15 xl:px-50 sm:px-5 px-2 pt-10 pb-20">
				<div
					className="flex flex-col sm:flex-row max-lg:items-center
				max-lg:gap-4 justify-between"
				>
					<h4 className="inter font-semibold text-2xl leading-8 text-[#001931]">
						({totalAppNumber}) Apps Found
					</h4>
					<label className="input">
						<svg
							className="h-[1em] opacity-50"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<path d="m21 21-4.3-4.3"></path>
							</g>
						</svg>
						<input
							type="search"
							required
							placeholder="Search Apps"
							onKeyUp={handleSearch}
						/>
					</label>
				</div>

				{loading ? (
					<span className="loading loading-spinner text-primary loading-xl"></span>
				) : filtered.length === 0 ? (
					<>
						<h2 className="text-5xl leading-15 font-semibold text-[#627382] text-center">
							No Apps Found
						</h2>
						<Link to="/apps" onClick={() => window.scrollTo(0, 0)}>
							<div className="custom-btn mt-10 cursor-pointer">
								See All Apps
							</div>
						</Link>
					</>
				) : (
					<div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-items-center mx-auto max-w-fit pt-4 items-stretch">
						<Suspense
							fallback={
								<span className="loading loading-spinner text-primary loading-xl"></span>
							}
						>
							{filtered.map((item) => (
								<AppCard key={item.id} item={item}></AppCard>
							))}
						</Suspense>
					</div>
				)}
			</div>
		</div>
	);
};

export default Apps;
