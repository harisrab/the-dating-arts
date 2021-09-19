import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ApplyNowButton from "../../components/Buttons/ApplyNowButton";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { motion } from "framer-motion";

function HeroSection() {
	const [isMobile, setIsMobile] = useState();

	return (
		<HeroSectionWrapper>
			<div className="text-wrapper">
				<h3 className="line1">
					Your dream woman will be right in front of you one day.
				</h3>
				<h3 className="line2">Do your have the skills to get her?</h3>
				<div className="button-holder">
					<ApplyNowButton />
				</div>
			</div>

			<AnimatedDownArrow />
		</HeroSectionWrapper>
	);
}

export default HeroSection;

const HeroSectionWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	flex-shrink: 0;

	pointer-events: all;
	user-select: text;

	background-image: url("homepage/herosection_background.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	@media screen and (max-height: 550px) {
		height: 145vh;
	}

	.text-wrapper {
		pointer-events: all;
		user-select: text;

		font-family: "Spectral";
		color: white;
		position: absolute;

		top: 50%;
		left: 35%;

		transform: translate(-50%, -50%);

		.line1 {
			font-weight: 200;
			font-size: 22.5px;

			pointer-events: all;
			user-select: text;
		}

		.line2 {
			font-size: 33.6px;
			font-weight: 700;

			pointer-events: all;
			user-select: text;
		}
		.button-holder {
			margin-top: 30px;
		}
	}

	@media only screen and (max-device-width: 480px) {
		background-image: url("");
		background-repeat: no-repeat;
		background-position: -800px;
		background-size: cover;

		background-color: #030303;

		.text-wrapper {
			pointer-events: all;
			user-select: text;

			font-family: "Spectral";
			color: white;
			position: absolute;

			top: 50%;
			left: 50%;

			width: 85vw;

			transform: translate(-50%, -50%);

			.line1 {
				font-weight: 200;
				font-size: 20px;

				pointer-events: all;
				user-select: text;

				margin-bottom: 10px;
			}

			.line2 {
				font-size: 33.6px;
				font-weight: 400;

				pointer-events: all;
				user-select: text;
			}
			.button-holder {
				margin-top: 30px;
			}
		}
	}
`;
