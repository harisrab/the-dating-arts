import React from "react";
import styled from "styled-components";
import ApplyNowButton from "../../components/Buttons/ApplyNowButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { motion } from "framer-motion";

function HeroSection() {
	return (
		<HeroSectionWrapper>
			<div className="text-wrapper">
				<h3 className="line1">
					Your dream woman will be right in front of you one day.
				</h3>
				<h3 className="line2">Do your have the skills to get her?</h3>
			</div>
			<div className="button-holder">
				<ApplyNowButton />
			</div>

			<DownArrow
				// initial={{ y: 0 }}
				animate={{ y: 10 }}
				transition={{
					repeat: Infinity,
					duration: 1,
					repeatType: "reverse",
				}}
			>
				<KeyboardArrowDownIcon className="downarrow" />
			</DownArrow>
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

		top: 36%;
		left: 13%;

		.line1 {
			font-weight: 200;
			font-size: 1.4em;
		}

		.line2 {
			font-size: 2.1em;
			font-weight: 700;
		}
	}

	.button-holder {
		position: absolute;
		top: 55%;
		left: 13%;
	}
`;

const DownArrow = styled(motion.div)`
	position: absolute;

	left: 50%;
	transform: translate(-50%, 0);

	bottom: 8%;

	width: auto;
	height: auto;

	.downarrow {
		color: white;
		height: 30px;
	}
`;
