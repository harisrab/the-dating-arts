import React, { useState } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import SelectableSlider from "../../components/SelectableSlider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { motion, AnimatePresence } from "framer-motion";

const AOL_Data = [
	{
		id: 32,
		heading: "Masterclass Breakout",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ultricies nisl. Nam id tellus quam. In necsapien eros. Etiam lacinia metus ut iaculis dictum. Nam quisjusto dignissim, elementum eros id, dignissim dui. In laoreet nunc nibh. Morbi non sodales urna. In sit amet blandit justo.",
		image_url: "#",
	},
	{
		id: 33,
		heading: "3 Days / 2 Nights",
		text:
			"In necsapien eros. Etiam lacinia metus ut iaculis dictum. Nam quisjusto dignissim, elementum eros id, dignissim dui. In laoreet nunc nibh, sit amet placerat eros finibus et. Morbi non sodales urna. In sit amet blandit justo.",
		image_url: "#",
	},
	{
		id: 34,
		heading: "Online Bootcamp",
		text:
			"Suspendisse vitae ultricies nisl. Nam id tellus quam. In necsapien eros. Etiam lacinia metus ut iaculis dictum. Nam quisjusto dignissim, elementum eros id, dignissim dui. In laoreet nunc nibh, sit amet placerat eros finibus et. Morbi non sodales urna. In sit amet blandit justo.",
		image_url: "#",
	},
	{
		id: 35,
		heading: "Live Experiences",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ultricies nisl. Nam id tellus quam. In necsapien eros. Etiam lacinia metus ut iaculis dictum. Nam quisjusto dignissim, elementum eros id, dignissim dui. In laoreet nunc nibh,  In sit amet blandit justo.",
		image_url: "#",
	},
	{
		id: 36,
		heading: "Genuine Masters",
		text:
			"Lorem ipsum dolor sit amet, Nam quisjusto dignissim, elementum eros id, dignissim dui. In laoreet nunc nibh, sit amet placerat eros finibus et. Morbi non sodales urna. In sit amet blandit justo. consectetur adipiscing elit. Suspendisse vitae ultricies nisl. Nam id tellus quam. In necsapien eros. Etiam lacinia metus ut iaculis dictum. ",
		image_url: "#",
	},
	{
		id: 37,
		heading: "Masterclass Breakout Finale",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ultricies nisl. Nam id tellus quam. In necsapien eros. Etiam lacinia metus ut iaculis dictum. Nam quisjusto dignissim, elementum eros id, dignissim dui. In laoreet nunc nibh, sit amet placerat eros finibus et. Morbi non sodales urna. In sit amet blandit justo.",
		image_url: "#",
	},
];

function AOLSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<Wrapper>
			<div className="sliderbar-holder">
				<SelectableSlider
					length={AOL_Data.length}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
			</div>

			<AnimatePresence>
				<ContentWrapper>
					<p className="subtitle">Areas of Learning</p>
					<div className="h1__wrapper">
						<motion.h3
							key={currentIndex}
							initial={{ opacity: 1, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, type: "spring" }}
							className="heading"
						>
							{AOL_Data[currentIndex].heading}
						</motion.h3>
					</div>

					<div className="p__wrapper">
						<motion.p
							key={currentIndex}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, type: "spring" }}
							className="copy"
						>
							{AOL_Data[currentIndex].text}
						</motion.p>
					</div>
				</ContentWrapper>
			</AnimatePresence>
			<div className="buttons-holder">
				<ArrowBackIcon
					onClick={(e) => {
						if (
							(currentIndex < AOL_Data.length) &
							(currentIndex > 0)
						) {
							setCurrentIndex(currentIndex - 1);
						}
					}}
					className="back"
					style={
						currentIndex === 0 ? { opacity: 0.21 } : { opacity: 1 }
					}
				/>
				<ArrowForwardIcon
					onClick={() => {
						if (currentIndex < AOL_Data.length - 1) {
							setCurrentIndex(currentIndex + 1);
						}
					}}
					className="forward"
					style={
						currentIndex === AOL_Data.length - 1
							? { opacity: 0.21 }
							: { opacity: 1 }
					}
				/>
			</div>

			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default AOLSection;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-image: url("homepage/Areas_Of_Learning.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	.sliderbar-holder {
		height: auto;
		width: 25vw;
		position: absolute;
		top: 23%;
		left: 12vw;
	}

	.buttons-holder {
		width: 40vw;
		height: auto;

		position: absolute;

		left: 11.8vw;
		bottom: 23vh;

		display: flex;
		align-items: center;

		margin-top: 50px;
		color: var(--main-color-white);

		.back {
			height: 3.5vh;
			margin-left: 0;
			padding: 0;
			margin-right: 5px;

			&:hover {
				cursor: pointer;
			}
		}

		.forward {
			height: 3.5vh;
			margin-left: 0;
			padding: 0;
			margin-left: 5px;

			&:hover {
				cursor: pointer;
			}
		}
	}
`;

const ContentWrapper = styled.div`
	width: 40vw;
	height: 30vh;

	position: absolute;
	top: 50%;
	left: 12vw;
	transform: translate(0, -50%);

	color: var(--main-color-white);
	font-family: "Spectral", sans-serif;
	font-style: normal;

	display: flex;
	flex-direction: column;

	.h1__wrapper {
		height: 60px;
		min-height: fit-content;
		width: fit-content;
		padding-left: 0;
		overflow: hidden;
		display: flex;
		align-items: center;

		margin-bottom: 20px;
		margin-top: 20px;
	}

	.p__wrapper {
		width: fit-content;
		height: 25vh;
		overflow: hidden;
	}

	.subtitle {
		opacity: 0.38;
		color: #e8e8e8;
		font-size: 1em;
		font-weight: 300;
	}

	.heading {
		color: #e8e8e8;
		font-size: 2em;
		font-weight: 500;
		margin-bottom: 10px;
		margin-top: 8px;
	}

	.copy {
		color: #e8e8e8;
		font-weight: 300;
		font-size: 0.9em;
		line-height: 1.4;
		word-break: break-all;
	}
`;
