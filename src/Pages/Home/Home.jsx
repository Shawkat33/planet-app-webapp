import heroImg from "../../assets/assets/hero.png";
import playStore from "/assets/Google Play Store.png";
import appStore from "/assets/Apple App Store.png";
import AppCard from "../../Components/AppCard/AppCard";
import { Link, useLoaderData } from "react-router";
import { Suspense } from "react";

const Home = () => {
	const data = useLoaderData();

	const getRandomApps = (arr, count) => {
		return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
	};

	let randomApps = getRandomApps(data, 10);

	return (
		<div className="inter flex flex-col justify-center text-center py-20">
			<div className="px-5">
				<h1 className="text-6xl md:text-7xl leading-15 md:leading-21 font-bold mb-4 opacity-90">
					We Build<br></br> <span className="color-text">Productive</span> Apps
				</h1>

				<h3 className="opacity-90 text-[#627382] text-xl leading-8 mb-10">
					At HERO.IO, we craft innovative apps designed to make everyday life
					simpler, smarter, and more exciting.<br></br> Our goal is to turn your
					ideas into digital experiences that truly make an impact.
				</h3>

				<div className="flex justify-center gap-4 mb-10 flex-col md:flex-row">
					<Link
						target="_blank"
						rel="noopener noreferrer"
						to="https://play.google.com/store/apps"
					>
						<button className="btn btn-outline rounded-sm border-[#D2D2D2] font-semibold text-xl px-6 py-7">
							<img className="w-8 h-8 mr-2.5" src={playStore} alt="" />
							Google Play
						</button>
					</Link>

					<Link
						target="_blank"
						rel="noopener noreferrer"
						to="https://www.apple.com/app-store/"
					>
						<button className="btn btn-outline rounded-sm border-[#D2D2D2] font-semibold text-xl px-6 py-7">
							<img className="w-12 h-12 mr-2.5" src={appStore} alt="" />
							App Store
						</button>
					</Link>
				</div>
			</div>

			<img className="mx-auto" src={heroImg} alt="" />

			<div className="2xl:p-20 p-10 custom-bg text-white">
				<h2 className="font-bold text-5xl mb-10">
					Trusted By Millions, Built For You
				</h2>
				<div className="flex gap-6 justify-center flex-wrap">
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

			<div className="xl:p-20 p-5">
				<h2 className="font-bold text-5xl mb-4">Trending Apps</h2>
				<h4 className="text-xl text-[#627382] mb-10">
					Explore All Trending Apps on the Market developed by us
				</h4>
				<div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-items-center mx-auto max-w-fit">
					<Suspense
						fallback={
							<span className="loading loading-spinner text-primary loading-md"></span>
						}
					>
						{randomApps.map((item) => (
							<AppCard key={item.id} item={item}></AppCard>
						))}
					</Suspense>
				</div>
				<Link to="/apps" onClick={() => window.scrollTo(0, 0)}>
					<div className="custom-btn mt-10 cursor-pointer">See More</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
