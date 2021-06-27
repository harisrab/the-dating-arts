import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { Scroll, Frame, Stack, AnimatePresence } from "framer";
import EventSummary from "../../components/EventSummary";
import UpcomingEventsHeader from "../../components/UpcomingEventsHeader";
import EventsModal from "../../components/EventsModal";

function UpcomingEvents({ showEventsModal, setShowEventsModal }) {
	const [currentOption, setCurrentOption] = useState(0);
	const [events, setEvents] = useState([]);

	const changeOption = (e) => {
		setCurrentOption(Number(e.target.id));
	};

	useEffect(() => {
		const data = [
			{
				date: { start: 11, end: 18, month: "Jul" },
				title: "3 Days / 2 Nights Results Bootcamp",
				location: "Las Vegas, USA",
				price: "4,997",
				id: 1,
			},
			{
				date: { start: 17, end: 23, month: "Jun" },
				title: "3 Days / 2 Nights Mastery 1-ON-1",
				location: "Miami, FL USA.",
				price: "9,997",
				id: 2,
			},
			{
				date: { start: 9, end: 18, month: "Jun" },
				title: "3 Days / 2 Nights Results Bootcamp",
				location: "Las Vegas, USA",
				price: "4,997",
				id: 2,
			},
			{
				date: { start: 23, end: 25, month: "Jul" },
				title: "3 Days / 2 Nights Mastery 1-ON-1",
				location: "Los Angeles, USA",
				price: "9,997",
				id: 3,
			},
			{
				date: { start: 14, end: 16, month: "Aug" },
				title: "3 Days Express Online Bootcamp",
				location: "At Home",
				price: "1,997",
				id: 1,
			},
			{
				date: { start: 14, end: 16, month: "Sept" },
				title: "3 Days / 2 Nights Results Bootcamp",
				location: "Las Vegas, USA",
				price: "4,997",
				id: 2,
			},
			{
				date: { start: 14, end: 16, month: "Nov" },
				title: "3 Days / 2 Legends Immersion",
				location: "Las Vegas, USA",
				price: "4,997",
				id: 3,
			},
			{
				date: { start: 14, end: 16, month: "Nov" },
				title: "3 Days / 2 Nights Results Bootcamp",
				location: "Las Vegas, USA",
				price: "4,997",
				id: 1,
			},
			{
				date: { start: 10, end: 12, month: "Dec" },
				title: "3 Days Express Online Bootcamp",
				location: "At Home",
				price: "1,997",
				id: 1,
			},
		];

		setEvents(data);
	}, []);

	useEffect(() => {
		console.log("Current Option --->>", currentOption);
	}, [currentOption]);

	return (
		<Wrapper>
			<ContentWrapper>
				<UpcomingEventsHeader
					changeOption={changeOption}
					currentOption={currentOption}
				/>

				<Scroll style={scrollDiv}>
					<AnimatePresence>
						{currentOption === 0
							? events.map(
									({ date, title, location, price, id }) => (
										<EventSummary
											date={date}
											title={title}
											location={location}
											price={price}
											setShowEventsModal={setShowEventsModal}
										/>
									)
							  )
							: events
									.filter(
										(eachEvent) =>
											currentOption === eachEvent.id
									)
									.map(
										({
											date,
											title,
											location,
											price,
											id,
										}) => (
											<EventSummary
												date={date}
												title={title}
												location={location}
												price={price}
											/>
										)
									)}
					</AnimatePresence>
				</Scroll>
			</ContentWrapper>
			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default UpcomingEvents;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	h1 {
		color: white;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;

const ContentWrapper = styled.div`
	height: 53vh;
	width: 75vw;

	position: absolute;
	left: 50%;
	top: 43%;
	transform: translate(-50%, -50%);

	.info_summary {
		width: 100%;
		height: 50px;
		background-color: yellow;
		margin-bottom: 5px;
	}
`;

const scrollDiv = {
	width: "100%",
	height: "90%",
	backgroundColor: "#dddd0d1",
};
