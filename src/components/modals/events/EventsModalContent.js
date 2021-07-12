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
							initial={{ width: "0%", scale: 1 }}
							animate={{ width: "100%", scale: 1.1 }}
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

							<DASlider
								defaultValue={sliderAmount}
								marks={true}
								step={1}
								min={0}
								max={eventDetails.spotsAvailable}
								onChange={handleSliderChange}
							/>

							<SaveSpots>
								Buy spots for <b>{sliderAmount}</b> persons
							</SaveSpots>

							<EventsAddToCartButton />
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
`;

const ImageContainer = styled(motion.div)`
	height: 100%;
	width: 100%;
	background-color: blue;

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

	font-family: "Spectral", sans-serif;

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
`;

const Heading = styled.div`
	font-weight: 700;
	font-size: 18px;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	h2 {
		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}
`;

const Description = styled.div`
	font-weight: 300;
	font-size: 14px;
	line-height: 19.5px;
	opacity: 0.7;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	p {
		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}
`;

const Location = styled.div`
	b {
		font-weight: 600;
		margin-right: 5px;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	a {
		color: black;
		font-weight: 200;

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

		b {
			font-weight: 600;
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
`;
