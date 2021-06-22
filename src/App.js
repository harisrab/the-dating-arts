import React, { useEffect, useState } from "react";

import styled from "styled-components";
import UnderConstructionPage from "./pages/UnderConstructionPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 6000);
	}, []);

	return (
		<>
			{loading === false ? (
				<AppWrapper>
					<h1>From Scratch</h1>
				</AppWrapper>
			) : (
				<h2>Loading Screen</h2>
			)}
		</>
	);
}

export default App;

const AppWrapper = styled.div`
	height: 100vh;
	width: 100vw;
`;
