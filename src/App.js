import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "./Store/StateProvider";
import LoadingPage from "./pages/LoadingPage";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentsTestScreen from "./components/ComponentsTestScreen";

function App() {
	const [{ loader }, dispatch] = useStateValue();

	const animateLoadingScreenOut = () => {
		setTimeout(() => {
			dispatch({
				type: "SET_PRELOADER",
				payload: false,
			});
		}, 6000);
	};

	useEffect(() => {
		animateLoadingScreenOut();
	}, [dispatch]);

	return (
		<Router>
			<AppWrapper>
				<LoadingPage />
				<Header />
				
				<Homepage />
			</AppWrapper>
		</Router>
	);
}

export default App;

const AppWrapper = styled.div`
	height: auto;
	width: 100vw;
	position: relative;
`;
