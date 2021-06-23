import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "./Store/StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentsTestScreen from "./components/ComponentsTestScreen";
import LoadingPage from "./pages/LoadingPage";

function App() {
	const [{ loader }, dispatch] = useStateValue();

	useEffect(() => {
		setTimeout(
			() =>
				dispatch({
					type: "SET_PRELOADER",
					payload: false,
				}),
			2000
		);
	}, [dispatch]);

	if (5 === 5) {
		return <LoadingPage />;
	} else {
		return (
			<>
				{loader.isLoading === false ? (
					<Router>
						{/* <ComponentsTestScreen /> */}

						<AppWrapper>
							<Switch>
								<h1>From Scratch</h1>
							</Switch>
						</AppWrapper>
					</Router>
				) : (
					<LoadingPage />
				)}
			</>
		);
	}
}

export default App;

const AppWrapper = styled.div`
	height: 100vh;
	width: 100vw;
`;

const ComponentCheck = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	.items {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		gap: 20px;
		align-items: center;
		width: 100%;
		height: 80px;
		background-color: var(--main-color-transparent-red);
	}
`;
