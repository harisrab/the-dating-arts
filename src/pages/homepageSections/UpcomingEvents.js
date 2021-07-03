import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { Scroll, AnimatePresence } from "framer";
import EventSummary from "../../components/events_summary_components/EventSummary";
import UpcomingEventsHeader from "../../components/events_summary_components/UpcomingEventsHeader";
import { request, gql } from "graphql-request";
import { useStateValue } from "../../Store/StateProvider";

function UpcomingEvents() {
	const [currentOption, setCurrentOption] = useState("all");
	const [{ upcomingEvents }, dispatch] = useStateValue();

	const changeOption = (e) => {
		setCurrentOption(e.target.id);
	};

	useEffect(() => {
		const URL =
			"https://api-us-east-1.graphcms.com/v2/ckq8brsjz4kol01xk7rmph436/master";

		const query = gql`
			{
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
			}
		`;

		request(URL, query)
			.then((data) => {
				const newData = data.upcomingEvents.map((event) => {
					return {
						...event,
						startDate: new Date(event.startDate),
						endDate: new Date(event.endDate),
					};
				});

				dispatch({
					type: "UPDATE_UPCOMING_EVENTS",
					payload: newData,
				});
			})
			.catch((error) => console.log(error));
	}, [dispatch]);

	return (
		<>
			{upcomingEvents.length === 0 ? (
				<></>
			) : (
				<Wrapper>
					<ContentWrapper>
						<UpcomingEventsHeader
							changeOption={changeOption}
							currentOption={currentOption}
						/>

						<Scroll style={scrollDiv}>
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
