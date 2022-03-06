import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SubmitButton from "../../components/Buttons/SubmitButton";

import axios from "axios";

function ContactPage() {
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState("");

	const handleNameChange = (e) => {
		setFullName(e.target.value);
	};

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submit Button was clicked");

		const msg = {
			name: fullName,
			email: email,
			message: message,
			phone: phoneNumber,
		};

		axios
			.post(
				"https://us-central1-the-dating-arts.cloudfunctions.net/emailMessage",
				msg
			)
			.then((res) => {
				console.log("Response ====> ", res.data);
			})
			.catch((err) => {
				console.log("Error ====> ", err);
				setSuccess(true);
			});

		console.log("Form Data ====> ", msg);
	};

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
					<form onSubmit={handleSubmit} action="">
						{success === "" ? (
							<>
								<div className="top-section">
									<div className="field name-field">
										<input
											onChange={handleNameChange}
											value={fullName}
											placeholder="Full name"
											type="text"
											required
										/>
									</div>
									<div className="field phone-field">
										<input
											onChange={handlePhoneNumberChange}
											value={phoneNumber}
											placeholder="Phone number"
											required
										/>
									</div>
								</div>
								<div className="field second">
									<input
										onChange={handleEmailChange}
										value={email}
										placeholder="E-mail address"
										type="text"
										className="email-field"
										required
									/>
								</div>
								<div className="field third">
									<textarea
										required
										onChange={handleMessageChange}
										value={message}
										placeholder="Your message"
										wrap="soft"
										type="text"
										className="message"
									/>
								</div>
							</>
						) : (
							<></>
						)}
						<div className="submit-button">
							<SubmitButton type="submit" success={success} />
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

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

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

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}
`;

const ContentWrapper = styled.div`
	height: 70%;
	width: 90%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		width: 100%;
	}
`;

const Right = styled.div`
	height: 100%;
	width: 500px;
	margin-right: 30px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

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
		font-family: "GothamBook", sans-serif;
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

			border-radius: 2px;

			padding-left: 10px;
			padding-top: 10px;

			font-family: "GothamBook", sans-serif;
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
			border-radius: 2px;

			border: 1px solid white;
			background-color: transparent;
			transition: 0.2s ease-out;

			font-family: "GothamBook", sans-serif;

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

	@media only screen and (max-device-width: 480px) {
		width: 85%;
		height: 50%;
		margin-right: 0px;

		input {
			width: 100%;

			&:focus {
				border: 2px solid white;
			}
		}

		.top-section {
			display: flex;
			align-items: center;
			width: 100%;

			.name-field {
				display: flex;
				justify-content: flex-start;
				width: 48%;

				input {
					width: 100%;
				}
			}

			.phone-field {
				display: flex;
				align-items: center;

				justify-content: flex-end;
				width: 48%;

				input {
					width: 100%;
				}
			}
		}

		.submit-button {
			height: auto;
			width: 100%;
		}
	}
`;

const Left = styled.div`
	height: 100%;
	width: 500px;

	font-family: "GothamBook", sans-serif;

	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 80px;

	color: white;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	.main-heading {
		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
		h2 {
			font-weight: 400;
			font-size: 40px;

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;

			font-family: "GothamMedium", sans-serif;
			text-transform: uppercase;
			letter-spacing: 5px;

			margin-top: 10px;

			font-size: 30px;

			span {
				color: var(--main-color-red);

				pointer-events: all !important;
				user-select: text !important;
				--webkit-user-select: text !important;
			}
		}
	}

	.sub-heading {
		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
		h2 {
			font-family: "GothamLight", sans-serif;
			text-transform: uppercase;
			font-size: 15px;

			font-weight: 300;
			/* font-size: 20px; */
			margin-bottom: -10px;
			color: gray;

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}

	@media only screen and (max-device-width: 480px) {
		width: 85%;
		height: 50%;

		padding-left: 0px;

		.main-heading {
			h2 {
				font-size: 35px;
			}
		}
	}
`;
