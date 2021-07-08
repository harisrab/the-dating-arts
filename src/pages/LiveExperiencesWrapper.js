import React, { useEffect } from "react";
import Header from "../components/Header";
import LiveExperiences from "./liveExperiences/LiveExperiences";
import { useStateValue } from "../Store/StateProvider";

function LiveExperiencesWrapper() {
	const [{ headerLogoState }, dispatch] = useStateValue();

	useEffect(() => {
		console.log(`Component Mounted`);

		return () => {
			console.log("Component Will Unmount");
			dispatch({
				type: "SET_LOGO_TYPE",
				payload: "normal",
			});
		};
	}, []);

	return (
		<>
			<Header key={1} />
			<LiveExperiences />
		</>
	);
}

export default LiveExperiencesWrapper;
