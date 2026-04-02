import { Link } from "react-router";
import downloadIcon from "../../assets/assets/icon-downloads.png";
import ratingStar from "../../assets/assets/icon-ratings.png";

const AppCard = ({ item }) => {
	const { id, image, title, downloads, ratingAvg } = item;

	const downloadCount = () => {
		if (downloads < 1_000_000_000) {
			return (downloads / 1_000_000).toFixed(1) + "M";
		} else if (downloads >= 1_000_000_000) {
			return (downloads / 1_000_000_000).toFixed(1) + "B";
		}
	};

	return (
		<Link to={`/apps/${id}`} onClick={() => window.scrollTo(0, 0)}>
			<div className="p-4 rounded-3xl flex flex-col gap-4 bg-white max-w-80 h-full inter justify-between shadow-lg transition-transform transition-shadow duration-100 hover:-translate-y-1 hover:shadow-xl">
				<div className="w-full h-full flex justify-center ">
					<img className="object-contain" src={image} alt="" />
				</div>

				<div className="flex flex-col">
					<h3 className="font-medium text-xl text-left mb-4">{title}</h3>
					<div className="flex justify-between">
						<div className="badge badge-ghost bg-[#F1F5E8] rounded-sm min-w-17 h-8 text-[#00D390] px-2.5 py-1.5 font-medium">
							<img className="w-4 h-4 mr-1" src={downloadIcon} alt="" />
							{downloadCount()}
						</div>
						<div className="badge badge-ghost bg-[#FFF0E1] rounded-sm min-w-13 h-8 text-[#FF8811] px-2.5 py-1.5 font-medium">
							<img className="w-4 h-4 mr-1" src={ratingStar} alt="" />
							{ratingAvg}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default AppCard;
