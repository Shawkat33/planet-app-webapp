import React from "react";
import { Download } from "lucide-react";
import { Link } from "react-router";

const InstalledCard = ({ installedApp, handleRemove }) => {
	// console.log(installedApp);

	const { id, image, title, downloads, ratingAvg, size } = installedApp;

	const downloadCount = () => {
		if (downloads < 1_000_000_000) {
			return (downloads / 1_000_000).toFixed(1) + "M";
		} else if (downloads >= 1_000_000_000) {
			return (downloads / 1_000_000_000).toFixed(1) + "B";
		}
	};

	return (
		<Link to={`/apps/${id}`}>
			<div className="w-full rounded-md bg-white p-4 ">
				<div className="flex flex-wrap gap-4">
					<img
						className="w-20 h-20 rounded-md bg-[#D9D9D9]"
						src={image}
						alt=""
					/>

					<div className="flex flex-col text-left gap-4">
						<h3 className="font-medium text-[#001931] text-xl">{title}</h3>

						<div className="flex gap-4">
							<span className="text-[#00D390]">
								<Download className="inline scale-75" /> {downloadCount()}
							</span>
							<span className="text-[#FF8811]">
								<i class="fa-solid fa-star mr-2"></i>
								{ratingAvg}
							</span>
							<span className="text-[#627382]">{size} MB</span>
						</div>
					</div>

					<div className="ml-auto self-center">
						<button
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								handleRemove(id);
							}}
							className="rounded-sm bg-[#00D390] text-white px-5 py-3.5 font-semibold text-[20px] hover:brightness-105 hover:scale-105 cursor-pointer duration-75 active:brightness-90 active:scale-100"
						>
							Uninstall
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default InstalledCard;
