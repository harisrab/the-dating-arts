import React, { useState } from "react";
import styled from "styled-components";
import DASlider from "./DASlider";
import EventsAddToCartButton from "../../Buttons/EventsAddToCartButton";
import ModalPriceTag from "./ModalPriceTag";
import ModalDates from "./ModalDates";
import { useStateValue } from "../../../Store/StateProvider";

function EventsModalContent() {
	const [sliderAmount, setSliderAmount] = useState(2);
	const [{ selectedEventId, upcomingEvents }, dispatch] = useStateValue();

	const event = upcomingEvents.filter((event) =>
		event.id.includes(selectedEventId)
	);

	let {
		heading,
		description,
		location,
		pricePerPerson,
		startDate,
		endDate,
		spotsAvailable,
		image,
		locationName,
	} = event[0];

	const date = {
		startDate: {
			day: String(startDate.getDate()),
			month: startDate.toLocaleString("en-us", { month: "long" }),
			year: String(startDate.getFullYear()),
		},
		endDate: {
			day: String(endDate.getDate()),
			month: endDate.toLocaleString("en-us", { month: "long" }),
			year: String(endDate.getFullYear()),
		},
	};

	startDate = `${date.startDate.month} ${date.startDate.day}, ${date.startDate.year}`;
	endDate = `${date.endDate.month} ${date.endDate.day}, ${date.endDate.year}`;

	const handleSliderChange = (e, val) => {
		setSliderAmount(val);
	};

	return (
		<Wrapper>
			<BackStrip></BackStrip>
			<ImageContainer url={image.url}></ImageContainer>

			<Right>
				<div className="upper">
					<div className="price__holder">
						<ModalPriceTag price={pricePerPerson} />
						<ModalDates startDate={startDate} endDate={endDate} />
					</div>
					<Heading>
						<h2>{heading}</h2>
					</Heading>
					<Description>
						<p>{description}</p>
					</Description>

					<Location>
						{" "}
						<p>
							<b>Location: </b>
							<a
								href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`}
								target="_blank"
								rel="noreferrer"
							>
								{locationName}
							</a>
						</p>
					</Location>
				</div>

				<div className="lower">
					<Availability>
						<p>
							<b>Availability:</b> {spotsAvailable}
						</p>
					</Availability>

					<DASlider
						defaultValue={sliderAmount}
						marks={true}
						step={1}
						min={0}
						max={spotsAvailable}
						onChange={handleSliderChange}
					/>

					<SaveSpots>
						Buy spots for <b>{sliderAmount}</b> persons
					</SaveSpots>

					<EventsAddToCartButton />
				</div>
			</Right>
		</Wrapper>
	);
}

export default EventsModalContent;

const Wrapper = styled.div`
	width: 100%;
	flex: 1;

	position: relative;

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

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	font-family: "Spectral", sans-serif;

	position: relative;

	.upper {
		height: 38%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}

	.lower {
		height: 38%;
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
