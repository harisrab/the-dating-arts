import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SubmitButton from "../../components/Buttons/SubmitButton";
import { MaskedInput } from "baseui/input";

function ContactPage() {
	return (
		<HomePageWrapper
			id="main_app"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			key={5}
		>
			<ContentWrapper id="main_app">
				<Left>
					<div className="sub-heading">
						<h2>Contact Us</h2>
					</div>
					<div className="main-heading">
						<h2>
							We Respond <span>Fast</span>
						</h2>
					</div>
				</Left>
				<Right>
					<form action="">
						<div className="top-section">
							<div className="field name-field">
								<input placeholder="Full name" type="text" />
							</div>
							<div className="field phone-field">
								<MaskedInput
									placeholder="Phone number"
									mask="(999) 999-9999"
								/>
							</div>
						</div>
						<div className="field second">
							<input
								placeholder="E-mail address"
								type="text"
								className="email-field"
							/>
						</div>
						<div className="field third">
							<textarea
								placeholder="Your message"
								wrap="soft"
								type="text"
								className="message"
							/>
						</div>
						<div className="submit-button">
							<SubmitButton />
						</div>
					</form>
				</Right>
			</ContentWrapper>
		</HomePageWrapper>
	);
}

export default ContactPage;

const HomePageWrapper = styled(motion.div)`
	z-index: 49;
	height: 100vh;
	width: 100%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow-y: scroll;
	overflow: overlay;
	background-color: black;

	/* Style the scroll bar */
	&::-webkit-scrollbar {
		width: 0.6em;
	}

	&::-webkit-scrollbar-track {
		background: var(--scrollbar-background-color);
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: var(--scrollbar-handle-color);
		border-radius: 4px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: var(--scrollbar-handle-hover-color);
	}

	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;

	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
`;

const ContentWrapper = styled.div`
	height: 70%;
	width: 90%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Right = styled.div`
	height: 100%;
	width: 500px;
	margin-right: 30px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	.top-section {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 20px;
	}

	.second {
		margin-bottom: 20px;
	}

	.third {
		margin-bottom: 20px;
		height: 150px;
	}

	.field {
		font-family: "Spectral", sans-serif;
		color: white;

		display: flex;
		flex-direction: column;

		.message {
			width: 100%;
			max-width: 100%;
			min-width: 100%;

			height: 100%;

			border: 1px solid white;
			background-color: transparent;
			transition: 0.2s ease-out;

			border-radius: 5px;

			padding-left: 10px;
			padding-top: 10px;

			font-family: "Spectral";
			font-size: 14px;
			font-weight: 300;
			color: #dadada;

			/* Style the scroll bar */
			&::-webkit-scrollbar {
				display: none;
			}

			&:focus {
				outline: none;
				border: 2px solid;
				border-color: #e4e4e4;
			}
		}

		label {
			margin-bottom: 10px;
			font-weight: 300;
		}

		input {
			height: 35px;
			width: 230px;
			padding-left: 10px;
			border-radius: 5px;

			border: 1px solid white;
			background-color: transparent;
			transition: 0.2s ease-out;

			font-family: "Spectral";
			font-size: 14px;
			font-weight: 300;
			color: #dadada;

			&:focus {
				outline: none;
				border: 2px solid;
				border-color: #e4e4e4;
			}

			.email-field {
				width: 100%;
			}

			.message-field input {
				width: 100%;
				height: auto;
			}
		}

		.email-field {
			width: 100%;
		}
	}
`;

const Left = styled.div`
	height: 100%;
	width: 500px;

	font-family: "Spectral", sans-serif;

	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 80px;

	color: white;

	.main-heading {
		h2 {
			font-weight: 400;
			font-size: 40px;

			span {
				color: var(--main-color-red);
			}
		}
	}

	.sub-heading {
		h2 {
			font-weight: 300;
			font-size: 20px;
			margin-bottom: -10px;
			color: gray;
		}
	}
`;
