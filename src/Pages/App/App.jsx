import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import AppErrorPage from "../AppErrorPage/AppErrorPage";
import downloadIcon from "../../assets/assets/icon-downloads.png";
import ratingIcon from "../../assets/assets/icon-ratings.png";
import reviewIcon from "../../assets/assets/icon-review.png";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { getInstalledApps, setInstalledApps } from "../../Utils/addToDB";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
	const params = useParams();

	const data = useLoaderData();

	const [installedAppsList, setInstalledAppsList] =
		useState(getInstalledApps());

	// console.log(data);
	// console.log(typeof params.appId);

	if (!data.some((app) => app.id === parseInt(params.appId))) {
		return <AppErrorPage></AppErrorPage>;
	}

	const [appData] = data.filter((app) => app.id === parseInt(params.appId));
	// console.log(appData);

	const {
		title,
		id,
		image,
		description,
		companyName,
		size,
		downloads,
		reviews,
		ratingAvg,
		ratings,
	} = appData;

	// console.log(image);

	const downloadCount = () => {
		if (downloads < 1_000_000_000) {
			return (downloads / 1_000_000).toFixed(1) + "M";
		} else if (downloads >= 1_000_000_000) {
			return (downloads / 1_000_000_000).toFixed(1) + "B";
		}
	};

	const reviewCount = () => {
		if (reviews < 1_000_000_000) {
			return (reviews / 1_000_000).toFixed(1) + "M";
		} else if (reviews >= 1_000_000_000) {
			return (reviews / 1_000_000_000).toFixed(1) + "B";
		}
	};

	// #region Sample data
	const dataG = [...ratings].reverse();

	// #endregion
	const SimpleBarChart = () => {
		return (
			<div className="w-full h-50 sm:h-75 xl:h-100">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={dataG}
						layout="vertical" // makes bars horizontal
						margin={{ top: 20, right: 40, left: 0, bottom: 5 }}
					>
						<XAxis type="number" axisLine={false} tickLine={false} />
						<YAxis
							type="category"
							dataKey="name"
							axisLine={false}
							tickLine={false}
							tick={{ className: "text-[#627382]" }}
						/>
						<Tooltip />
						<Bar dataKey="count" fill="#FF8811" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	};

	const handleInstall = () => {
		setInstalledAppsList([String(id), ...installedAppsList]);
	};

	return (
		<div className="p-3 md:p-8 xl:p-20">
			{/* Heading */}
			<div className="flex flex-col lg:flex-row items-center gap-10 w-full">
				<div className="max-w-87.5">
					<img
						className="w-full h-auto bg-white rounded-xl"
						src={image}
						alt=""
					/>
				</div>

				<div className="w-full flex flex-col">
					<div className="mb-7.5">
						<h2 className="text-[32px] font-bold">{title}</h2>

						<h4 className="text-[20px] leading-8 text-[#627382]">
							Developed by <span className="color-text">{companyName}</span>
						</h4>
					</div>

					<hr className="bg-[#001931] opacity-20 border"></hr>

					<div className="flex flex-wrap gap-6 my-7.5 max-lg:justify-center">
						<div className="flex flex-col gap-2 items-center text-center">
							<img
								className="size-10"
								src={downloadIcon}
								alt="Downloads Icon"
							/>
							<h4 className="leading-6 text-[#001931]">Downloads</h4>
							<h2 className="text-[40px] leading-10 font-extrabold">
								{downloadCount()}
							</h2>
						</div>
						<div className="flex flex-col gap-2 items-center text-center">
							<img className="size-10" src={ratingIcon} alt="Rating Icon" />
							<h4 className="leading-6 text-[#001931]">Average Ratings</h4>
							<h2 className="text-[40px] leading-10 font-extrabold">
								{ratingAvg}
							</h2>
						</div>
						<div className="flex flex-col gap-2 items-center text-center">
							<img className="size-10" src={reviewIcon} alt="Review Icon" />
							<h4 className="leading-6 text-[#001931]">Reviews</h4>
							<h2 className="text-[40px] leading-10 font-extrabold">
								{reviewCount()}
							</h2>
						</div>
					</div>
					<button
						disabled={installedAppsList.includes(String(id))}
						onClick={() => {
							(setInstalledApps(id),
								handleInstall(),
								toast.success(`${title} Installed!`));
						}}
						className="rounded-sm bg-[#00D390] text-white px-5 py-3.5 font-semibold text-[20px] hover:brightness-105 hover:scale-105 cursor-pointer duration-75 active:brightness-90 active:scale-100 self-center lg:self-start disabled:bg-gray-300 disabled:cursor-not-allowed"
					>
						{installedAppsList.includes(String(id))
							? "Installed"
							: `Install Now (${size} MB)`}
					</button>
				</div>
			</div>
			<hr className="my-10 bg-[#001931] opacity-20 border" />

			{/* Rating */}

			<div className="">
				<h2 className="text-[#001931] text-2xl font-semibold">Ratings</h2>

				{SimpleBarChart()}
			</div>

			<hr className="my-10 bg-[#001931] opacity-20 border" />

			{/* Description */}

			<div className="">
				<h2 className="text-[#001931] text-2xl font-semibold mb-6">
					Description
				</h2>

				<span className="text-[#627382] text-xl leading-8">{description}</span>
			</div>
			<ToastContainer />
		</div>
	);
};

export default App;
