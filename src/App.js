import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useStateValue } from "./Store/StateProvider";
import Header from "./components/Header";
import BlackHeader from "./components/blackHeader/BlackHeader";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EventsModal from "./components/modals/EventsModal";
import ProductModal from "./components/modals/ProductModal";
import { motion, AnimatePresence } from "framer-motion";
import { request, gql } from "graphql-request";

// Import all Pages
import Homepage from "./pages/homepageSections/Homepage";
import AboutColgate from "./pages/aboutColgate/AboutColgate";
import AboutTheDatingArts from "./pages/aboutTheDatingArts/AboutTheDatingArts";
import ContactPage from "./pages/contactPage/ContactPage";

import LiveExperiencesWrapper from "./pages/LiveExperiencesWrapper";
import AtHomeTrainingsWrapper from "./pages/AtHomeTrainingsWrapper";

import AdmissionApplication from "./pages/admissionApplication/AdmissionApplication";
import StorePage from "./pages/storePage/StorePage";
import LoginPage from "./pages/loginPage/LoginPage";
import NewsletterPopup from "./components/NewsletterPopup";

function App() {
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

			aboutTheDatingArts {
				heroTitle
				heroDescription
				heroImage {
					url
				}
				whoAreWeTitle
				whoAreWeDescription
				whoAreWeImage {
					url
				}
				whereAreWeBasedTitle
				whereAreWeBasedDescription
				whereAreWeBasedImage {
					url
				}
				servicesWeProvidetitle
				servicesWeProvideDescription
				servicesWeProvideImage {
					url
				}
				ourReputedExclusivityTitle
				ourReputedExclusivityDescription
				ourReputedExclusivityImage {
					url
				}
			}

			pageAboutColgates {
				heroTitle
				heroDescription
				heroImage {
					url
				}
				beginningsAndMasters
				beginningsAndMastersDescription
				beginningsAndMastersImage {
					url
				}
				theTutelageTitle
				theTutelageDescription
				theTutelageImage {
					url
				}
				experiencesOfLifeTitle
				experiencesOfLifeDescription
				experiencesOfLifeImage {
					url
				}
			}

			pageLiveExperiences {
				heroTitle
				heroDescription
				resultsBootcampIntroductionTitle
				resultsBootcampIntroductionDescription
				resultsBootcampDetailsTitle
				resultsBootcampDetailsDescription
				mastery1On1BootcampIntroductionTitle
				mastery1On1BootcampIntroductionDescription
				mastery1On1BootcampDetailsTitle
				mastery1On1BootcampDetailsDescription
				legendsImmersionIntroductionTitle
				legendsImmersionIntroductionDescription
				legendsImmersionDetailsTitle
				legendsImmersionDetailsDescription
				tailorMadeIconIntroductionTitle
				tailorMadeIconIntroductionDescription
				tailorMadeIconDetailsTitle
				tailorMadeIconDetailsDescription
			}

			pageAtHomeTrainings {
				heroTitle
				heroDescription
				closeHerSchoolLiveTitle
				closeHerSchoolLiveDescription
				expressOnlineBootcampTitle
				expressOnlineBootcampDescription
				empowerVideoSessionTitle
				empowerVideoSessionDescription
				masterclassBreakoutTitle
				masterclassBreakoutDescription
			}

			products {
				id
				title
				subtitle
				productDescription
				productDisplayType
				feature1
				feature2
				feature3
				feature4
				feature5
				feature6
				coverImage {
					url
				}
				detailsImage {
					url
				}
				featured
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
					<Switch key={2}>
						<Route path="/application">
							<Header key={1} />
							<AdmissionApplication />
						</Route>
						<Route path="/store">
							<ProductModal />
							<BlackHeader key={1} />
							<StorePage />
						</Route>
						<Route path="/live-experiences">
							<LiveExperiencesWrapper />
						</Route>
						<Route path="/at-home-trainings">
							<AtHomeTrainingsWrapper />
						</Route>
						<Route path="/contact">
							<Header key={1} />
							<ContactPage />
						</Route>
						<Route path="/about-tda">
							<Header key={1} />
							<AboutTheDatingArts />
						</Route>
						<Route path="/about-colgate">
							<Header key={1} />
							<AboutColgate />
						</Route>
						<Route path="/login">
							<Header key={1} />
							<LoginPage />
						</Route>
						<Route path="/">
							<Header key={1} />
							<EventsModal />
							<NewsletterPopup />
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
