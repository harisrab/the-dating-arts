import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "./Store/StateProvider";
import LoadingPage from "./pages/LoadingPage";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentsTestScreen from "./components/ComponentsTestScreen";
import EventsModal from "./components/EventsModal";

function App() {
	const [{ loader }, dispatch] = useStateValue();
	const [showEventsModal, setShowEventsModal] = useState(false);

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
			<LoadingPage />

			<AppWrapper id="main-wrapper">
				<Switch>
					<Route path="/components-test">
						<ComponentsTestScreen />
					</Route>

					<Route path="/">
						<EventsModal
							setShowEventsModal={setShowEventsModal}
							showEventsModal={showEventsModal}
						/>
						<Header />
						<Homepage
							showEventsModal={showEventsModal}
							setShowEventsModal={setShowEventsModal}
						/>
					</Route>
				</Switch>
			</AppWrapper>
		</Router>
	);
}

export default App;

const AppWrapper = styled.div`
	height: auto;
	width: 100vw;

	display: flex;
	flex-direction: column;
`;
