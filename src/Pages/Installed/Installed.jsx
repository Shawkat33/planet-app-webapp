import React, { useEffect, useMemo, useState } from "react";

import { getInstalledApps, removeInstalledApps } from "../../Utils/addToDB";
import InstalledCard from "../../Components/InstalledCard/InstalledCard";
import { useLoaderData } from "react-router";

const Installed = () => {
	const [installedApps, setInstalledApps] = useState(getInstalledApps());

	const [sorted, setSorted] = useState("");

	const allAppData = useLoaderData();

	useEffect(() => {
		const handleStorage = () => {
			setInstalledApps(getInstalledApps());
		};

		window.addEventListener("storage", handleStorage);

		return () => window.removeEventListener("storage", handleStorage);
	}, []);

	const installedAppsData = useMemo(() => {
		const filtered = allAppData.filter((app) =>
			installedApps.includes(app.id.toString()),
		);
		if (sorted === "Ascending") {
			return [...filtered].sort((a, b) => {
				return a.downloads - b.downloads;
			});
		}
		if (sorted === "Descending") {
			return [...filtered].sort((a, b) => {
				return b.downloads - a.downloads;
			});
		}

		return filtered;
	}, [installedApps, sorted, allAppData]);

	const handleRemove = (id) => {
		removeInstalledApps(id);
		setInstalledApps(getInstalledApps());
	};

	return (
		<div className="flex flex-col justify-center text-center md:px-10 lg:px-15 xl:px-20 sm:px-5 px-2 pt-20">
			<h2 className="inter font-bold text-5xl text-[#001931] mb-4 mx-auto">
				Your Installed Apps
			</h2>
			<h3 className="inter text-xl text-[#627382]">
				Explore All Trending Apps on the Market developed by us
			</h3>
			<div className="md:px-20 sm:px-5 px-2 pt-10 pb-20">
				<div
					className="flex flex-col sm:flex-row max-lg:items-center
				max-lg:gap-4 justify-between"
				>
					<h4 className="inter font-semibold text-2xl leading-8 text-[#001931]">
						({installedApps.length}) Apps Found
					</h4>
					{/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
					{/* For TSX uncomment the commented types below */}
					<button
						className="btn"
						popoverTarget="popover-1"
						style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
					>
						Sort By Downloads: {sorted ? sorted : "None"}
					</button>

					<ul
						className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
						popover="auto"
						id="popover-1"
						style={
							{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */
						}
					>
						<li>
							<a onClick={() => setSorted("Ascending")}>
								Ascending: Lower Downloads First
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									setSorted("Descending");
								}}
							>
								Descending: Higher Downloads First
							</a>
						</li>
					</ul>
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
