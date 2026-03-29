export const getInstalledApps = () => {
	const installedAppsSTR = localStorage.getItem("Installed");

	if (installedAppsSTR) {
		const installedApps = JSON.parse(installedAppsSTR);

		return installedApps;
	} else return [];
};

export const setInstalledApps = (id) => {
	const prevInstalledApps = JSON.parse(localStorage.getItem("Installed")) || [];

	const currentInstalledApps = [id.toString(), ...prevInstalledApps];

	localStorage.setItem("Installed", JSON.stringify(currentInstalledApps));
};

export const removeInstalledApps = (removeId) => {
	const prevInstalledApps = JSON.parse(localStorage.getItem("Installed")) || [];

	const currentInstalledApps = prevInstalledApps.filter(
		(id) => id !== String(removeId),
	);

	console.log(currentInstalledApps);

	localStorage.setItem("Installed", JSON.stringify(currentInstalledApps));
};
