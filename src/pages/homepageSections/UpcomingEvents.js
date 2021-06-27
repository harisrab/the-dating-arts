import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { Scroll, Frame, Stack } from "framer";
import EventSummary from "../../components/EventSummary";

function UpcomingEvents() {
	const [currentOption, setCurrentOption] = useState(0);

	const changeOption = (e) => {
		setCurrentOption(Number(e.target.id));
		console.log("Clicked -->>", e.target.id);
		console.log(typeof e.target.id);
	};

	useEffect(() => {
		console.log("Current Option --->>", currentOption);
	}, [currentOption]);

	return (
		<Wrapper>
			<ContentWrapper>
				<div className="titles">
					<div className="title-holder">
						<h2>Upcoming Events</h2>
					</div>

					<div className="links">
						<div
							onClick={changeOption}
							id={0}
							className="selectable"
						>
							<p
								style={
									currentOption === 0 ? { opacity: 1 } : {}
								}
							>
								All
							</p>
						</div>
						<div
							onClick={changeOption}
							id={1}
							className="selectable"
						>
							<p
								style={
									currentOption === 1 ? { opacity: 1 } : {}
								}
							>
								Results Bootcamp
							</p>
						</div>

						<div
							onClick={changeOption}
							id={2}
							className="selectable"
						>
							<p
								style={
									currentOption === 2 ? { opacity: 1 } : {}
								}
							>
								Online Bootcamp
							</p>
						</div>
						<div
							onClick={changeOption}
							id={3}
							className="selectable"
						>
							<p
								style={
									currentOption === 3 ? { opacity: 1 } : {}
								}
							>
								Mastery 1-ON-1
							</p>
						</div>
					</div>
				</div>
				<Scroll style={scrollDiv}>
					<EventSummary />
					<EventSummary />
					<EventSummary />
					<EventSummary />
					<EventSummary />
					<EventSummary />
					<EventSummary />
					<EventSummary />
					<EventSummary />
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

	.titles {
		height: 13%;
		width: 100%;
		/* background-color: red; */
		margin-bottom: 40px;

		display: flex;
		align-items: center;
		justify-content: space-between;

		color: var(--main-color-white);

		.title-holder {
			height: 100%;
			h2 {
				font-family: "Spectral", sans-serif;
				font-weight: 600;
				font-size: 35px;
			}
			margin-right: 60px;
		}

		.links {
			display: flex;
			align-items: flex-end;
			height: 100%;
			width: auto;
			justify-content: space-between;
			gap: 25px;
			.selectable {
				width: fit-content;
				height: 70%;
				display: flex;
				align-items: flex-end;

				p {
					padding: 0;
					margin: 0;

					font-size: 13px;
					font-family: "Archivo", serif;
					opacity: 0.4;
					transition: 0.2s ease-out;
					pointer-events: none;
				}

				&:hover {
					cursor: pointer;

					p {
						opacity: 0.7;
					}
				}

				&:active {
					p {
						opacity: 0.6;
					}
				}
			}
		}
	}

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
