import React from "react";
import downloadIcon from "../../assets/assets/icon-downloads.png";
import tinder from "../../../public/assets/Tinder.png";
import ratingStar from "../../assets/assets/icon-ratings.png";

const AppCard = () => {
	return (
		<div className="p-4 rounded-sm flex flex-col gap-4 bg-white w-80 h-102 inter">
			<div className="rounded-sm bg-[#D9D9D9]">
				<img src={tinder} alt="" />
			</div>
			<h3 className="font-medium text-xl text-left">
				Forest: Focus on Productivity
			</h3>
			<div className="flex justify-between">
				<div className="badge badge-ghost bg-[#F1F5E8] rounded-sm w-17 h-8 text-[#00D390] px-2.5 py-1.5 font-medium">
					<img className="w-4 h-4 mr-1" src={downloadIcon} alt="" />
					9M
				</div>
				<div className="badge badge-ghost bg-[#FFF0E1] rounded-sm w-13 h-8 text-[#FF8811] px-2.5 py-1.5 font-medium">
					<img className="w-4 h-4 mr-1" src={ratingStar} alt="" />5
				</div>
			</div>
		</div>
	);
};

export default AppCard;
