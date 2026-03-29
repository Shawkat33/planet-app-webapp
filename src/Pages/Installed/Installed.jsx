import React, { useEffect, useState } from "react";

import { getInstalledApps, removeInstalledApps } from "../../Utils/addToDB";
import InstalledCard from "../../Components/InstalledCard/InstalledCard";
import { useLoaderData } from "react-router";

const Installed = () => {
	const [installedApps, setInstalledApps] = useState(getInstalledApps());

	useEffect(() => {
		const handleStorage = () => {
			setInstalledApps(getInstalledApps());
		};

		window.addEventListener("storage", handleStorage);

		return () => window.removeEventListener("storage", handleStorage);
	}, []);

	const allAppData = useLoaderData();

	const handleRemove = (id) => {
		removeInstalledApps(id);
		setInstalledApps(getInstalledApps());
	};

	const installedAppsData = allAppData.filter((app) =>
		installedApps.includes(app.id.toString()),
	);

	return (
		<div className="flex flex-col justify-center text-center md:px-10 lg:px-15 xl:px-20 sm:px-5 px-2 pt-20">
			<h2 className="inter font-bold text-5xl text-[#001931] mb-4 mx-auto">
				Our All Applications
			</h2>
			<h3 className="inter text-xl text-[#627382]">
				Explore All Apps on the Market developed by us. We code for Millions
			</h3>
			<div className="md:px-20 sm:px-5 px-2 pt-10 pb-20">
				<div
					className="flex flex-col sm:flex-row max-lg:items-center
				max-lg:gap-4 justify-between"
				>
					<h4 className="inter font-semibold text-2xl leading-8 text-[#001931]">
						({installedApps.length}) Apps Found
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
						<input type="search" required placeholder="Search Apps" />
					</label>
				</div>
				<div className="mt-4 flex flex-col gap-4">
					{installedAppsData.map((installedApp) => (
						<InstalledCard
							key={installedApp.id}
							installedApp={installedApp}
							handleRemove={() => handleRemove(installedApp.id)}
						></InstalledCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Installed;
