import React, { useEffect } from "react";
import Header from "../components/Header";
import AtHomeTrainings from "../pages/atHomeTrainings/AtHomeTrainings";
import { useStateValue } from "../Store/StateProvider";

function AtHomeTrainingsWrapper() {
	const [{ headerLogoState }, dispatch] = useStateValue();

	useEffect(() => {
		return () => {
			dispatch({
				type: "SET_LOGO_TYPE",
				payload: "normal",
			});
		};
	}, []);

	return (
		<>
			<Header key={1} />
			<AtHomeTrainings />
		</>
	);
}

export default AtHomeTrainingsWrapper;
