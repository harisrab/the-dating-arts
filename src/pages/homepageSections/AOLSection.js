import React, { useState } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import SelectableSlider from "../../components/SelectableSlider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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

			<ContentWrapper>
				<p className="subtitle">Areas of Learning</p>
				<h3 className="heading">{AOL_Data[currentIndex].heading}</h3>
				<p className="copy">{AOL_Data[currentIndex].text}</p>
			</ContentWrapper>
			<div className="buttons-holder">
				<ArrowBackIcon
					onClick={() => {
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
			opacity: ${(props) => props.opacityVal};
		}

		.forward {
			height: 3.5vh;
			margin-left: 0;
			padding: 0;
			margin-left: 5px;
			opacity: ${(props) => props.opacityVal};
		}
	}
`;

const ContentWrapper = styled.div`
	width: 40vw;
	height: fit-content;

	position: absolute;
	top: 50%;
	left: 12vw;
	transform: translate(0, -50%);

	color: var(--main-color-white);
	font-family: "Spectral", sans-serif;
	font-style: normal;

	display: flex;
	flex-direction: column;

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
