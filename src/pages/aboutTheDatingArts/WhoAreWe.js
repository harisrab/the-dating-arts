import React, { useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageVar = {
	initial: { width: "0%" },
	final: { width: "90%" },
};

function WhoAreWe({ heading, description, url }) {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("final");
		}
	}, [controls, inView]);

	return (
		<Wrapper>
			<ContentWrapper>
				<LeftSection>
					<div className="text-container">
						<div className="main-heading">
							<h1>{heading}</h1>
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
								delay: 0.3,
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

export default WhoAreWe;

const Wrapper = styled.div`
	background-color: var(--main-color-black);
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

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

	overflow-x: hidden;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		background-image: none;
		background-color: black;
	}
`;

const ContentWrapper = styled.div`
	width: 89.37%;
	height: 86.94%;

	display: flex;
	pointer-events: all;
	user-select: text;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		height: 75%;
		width: 100%;
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

		.main-heading {
			font-size: 20px;
			pointer-events: all;
			user-select: text;

			h1 {
				pointer-events: all;
				user-select: text;
				font-weight: 400;
			}

			margin-bottom: 10px;
		}

		.summary {
			pointer-events: all;
			user-select: text;
			font-weight: 200;
			font-size: 15px;
		}

		margin-left: 50px;
	}

	@media only screen and (max-device-width: 480px) {
		height: 60%;
		width: 100%;

		display: flex;
		align-items: center;
		pointer-events: all;
		user-select: text;

		justify-content: center;

		.text-container {
			display: flex;
			flex-direction: column;

			height: auto;
			width: 85%;

			font-family: "Spectral", sans-serif;
			color: var(--main-color-white);
			pointer-events: all;
			user-select: text;

			.main-heading {
				font-size: 18px;
				pointer-events: all;
				user-select: text;

				h1 {
					pointer-events: all;
					user-select: text;
					font-weight: 400;
				}

				margin-bottom: 10px;
			}

			.summary {
				pointer-events: all;
				user-select: text;
				font-weight: 200;
				font-size: 15px;
				height: 180px;
				overflow-y: scroll;
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

			transform-origin: left;
			-o-transform-origin: left;
		}
	}

	@media only screen and (max-device-width: 480px) {
		height: 40%;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		pointer-events: all;
		user-select: text;

		.img_wrapper {
			height: auto;
			width: auto;

			display: flex;
			align-items: center;
			justify-content: center;
			img {
				height: 180px;
				width: 380px;

				object-fit: cover;
				-o-object-fit: cover;

				transform-origin: left;
				-o-transform-origin: left;
			}
		}
	}
`;
