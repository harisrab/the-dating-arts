import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "./Store/StateProvider";
import LoadingPage from "./pages/LoadingPage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentsTestScreen from "./components/ComponentsTestScreen";
import EventsModal from "./components/modals/EventsModal";
import { motion, AnimatePresence } from "framer-motion";

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
	// const [{ loader }, dispatch] = useStateValue();

	// useEffect(() => {
	// 	const animateLoadingScreenOut = () => {
	// 		setTimeout(() => {
	// 			dispatch({
	// 				type: "SET_PRELOADER",
	// 				payload: false,
	// 			});
	// 		}, 6000);
	// 	};
	// 	animateLoadingScreenOut();
	// }, [dispatch]);

	return (
		<Router>
			{/* <LoadingPage /> */}

			<AppWrapper id="main-wrapper">
				<AnimatePresence>
					<Header />
					<Switch>
						<Route path="/components-test">
							<ComponentsTestScreen />
						</Route>

						<Route path="/store">
							<StorePage />
						</Route>
						<Route path="/application">
							<AdmissionApplication />
						</Route>
						<Route path="/live-experiences">
							<LiveExperiences />
						</Route>
						<Route path="/at-home-trainings">
							<AtHomeTrainings />
						</Route>
						<Route path="/contact">
							<ContactPage />
						</Route>
						<Route path="/about-tda">
							<AboutTheDatingArts />
						</Route>
						<Route path="/about-colgate">
							<AboutColgate />
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/">
							<EventsModal />
							<Homepage />
						</Route>
					</Switch>
				</AnimatePresence>
			</AppWrapper>
		</Router>
	);
}

export default App;

const AppWrapper = styled.div`
	height: auto;
	width: 100vw;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
`;
