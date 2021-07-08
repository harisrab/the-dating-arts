import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SubmitButton from "../../components/Buttons/SubmitButton";

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
			<ContentWrapper>
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
								<label htmlFor="">Full name</label>
								<input type="text" />
							</div>
							<div className="field phone-field">
								<label htmlFor="">Phone number</label>
								<input type="text" />
							</div>
						</div>
						<div className="field email-field">
							<label htmlFor="">E-mail address</label>
							<input type="text" />
						</div>
						<div className="field message-field">
							<label htmlFor="">Message</label>
							<input type="text" />
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
	background-color: blue;
	height: 70%;
	width: 90%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Right = styled.div`
	height: 100%;
	width: 500px;
	background-color: #000000;

	display: flex;
	flex-direction: column;

	.top-section {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 20px;
	}

	.field {
		font-family: "Spectral", sans-serif;
		color: white;

		display: flex;
		flex-direction: column;

		label {
			margin-bottom: 10px;
			font-weight: 300;
		}

		input {
			height: 35px;
			width: 230px;
			padding-left: 5px;
			border-radius: 3px;
		
			&:focus {
				border: 1px solid red;
			}
		}
	}
`;

const Left = styled.div`
	height: 100%;
	width: 500px;
	background-color: yellow;

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
		}
	}
`;
