import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { Scroll, AnimatePresence } from "framer";
import EventSummary from "../../components/events_summary_components/EventSummary";
import UpcomingEventsHeader from "../../components/events_summary_components/UpcomingEventsHeader";
import { useStateValue } from "../../Store/StateProvider";

function UpcomingEvents() {
	const [{ cmsData, currentOption }, dispatch] = useStateValue();
	const [upcomingEvents, setUpcomingEvents] = useState([]);
	const [isMobile, setIsMobile] = useState();
	const [isMedium, setIsMedium] = useState();

	useEffect(() => {
		setIsMobile(window.matchMedia("(max-device-width: 480px)").matches);
		setIsMedium(window.matchMedia("(max-device-width: 970px)").matches);
	}, []);

	const setCurrentOption = (id) => {
		dispatch({
			type: "SET_CURRENT_OPTION",
			payload: id,
		});
	};

	const changeOption = (e) => {
		setCurrentOption(e.target.id);
	};

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setUpcomingEvents(cmsData.data.upcomingEvents);
		}
	}, [cmsData]);

	return (
		<>
			{upcomingEvents.length === 0 ? (
				<></>
			) : (
				<Wrapper id="upcoming-events-section">
					<ContentWrapper>
						<UpcomingEventsHeader
							changeOption={changeOption}
							currentOption={currentOption}
						/>

						<Scroll
							style={
								isMobile
									? {
											width: "75vw",
											height: "50vh",
											minWidth: "75vw",
											maxWidth: "75vw",
									  }
									: {
											width: "75vw",
											height: "55%",
											minWidth: "75vw",
											maxWidth: "75vw",
									  }
							}
						>
							<AnimatePresence>
								{currentOption === "all"
									? upcomingEvents.map((event) => (
											<EventSummary
												event={event}
												key={event.id}
											/>
									  ))
									: upcomingEvents
											.filter(
												(eachEvent) =>
													currentOption ===
													eachEvent.type
											)
											.map((event) => (
												<EventSummary
													event={event}
													key={event.id}
												/>
											))}
							</AnimatePresence>
						</Scroll>
					</ContentWrapper>
					<AnimatedDownArrow />
				</Wrapper>
			)}
		</>
	);
}

export default UpcomingEvents;

const Wrapper = styled.div`
	overflow: hidden;
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	pointer-events: all;
	user-select: text;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	@media screen and (max-height: 550px) {
		height: 145vh;
	}

	@media screen and (max-width: 970px) {
		background-image: none;
		background-color: black;
	}

	@media only screen and (max-device-width: 480px) {
		background-image: none;
		background-color: black;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ContentWrapper = styled.div`
	height: 53vh;
	width: 75%;

	/* position: absolute;
	left: 50%;
	top: 43%;
	transform: translate(-50%, -50%); */
	@media screen and (max-height: 550px) {
		height: 60%;
	}

	@media screen and (max-width: 970px) {
		height: 60%;
		margin-bottom: 0px;
	}

	pointer-events: all;
	user-select: text;
	margin-bottom: 80px;

	@media only screen and (max-device-width: 480px) {
		height: 60vh;

		margin-bottom: 0px;
	}

	overflow-x: hidden;
`;
