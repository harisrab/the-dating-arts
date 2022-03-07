import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useStateValue } from "./Store/StateProvider";
import Header from "./components/Header";
import BlackHeader from "./components/blackHeader/BlackHeader";
import _ from "lodash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EventsModal from "./components/modals/EventsModal";
import ProductModal from "./components/modals/ProductModal";
import { AnimatePresence } from "framer-motion";
import { request, gql } from "graphql-request";

// Import all Pages
import Homepage from "./pages/homepageSections/Homepage";
import AboutColgate from "./pages/aboutColgate/AboutColgate";
import AboutTheDatingArts from "./pages/aboutTheDatingArts/AboutTheDatingArts";
import ContactPage from "./pages/contactPage/ContactPage";
import AccountPage from "./pages/accountPage/AccountPage";
import ComingSoon from "./pages/ComingSoon";

import LiveExperiencesWrapper from "./pages/LiveExperiencesWrapper";
import AtHomeTrainingsWrapper from "./pages/AtHomeTrainingsWrapper";

import AdmissionApplication from "./pages/admissionApplication/AdmissionApplication";
import StorePage from "./pages/storePage/StorePage";
import LoginPage from "./pages/loginPage/LoginPage";
import NewsletterPopup from "./components/NewsletterPopup";

// Intercom Integration
// import { IntercomProvider, useIntercom } from "react-use-intercom";
import ReviewsPopUp from "./components/ReviewsPopUp";

// const INTERCOM_APP_ID = process.env.INTERCOM_APP_KEY;
// const INTERCOM_APP_ID = "r4lqfnyy";

function App() {
	const cache = useRef({});
	const [showWebsite, setShowWebsite] = useState(false);
	// const { boot, shutdown, hide, show, update } = useIntercom();

	console.log("App Exectuing!");

	const url =
		"https://api-us-east-1.graphcms.com/v2/ckq8brsjz4kol01xk7rmph436/master";

	const query = gql`
		{
			areasOfLearnings {
				title
				description
				gumroadLink
			}
			applicationPages {
				googleFormsLink
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
				gumroadLink
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

			reviews {
				id
				name
				profession
				program
				quote
				fullReview
				folders
				profilePhoto {
					url
				}
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
				gumroadLink
			}
		}
	`;

	const [{ _ }, dispatch] = useStateValue();

	useEffect(() => {
		let cancelRequest = false;
		if (!url) return;

		const fetchData = async () => {
			dispatch({ type: "FETCHING" });

			if (cache.current[url]) {
				const data = cache.current[url];
				dispatch({ type: "FETCHED", payload: data });
				console.log("Cache ===> ", cache);
			} else {
				request(url, query)
					.then((data) => {
						console.log("Fetched Data ===> ", data);

						// process dates on upcoming events

						let newEvents = data.upcomingEvents.map((event) => {
							return {
								...event,
								startDategi: new Date(event.startDate),
								endDate: new Date(event.endDate),
							};
						});

						let newReviews;

						newReviews = _.chain(data.reviews)
							.groupBy("folders")
							.value();

						let finalReviews = new Object();

						Object.entries(newReviews).forEach((eachEntry) => {
							finalReviews[eachEntry[0]] = _.chain(eachEntry[1])
								.groupBy("id")
								.value();
						});

						const newData = {
							...data,
							upcomingEvents: newEvents,
							reviews: finalReviews,
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
	}, [url, dispatch, query]);

	return (
		<Router>
			{true ? (
				<AppWrapper id="main-wrapper">
					<AnimatePresence>
						<Switch key={2}>
							<Route path="/profile">
								<Header key={1} />
								<AccountPage />
							</Route>
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
								<ReviewsPopUp />
								<Homepage />
							</Route>
						</Switch>
					</AnimatePresence>
				</AppWrapper>
			) : (
				<ComingSoon
					showWebsite={showWebsite}
					setShowWebsite={setShowWebsite}
				/>
			)}
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
