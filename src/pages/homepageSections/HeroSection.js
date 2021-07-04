import React from "react";
import styled from "styled-components";
import ApplyNowButton from "../../components/Buttons/ApplyNowButton";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { motion } from "framer-motion";

function HeroSection() {
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
	width: 100%;
	flex-shrink: 0;

	background-image: url("homepage/herosection_background.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	.text-wrapper {
		font-family: "Spectral";
		color: white;
		position: absolute;

		top: 50%;
		left: 35%;

		transform: translate(-50%, -50%);

		.line1 {
			font-weight: 200;
			font-size: 22.5px;
		}

		.line2 {
			font-size: 33.6px;
			font-weight: 700;
		}
		.button-holder {
			margin-top: 30px;
		}
	}
`;
