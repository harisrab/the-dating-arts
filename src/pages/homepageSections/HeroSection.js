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
					{/* <ApplyNowButton /> */}
					<button className="btn btn-1">
						<span>Apply now</span>
					</button>
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

		font-family: "GothamBold", sans-serif;
		color: white;
		position: absolute;

		top: 50%;
		left: 35%;

		transform: translate(-50%, -50%);

		.line1 {
			font-family: GothamThin;
			font-size: 22.5px;

			pointer-events: all;
			user-select: text;
		}

		.line2 {
			font-size: 34px;
			margin-top: 10px;

			pointer-events: all;
			user-select: text;
		}
		.button-holder {
			margin-top: 50px;

			.btn {
				border: none;
				font-family: "GothamBook", sans-serif;
				font-size: 13px;
				color: inherit;
				background: var(--main-color-white);
				cursor: pointer;
				padding: 14px 49px;
				display: inline-block;
				text-transform: uppercase;
				letter-spacing: 1px;
				outline: none;
				position: relative;
				-webkit-transition: all 0.3s;
				-moz-transition: all 0.3s;
				transition: all 0.3s;
				border: 2px solid var(--main-color-white);
				color: var(--main-color-dark-black);
				overflow: hidden;
			}

			.btn:after {
				content: "";
				position: absolute;
				z-index: -1;
				-webkit-transition: all 0.3s;
				-moz-transition: all 0.3s;
				transition: all 0.3s;
			}

			/* Button 1 */
			.btn-1:hover,
			.btn-1:active {
				/* font-family: "GothamBook", sans-serif; */
				color: black;
				background: #fff;
				border: 2px solid white;
			}
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
