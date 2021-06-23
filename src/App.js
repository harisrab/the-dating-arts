import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ShoppingCartButton from "./components/Buttons/ShoppingCartButton";

import { useStateValue } from "./Store/StateProvider";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

	return (
		<Router>
			<Switch>
				<ComponentCheck>
					<ShoppingCartButton />
				</ComponentCheck>

				<Route path="/">
					<ComponentCheck>
						<ShoppingCartButton />
					</ComponentCheck>
				</Route>
			</Switch>
		</Router>

		/* {loader.isLoading === false ? (
				<AppWrapper>
					<h1>From Scratch</h1>
				</AppWrapper>
			) : (
				<>
				</>
			)} */
	);
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
`;
