import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import SelectableSlider from "../../components/SelectableSlider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { motion, AnimatePresence } from "framer-motion";
import { useStateValue } from "../../Store/StateProvider";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AOLBuyButton from "../../components/Buttons/AOLBuyButton";

const useStyles = makeStyles((theme) => ({
	customHoverFocus: {
		"&:hover, &.Mui-focusVisible": { backgroundColor: "#79797985" },
		backgroundColor: { backgroundColor: "#aaaaaa85" },
	},
}));

function AOLSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [{ cmsData }, dispatch] = useStateValue();

	const classes = useStyles();

	const [AOL, setAOL] = useState([]);

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setAOL(cmsData.data.areasOfLearnings);
		}
	}, [cmsData]);

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
								<div className="left">
									<AOLBuyButton
										url={AOL[currentIndex].gumroadLink}
									/>
								</div>
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

	pointer-events: all;
	user-select: text;

	background-image: url("homepage/Areas_Of_Learning.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	@media only screen and (max-device-width: 480px) {
		background-image: none;
		background-color: black;
	}

	overflow: hidden;
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

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	flex-direction: column;

	pointer-events: all;
	user-select: text;

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
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		align-items: center;

		margin-bottom: 20px;
		margin-top: 0px;

		pointer-events: all;
		user-select: text;
	}

	.p__wrapper {
		width: fit-content;
		height: 120px;
		padding-bottom: 20px;
		overflow: hidden;
		overflow-y: scroll;

		pointer-events: all;
		user-select: text;

		margin-bottom: 20px;
		padding-right: 20px;

		&::-webkit-scrollbar {
			width: 0.3em;
		}

		&::-webkit-scrollbar-track {
			background: var(--scrollbar-background-color);
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: #c2c2c2;
			border-radius: 4px;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: var(--scrollbar-handle-hover-color);
		}
	}

	.subtitle {
		color: gray;
		font-size: 16px;
		font-weight: 300;

		pointer-events: all;
		user-select: text;
	}

	.heading {
		color: #e8e8e8;
		font-size: 32px;
		font-weight: 500;
		margin-bottom: 10px;
		margin-top: 8px;

		pointer-events: all;
		user-select: text;
	}

	.copy {
		color: #e8e8e8;
		font-weight: 300;
		font-size: 14.4px;
		line-height: 1.4;
		word-break: keep-all;

		pointer-events: all;
		user-select: text;
	}

	/* Buttons */
	.buttons-holder {
		width: 40vw;
		height: auto;

		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 20px;
		color: var(--main-color-white);

		.left {
			display: flex;
			align-items: center;

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

		.right {
			display: flex;
			align-items: center;
		}
	}

	@media only screen and (max-device-width: 480px) {
		width: 85vw;
		height: auto;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.sliderbar-holder {
			height: auto;
			width: 100%;
			margin-bottom: 40px;
		}

		.h1__wrapper {
			height: 60px;
			min-height: fit-content;
			width: fit-content;
			padding-left: 0;
			overflow: hidden;
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			align-items: center;

			margin-bottom: 20px;
			margin-top: 10px;

			pointer-events: all;
			user-select: text;
		}

		.p__wrapper {
			width: fit-content;
			height: 180px;
			padding-bottom: 20px;
			overflow: hidden;
			overflow-y: scroll;

			pointer-events: all;
			user-select: text;

			&::-webkit-scrollbar {
				width: 0.3em;
			}

			&::-webkit-scrollbar-track {
				background: var(--scrollbar-background-color);
			}

			/* Handle */
			&::-webkit-scrollbar-thumb {
				background: #c2c2c2;
				border-radius: 4px;
			}

			/* Handle on hover */
			&::-webkit-scrollbar-thumb:hover {
				background: var(--scrollbar-handle-hover-color);
			}
		}

		.subtitle {
			color: gray;
			font-size: 16px;
			font-weight: 300;

			pointer-events: all;
			user-select: text;
		}

		.heading {
			color: #e8e8e8;
			font-size: 28px;
			font-weight: 500;
			margin-bottom: 10px;
			margin-top: 8px;

			pointer-events: all;
			user-select: text;
		}

		.copy {
			color: #e8e8e8;
			font-weight: 300;
			font-size: 14.4px;
			line-height: 1.4;
			word-break: keep-all;

			pointer-events: all;
			user-select: text;
		}
	}
`;
