import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DASlider from "./DASlider";
import EventsAddToCartButton from "../../Buttons/EventsAddToCartButton";
import ModalPriceTag from "./ModalPriceTag";
import ModalDates from "./ModalDates";
import { useStateValue } from "../../../Store/StateProvider";
import { motion } from "framer-motion";

function EventsModalContent() {
	const [sliderAmount, setSliderAmount] = useState(2);
	const [{ selectedEventId, cmsData }, dispatch] = useStateValue();
	const [eventDetails, setEventDetails] = useState("");
	const [isMobile, setIsMobile] = useState();

	useEffect(() => {
		setIsMobile(window.matchMedia("(max-device-width: 480px)").matches);
	}, []);

	useEffect(() => {
		if (cmsData.status === "fetched") {
			let event = cmsData.data.upcomingEvents.filter((event) =>
				event.id.includes(selectedEventId)
			)[0];

			console.log("Date ====> ", String(event.startDate.getDate()));

			const date = {
				startDate: {
					day: String(event.startDate.getDate()),
					month: event.startDate.toLocaleString("en-us", {
						month: "long",
					}),
					year: String(event.startDate.getFullYear()),
				},
				endDate: {
					day: String(event.endDate.getDate()),
					month: event.endDate.toLocaleString("en-us", {
						month: "long",
					}),
					year: String(event.endDate.getFullYear()),
				},
			};

			const startDate = `${date.startDate.month} ${date.startDate.day}, ${date.startDate.year}`;
			const endDate = `${date.endDate.month} ${date.endDate.day}, ${date.endDate.year}`;

			event = {
				...event,
				startDate: startDate,
				endDate: endDate,
			};

			setEventDetails(event);

			console.log("CMS Data ===> ", cmsData);
			console.log("Date ===> ", startDate);
		}
	}, [cmsData]);

	const handleSliderChange = (e, val) => {
		setSliderAmount(val);
	};

	return (
		<>
			{eventDetails ? (
				<Wrapper>
					<BackStrip></BackStrip>
					<div className="image_container">
						<ImageContainer
							initial={
								isMobile
									? { height: "0%", scale: 1 }
									: { width: "0%", scale: 1 }
							}
							animate={
								isMobile
									? { height: "100%", scale: 1 }
									: { width: "100%", scale: 1 }
							}
							transition={{
								duration: 3,
								delay: 0.4,
								ease: "easeOut",
								type: "spring",
							}}
							style={{ originX: 0 }}
							url={eventDetails.image.url}
						></ImageContainer>
					</div>

					<Right>
						<div className="upper">
							<div className="price__holder">
								<ModalPriceTag
									price={eventDetails.pricePerPerson}
								/>
								<ModalDates
									startDate={eventDetails.startDate}
									endDate={eventDetails.endDate}
								/>
							</div>
							<Heading>
								<h2>{eventDetails.heading}</h2>
							</Heading>
							<Description>
								<p>{eventDetails.description}</p>
							</Description>

							<Location>
								{" "}
								<p>
									<b>Location: </b>
									<a
										href={`https://maps.google.com/?q=${eventDetails.location.latitude},${eventDetails.location.longitude}`}
										target="_blank"
										rel="noreferrer"
									>
										{eventDetails.locationName}
									</a>
								</p>
							</Location>
						</div>

						<div className="lower">
							<Availability>
								<p>
									<b>Availability:</b>{" "}
									{eventDetails.spotsAvailable}
								</p>
							</Availability>

							{/* <DASlider
								defaultValue={sliderAmount}
								marks={true}
								step={1}
								min={0}
								max={eventDetails.spotsAvailable}
								onChange={handleSliderChange}
							/> */}

							{/* <SaveSpots>
								Reserve spots for <b>{sliderAmount}</b> persons
							</SaveSpots> */}

							<EventsAddToCartButton
								url={eventDetails.gumroadLink}
							/>
						</div>
					</Right>
				</Wrapper>
			) : (
				<></>
			)}
		</>
	);
}

export default EventsModalContent;

const Wrapper = styled.div`
	width: 100%;
	flex: 1;

	position: relative;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;

	.image_container {
		width: 35%;
		min-height: 100%;
		max-height: 100%;
		margin-left: 6%;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;

		/* position: relative; */

		/* display: flex;
		align-items: center; */

		position: relative;
		overflow: hidden;
		/* z-index: -1;  */
	}

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;

		.image_container {
			width: 90%;
			min-height: 20%;
			max-height: 25%;

			margin-left: 0;
		}
	}
`;

const ImageContainer = styled(motion.div)`
	height: 100%;
	width: 100%;
	background-color: black;

	position: absolute;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	background-image: url(${(props) => props.url});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

const BackStrip = styled.div`
	position: absolute;

	width: 100%;
	height: 15%;
	background-color: var(--main-color-light-black);
	top: 50%;
	transform: translate(0, -50%);
	z-index: -1;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	@media only screen and (max-device-width: 480px) {
		display: none;
	}
`;

const Right = styled.div`
	height: 100%;
	flex: 1;

	margin-left: 80px;
	margin-right: 80px;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	font-family: "GothamBook", sans-serif;

	position: relative;

	.upper {
		height: 38%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;

		pointer-events: all;
		user-select: text;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;

		.price__holder {
			position: absolute;
			width: 100%;
			height: 15%;

			top: 50%;
			transform: translate(0, -50%);

			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}

	.lower {
		height: 38%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	@media only screen and (max-device-width: 480px) {
		width: 90%;
		margin-left: 0;
		margin-right: 0;
		margin-top: 20px;

		.upper {
			height: auto;
			flex: 1;

			.price__holder {
				display: none;
			}
		}

		.lower {
			height: auto;
			flex: 1;
			margin-top: 10px;
		}

		justify-content: flex-start;
	}
`;

const Heading = styled.div`
	/* font-weight: 700; */
	font-family: "GothamBold", sans-serif;
	text-transform: uppercase;
	letter-spacing: 4px;
	font-size: 13px;

	/* font-size: 18px; */

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	h2 {
		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	@media only screen and (max-device-width: 480px) {
		h2 {
			font-weight: 500;
			font-size: 18px;
			margin-top: 10px;
			margin-bottom: 20px;

			display: none;
		}
	}
`;

const Description = styled.div`
	font-size: 14px;
	line-height: 19.5px;
	opacity: 0.7;

	font-family: "GothamBook", sans-serif;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	p {
		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	@media only screen and (max-device-width: 480px) {
		margin-bottom: 10px;
	}
`;

const Location = styled.div`
	b {
		font-family: "GothamBold", sans-serif;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-size: 12px;

		margin-right: 5px;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	a {
		font-family: "GothamBold", sans-serif;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-size: 12px;
		color: #525252;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}
`;

const Availability = styled.div`
	p {
		color: black;
		font-weight: 200;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;

		font-family: "GothamLight", sans-serif;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-size: 12px;

		b {
			font-family: "GothamBold", sans-serif;
			text-transform: uppercase;
			letter-spacing: 3px;
			font-size: 12px;

			margin-right: 5px;

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}
`;

const SaveSpots = styled.div`
	p {
		font-weight: 200;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
		b {
			font-weight: 600;

			pointer-events: auto !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}

	@media only screen and (max-device-width: 480px) {
		margin-bottom: 10px;
	}
`;
