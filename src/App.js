import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "./Store/StateProvider";
import LoadingPage from "./pages/LoadingPage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentsTestScreen from "./components/ComponentsTestScreen";
import EventsModal from "./components/modals/EventsModal";

// Import all Pages
import Homepage from "./pages/homepageSections/Homepage";
import AboutColgate from "./pages/aboutColgate/AboutColgate";
import AboutTheDatingArts from "./pages/aboutTheDatingArts/AboutTheDatingArts";
import ContactPage from "./pages/contactPage/ContactPage";
import LiveExperiences from "./pages/liveExperiences/LiveExperiences";
import AtHomeTrainings from "./pages/atHomeTrainings/AtHomeTrainings";
import AdmissionApplication from "./pages/admissionApplication/AdmissionApplication";
import StorePage from "./pages/storePage/StorePage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
	// eslint-disable-next-line no-unused-vars
	const [{ loader }, dispatch] = useStateValue();

	useEffect(() => {
		const animateLoadingScreenOut = () => {
			setTimeout(() => {
				dispatch({
					type: "SET_PRELOADER",
					payload: false,
				});
			}, 6000);
		};
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

					<Route path="/store">
						<Header />
						<StorePage />
					</Route>
					<Route path="/application">
						<Header />
						<AdmissionApplication />
					</Route>
					<Route path="/live-experiences">
						<Header />
						<LiveExperiences />
					</Route>
					<Route path="/at-home-trainings">
						<Header />
						<AtHomeTrainings />
					</Route>
					<Route path="/contact">
						<Header />
						<ContactPage />
					</Route>
					<Route path="/about-tda">
						<Header />
						<AboutTheDatingArts />
					</Route>
					<Route path="/about-colgate">
						<Header />
						<AboutColgate />
					</Route>
					<Route path="/login">
						<Header />
						<LoginPage />
					</Route>
					<Route path="/">
						<EventsModal />
						<Header />
						<Homepage />
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
