import React, { useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageVar = {
	initial: { width: "0%" },
	final: { width: "90%" },
};

function HeroSection({ heading, description, url }) {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("final");
		}
		// if (!inView) {
		// 	controls.start("initial");
		// }
	}, [controls, inView]);

	return (
		<Wrapper>
			<ContentWrapper>
				<LeftSection>
					<div className="text-container">
						<div className="about">
							<p>About</p>
						</div>
						<div className="main-heading">
							<h1>
								{heading}
							</h1>
						</div>
						<div className="summary">{description}</div>
					</div>
				</LeftSection>
				<RightSection>
					<motion.div className="img_wrapper">
						<motion.img
							ref={ref}
							style={{ originX: 0 }}
							variants={imageVar}
							initial="initial"
							animate={controls}
							transition={{
								duration: 2,
								delay: 0.6,
								ease: "easeOut",
							}}
							src={url}
							alt=""
						/>
					</motion.div>
				</RightSection>
			</ContentWrapper>
			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default HeroSection;

const Wrapper = styled.div`
	background-color: var(--main-color-black);
	height: 100vh;
	width: 100vw;
	flex-shrink: 0;

	overflow-x: hidden;

	scroll-snap-align: start;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	pointer-events: all;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		background-image: none;
		background-color: black;
	}

	overflow: hidden;
`;

const ContentWrapper = styled.div`
	width: 89.37%;
	height: 86.94%;

	display: flex;
	pointer-events: all;
	user-select: text;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		height: 70%;
		width: 80%;
	}
`;

const LeftSection = styled.div`
	height: 100%;
	width: 60%;

	display: flex;
	align-items: center;
	pointer-events: all;
	user-select: text;

	.text-container {
		display: flex;
		flex-direction: column;

		height: auto;
		width: 80%;

		font-family: "Spectral", sans-serif;
		color: var(--main-color-white);
		pointer-events: all;
		user-select: text;

		.about {
			pointer-events: all;
			user-select: text;
			p {
				font-family: "GothamLight", sans-serif;
				text-transform: uppercase;
				font-size: 15px;
				pointer-events: all;
				user-select: text;
				color: gray;
			}
			margin-bottom: -3px;
		}

		.main-heading {
			font-size: 20px;
			pointer-events: all;
			user-select: text;

			h1 {

				font-family: "GothamMedium", sans-serif;
				text-transform: uppercase;
				font-size: 25px;
				letter-spacing: 5px;
				margin-top: 5px;


				pointer-events: all;
				user-select: text;
				font-weight: 400;
				span {
					pointer-events: all;
					user-select: text;
					color: var(--main-color-red);
				}
			}

			margin-bottom: 10px;
		}

		.summary {

			font-family: "GothamBook", sans-serif;
			font-size: 15px;


			color: gray;
			line-height: 1.5;
			pointer-events: all;
			user-select: text;
			font-weight: 200;
		}

		margin-left: 50px;
	}

	@media only screen and (max-device-width: 480px) {
		width: 100%;
		height: 60%;
		width: 100%;

		.text-container {
			display: flex;
			flex-direction: column;

			height: auto;
			width: 100%;

			font-family: "Spectral", sans-serif;
			color: var(--main-color-white);
			pointer-events: all;
			user-select: text;

			.about {
				pointer-events: all;
				user-select: text;
				p {
					pointer-events: all;
					user-select: text;
					color: gray;
				}
				margin-bottom: -3px;
			}

			.main-heading {
				font-size: 20px;
				pointer-events: all;
				user-select: text;

				h1 {
					pointer-events: all;
					user-select: text;
					font-weight: 400;
					span {
						pointer-events: all;
						user-select: text;
						color: var(--main-color-red);
					}
				}

				margin-bottom: 10px;
			}

			.summary {
				pointer-events: all;
				user-select: text;
				font-weight: 200;
			}

			margin-left: 0px;
		}
	}
`;

const RightSection = styled(motion.div)`
	height: 100%;
	width: 40%;

	display: flex;
	align-items: center;
	justify-content: center;

	pointer-events: all;
	user-select: text;

	.img_wrapper {
		height: auto;
		width: auto;

		img {
			height: 380px;
			width: 380px;

			object-fit: cover;
			-o-object-fit: cover;
			/* -o-object-position: right; */
			/* object-position: right; */

			transform-origin: left;
			-webkit-transform-origin: left;
		}
	}

	@media only screen and (max-device-width: 480px) {
		height: 40%;
		width: 100%;

		.img_wrapper {
			height: auto;
			width: auto;

			display: flex;
			align-items: center;
			justify-content: center;

			img {
				height: 190px;
				width: 250px;

				object-fit: cover;
				-o-object-fit: cover;
				/* -o-object-position: right; */
				/* object-position: right; */

				transform-origin: left;
				-webkit-transform-origin: left;
			}
		}
	}
`;
