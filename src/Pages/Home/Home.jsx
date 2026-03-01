import React from "react";
import heroImg from "../../assets/assets/hero.png";
import playStore from "../../../public/assets/Google Play Store.png";
import appStore from "../../../public/assets/Apple App Store.png";
import AppCard from "../../Components/AppCard/AppCard";

const Home = () => {
	return (
		<div className="inter flex flex-col justify-center text-center py-20">
			<h1 className="text-7xl leading-[84px] font-bold mb-4 opacity-90">
				We Build<br></br> <span className="color-text">Productive</span> Apps
			</h1>

			<h3 className="opacity-90 text-[#627382] text-xl leading-8 mb-10">
				At HERO.IO, we craft innovative apps designed to make everyday life
				simpler, smarter, and more exciting.<br></br> Our goal is to turn your
				ideas into digital experiences that truly make an impact.
			</h3>

			<div className="flex justify-center gap-4 mb-10">
				<button className="btn btn-outline rounded-sm border-[#D2D2D2] font-semibold text-xl px-6 py-7">
					<img className="w-8 h-8 mr-2.5" src={playStore} alt="" />
					Google Play
				</button>
				<button className="btn btn-outline rounded-sm border-[#D2D2D2] font-semibold text-xl px-6 py-7">
					<img className="w-12 h-12 mr-2.5" src={appStore} alt="" />
					App Store
				</button>
			</div>

			<img className="mx-auto" src={heroImg} alt="" />

			<div className="p-20 custom-bg text-white">
				<h2 className="font-bold text-5xl mb-10">
					Trusted By Millions, Built For You
				</h2>
				<div className="flex gap-6 justify-center">
					<div className="flex flex-col gap-4 px-18">
						<h4 className="opacity-80">Total Downloads</h4>
						<h3 className="font-extrabold text-6xl">29.6M</h3>
						<h4 className="opacity-80">21% More Than Last Month</h4>
					</div>
					<div className="flex flex-col gap-4 px-18">
						<h4 className="opacity-80">Total Reviews</h4>
						<h3 className="font-extrabold text-6xl">906K</h3>
						<h4 className="opacity-80">46% More Than Last Month</h4>
					</div>
					<div className="flex flex-col gap-4 px-18">
						<h4 className="opacity-80">Active Apps</h4>
						<h3 className="font-extrabold text-6xl">132+</h3>
						<h4 className="opacity-80">31 More Will Launch</h4>
					</div>
				</div>
			</div>

			<div className="p-20">
				<h2 className="font-bold text-5xl mb-4">Trending Apps</h2>
				<h4 className="text-xl text-[#627382] mb-10">
					Explore All Trending Apps on the Market developed by us
				</h4>
				<AppCard></AppCard>
			</div>
		</div>
	);
};

export default Home;
