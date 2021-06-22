import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuButton from "./components/MenuButton";
import { useStateValue } from "./Store/StateProvider";

function App() {
	const [store, dispatch] = useStateValue();

	useEffect(() => {
		setTimeout(
			() =>
				dispatch({
					type: "SET_PRELOADER",
					payload: !store.loader.isLoading,
				}),
			6000
		);
	}, []);

	return (
		<ComponentCheck>
			{/* <Logo />   */}
			<MenuButton />

			{/* {loading === false ? (
				<AppWrapper>
					<h1>From Scratch</h1>
				</AppWrapper>
			) : (
				<>
					<h2>Loading Screen</h2>
					<Logo />
				</>
			)} */}
		</ComponentCheck>
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
