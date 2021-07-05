import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useStateValue } from "./Store/StateProvider";
import LoadingPage from "./pages/LoadingPage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentsTestScreen from "./components/ComponentsTestScreen";
import EventsModal from "./components/modals/EventsModal";
import { motion, AnimatePresence } from "framer-motion";
import { request, gql } from "graphql-request";

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

	const cache = useRef({});
	const url =
		"https://api-us-east-1.graphcms.com/v2/ckq8brsjz4kol01xk7rmph436/master";

	const query = gql`
		{
			areasOfLearnings {
				title
				description
			}
			upcomingEvents {
				heading
				description
				location {
					latitude
					longitude
				}
				pricePerPerson
				startDate
				endDate
				spotsAvailable
				id
				image {
					url
				}
				locationName
				type
			}
			liveExperiences {
				titleTag
				mainTitle
				description
			}
			atHomeTrainings {
				price
				per
				title
				feature1
				feature2
				feature3
				feature4
			}
			testimonials {
				id
				quote
				author
			}
		}
	`;

	const [{ cmsData }, dispatch] = useStateValue();

	useEffect(() => {
		let cancelRequest = false;
		if (!url) return;

		const fetchData = async () => {
			dispatch({ type: "FETCHING" });

			if (cache.current[url]) {
				const data = cache.current[url];
				dispatch({ type: "FETCHED", payload: data });
			} else {
				request(url, query)
					.then((data) => {
						// process dates on upcoming events

						let newEvents = data.upcomingEvents.map((event) => {
							return {
								...event,
								startDate: new Date(event.startDate),
								endDate: new Date(event.endDate),
							};
						});

						const newData = {
							...data,
							upcomingEvents: newEvents,
						};

						cache.current[url] = newData;
						if (cancelRequest) return;
						dispatch({
							type: "FETCHED",
							payload: newData,
						});
					})
					.catch((error) => {
						if (cancelRequest) return;
						dispatch({
							type: "FETCH_ERROR",
							payload: error.message,
						});
					});
			}
		};

		fetchData();

		// return function cleanup() {
		// 	cancelRequest = true;
		// };
	}, [url, dispatch, query]);

	return (
		<Router>
			{/* <LoadingPage /> */}

			<AppWrapper id="main-wrapper">
				<AnimatePresence>
					<Header key={1} />
					<Switch key={2}>
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
