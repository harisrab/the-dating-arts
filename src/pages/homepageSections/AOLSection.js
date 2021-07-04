import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import SelectableSlider from "../../components/SelectableSlider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { motion, AnimatePresence } from "framer-motion";
import { request, gql } from "graphql-request";

function AOLSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const [AOL, setAOL] = useState([]);

	useEffect(() => {
		const URL =
			"https://api-us-east-1.graphcms.com/v2/ckq8brsjz4kol01xk7rmph436/master";

		const query = gql`
			{
				areasOfLearnings {
					title
					description
				}
			}
		`;

		request(URL, query)
			.then((data) => {
				console.log("Data AOL ====>", data.areasOfLearnings[2].title);

				setAOL(data.areasOfLearnings);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Wrapper>
			{AOL.length !== 0 ? (
				<>
					<AnimatePresence>
						<ContentWrapper>
							<div className="sliderbar-holder">
								<SelectableSlider
									length={AOL.length}
									currentIndex={currentIndex}
									setCurrentIndex={setCurrentIndex}
								/>
							</div>

							<p className="subtitle">Areas of Learning</p>
							<div className="h1__wrapper">
								<motion.h3
									key={currentIndex}
									initial={{ opacity: 1, y: 40 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, type: "spring" }}
									className="heading"
								>
									{AOL[currentIndex].title}
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
									{AOL[currentIndex].description}
								</motion.p>
							</div>

							<div className="buttons-holder">
								<ArrowBackIcon
									onClick={(e) => {
										if (
											(currentIndex < AOL.length) &
											(currentIndex > 0)
										) {
											setCurrentIndex(currentIndex - 1);
										}
									}}
									className="back"
									style={
										currentIndex === 0
											? { opacity: 0.21 }
											: { opacity: 1 }
									}
								/>
								<ArrowForwardIcon
									onClick={() => {
										if (currentIndex < AOL.length - 1) {
											setCurrentIndex(currentIndex + 1);
										}
									}}
									className="forward"
									style={
										currentIndex === AOL.length - 1
											? { opacity: 0.21 }
											: { opacity: 1 }
									}
								/>
							</div>
						</ContentWrapper>
					</AnimatePresence>
					<AnimatedDownArrow />{" "}
				</>
			) : (
				<></>
			)}
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

	
`;

const ContentWrapper = styled.div`
	width: 40vw;
	height: auto;

	position: absolute;
	top: 50%;
	left: 12%;
	transform: translate(0, -50%);

	color: var(--main-color-white);
	font-family: "Spectral", sans-serif;
	font-style: normal;

	display: flex;
	flex-direction: column;

	.sliderbar-holder {
		height: auto;
		width: 25vw;
		margin-bottom: 40px;
	}

	.h1__wrapper {
		height: 60px;
		min-height: fit-content;
		width: fit-content;
		padding-left: 0;
		overflow: hidden;
		display: flex;
		align-items: center;

		margin-bottom: 20px;
		margin-top: 0px;
	}

	.p__wrapper {
		width: fit-content;
		height: auto;
		padding-bottom: 20px;
		overflow: hidden;
	}

	.subtitle {
		opacity: 0.38;
		color: #e8e8e8;
		font-size: 16px;
		font-weight: 300;
	}

	.heading {
		color: #e8e8e8;
		font-size: 32px;
		font-weight: 500;
		margin-bottom: 10px;
		margin-top: 8px;
	}

	.copy {
		color: #e8e8e8;
		font-weight: 300;
		font-size: 14.4px;
		line-height: 1.4;
		word-break: keep-all;
	}

	/* Buttons */
	.buttons-holder {
		width: 40vw;
		height: auto;

		display: flex;
		align-items: center;

		margin-top: 20px;
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
