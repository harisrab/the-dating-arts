import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
import FeaturedProducts from "./FeaturedProducts";
import WhiteFooter from "../../components/WhiteFooter";
import { useStateValue } from "../../Store/StateProvider";
import HeroSection from "./HeroSection";
import _ from "lodash";

import { request, gql } from "graphql-request";

function StorePage() {
	const [{ cmsData }, dispatch] = useStateValue();
	const [data, setData] = useState([]);
	const [isMobile, setIsMobile] = useState();
	const [url, setURL] = useState(
		"https://api-us-east-1.graphcms.com/v2/ckq8brsjz4kol01xk7rmph436/master"
	);

	useEffect(() => {
		setIsMobile(window.matchMedia("(max-device-width: 480px)").matches);

		console.log("cms Data on Store Page ==> ", cmsData);
	}, []);

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setData(cmsData.data.products);
		}
		console.log("On CMS Update ==> ", cmsData);
	}, [cmsData]);

	if (cmsData.status === "idle") {
		let cancelRequest = false;
		if (!url) return;

		// const url =
		// 	"https://api-us-east-1.graphcms.com/v2/ckq8brsjz4kol01xk7rmph436/master";

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

		const fetchData = () => {
			dispatch({ type: "FETCHING" });
			// let localData = localStorage.getItem("data");

			// if (localData) {
			// 	console.log(
			// 		"DATA FETCHING IN PROGRESS FROM CACHE !!!!!!!!!!!!!",
			// 		localData
			// 	);

			// 	localData = JSON.parse(localData);

			// 	localData["upcomingEvents"].forEach((eachEvent) => {
			// 		eachEvent.endDate = new Date(eachEvent.endDate);
			// 		eachEvent.startDate = new Date(eachEvent.startDate);

			// 		console.log(eachEvent);
			// 	});

			// 	// const data = localData;
			// 	dispatch({ type: "FETCHED", payload: localData });

			// } else {
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

					let newData = {
						...data,
						upcomingEvents: newEvents,
						reviews: finalReviews,
					};

					localStorage.setItem("data", JSON.stringify(newData));

					newData = JSON.parse(JSON.stringify(newData));

					newData["upcomingEvents"].forEach((eachEvent) => {
						eachEvent.endDate = new Date(eachEvent.endDate);
						eachEvent.startDate = new Date(eachEvent.startDate);

						console.log(eachEvent);
					});

					console.log(
						"Fetching Data From SERVER !!!!!!!!!!!!!",
						newData
					);

					if (cancelRequest) return;
					dispatch({
						type: "FETCHED",
						payload: { ...newData, url: url },
					});
				})
				.catch((error) => {
					if (cancelRequest) return;
					dispatch({
						type: "FETCH_ERROR",
						payload: error.message,
					});
				});
			// }
		};
		fetchData();
	}

	return (
		<HomePageWrapper
			id="main_app"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			key={1}
		>
			<HeroSection />
			{cmsData.status === "fetched" && data.length !== 0 ? (
				data.map((eachProduct) => {
					if (eachProduct.productDisplayType === "right") {
						return (
							<>
								{isMobile ? (
									<ProductLeft info={eachProduct} />
								) : (
									<ProductRight info={eachProduct} />
								)}
							</>
						);
					} else if (eachProduct.productDisplayType === "left") {
						return <ProductLeft info={eachProduct} />;
					}
					return <></>;
				})
			) : (
				<></>
			)}
			<FeaturedProducts />
			<WhiteFooter />
		</HomePageWrapper>
	);
}

export default StorePage;

const HomePageWrapper = styled(motion.div)`
	z-index: 49;
	height: 100vh;
	width: 100%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	overflow-y: scroll;
	overflow: overlay;
	background-color: white;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	/* Style the scroll bar */
	&::-webkit-scrollbar {
		width: 0.6em;
	}

	&::-webkit-scrollbar-track {
		background: #cccccc;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: #4b4b4b;
		border-radius: 4px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: #424242;
	}

	/* scroll-snap-type: y mandatory; */
	scroll-behavior: smooth;

	@media only screen and (max-device-width: 480px) {
		scroll-snap-type: none;
		scroll-behavior: smooth;
	}
`;
