import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DASlider from "./DASlider";
import EventsAddToCartButton from "../../Buttons/EventsAddToCartButton";
import ModalPriceTag from "./ModalPriceTag";
import ModalDates from "./ModalDates";
import { useStateValue } from "../../../Store/StateProvider";

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
					<ImageContainer
						url={eventDetails.image.url}
					></ImageContainer>

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

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
`;

const BackStrip = styled.div`
	position: absolute;

	width: 100%;
	height: 15%;
	background-color: var(--main-color-light-black);
	top: 50%;
	transform: translate(0, -50%);
	z-index: -1;
`;

const ImageContainer = styled.div`
	max-height: 100%;
	min-height: 100%;

	width: 35%;
	background-color: black;
	margin-left: 6%;
	object-fit: cover;

	background-image: url(${(props) => props.url});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

const Right = styled.div`
	height: 100%;
	flex: 1;

	margin-left: 80px;
	margin-right: 80px;

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
	}

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
	}
`;

const Heading = styled.div`
	font-weight: 700;
	font-size: 18px;
`;

const Description = styled.div`
	font-weight: 300;
	font-size: 14px;
	line-height: 19.5px;
	opacity: 0.7;
`;

const Location = styled.div`
	b {
		font-weight: 600;
		margin-right: 5px;
	}

	a {
		color: black;
		font-weight: 200;
	}
`;

const Availability = styled.div`
	p {
		color: black;
		font-weight: 200;

		b {
			font-weight: 600;
			margin-right: 5px;
		}
	}
`;

const SaveSpots = styled.div`
	p {
		font-weight: 200;

		b {
			font-weight: 600;
		}
	}
`;
