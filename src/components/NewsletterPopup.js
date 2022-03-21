import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../Store/StateProvider";
import axios from "axios";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LottieAnimation from "../components/Lottie";
import tickMark from "../components/lottie/tick-mark.json";

const useStyles = makeStyles((theme) => ({
	customHoverFocus: {
		"&:hover, &.Mui-focusVisible": { backgroundColor: "#36363686" },
	},
}));

function NewsletterPopup() {
	const [{ showNewsletter }, dispatch] = useStateValue();

	const classes = useStyles();

	const closeNewsletter = () => {
		dispatch({
			type: "TOGGLE_NEWSLETTER",
			payload: false,
		});
	};

	const [status, setStatus] = useState("");
	const [email, setEmail] = useState("");
	const [emailValid, setEmailValid] = useState("");

	const handleEmail = (e) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setEmail(e.target.value);

		if (re.test(String(e.target.value).toLowerCase())) {
			setEmailValid(true);
		} else if (e.target.value === "") {
			setEmailValid("");
		} else {
			setEmailValid(false);
		}
	};

	const handleSubscription = (e) => {
		e.preventDefault();
		console.log("Subscription Button Clicked");

		if (emailValid) {
			axios
				.post(
					"https://us-central1-the-dating-arts.cloudfunctions.net/addSubscriber",
					{ email: email }
				)
				.then((res) => {
					setStatus(true);
					console.log("Subscribed");
				})
				.catch((err) => {
					setStatus(false);
					console.log("Error");
				});
		}
	};

	return (
		<Wrapper
			showNewsletter={showNewsletter}
			emailValid={emailValid}
			emailExists={email}
		>
			<div className="upper">
				{!status ? <p>Subscribe To</p> : <p>Subscribed</p>}
				<h2>
					The Dating <span>Arts</span>
				</h2>

				<p className="blurb">
					Join our newsletter and get Dead / Rebirth E-book for free!
				</p>
			</div>

			<div className="bottom">
				{!status ? (
					<form onSubmit={handleSubscription}>
						<input
							type="text"
							placeholder="Email address"
							onChange={handleEmail}
							value={email}

							// style={
							// 	emailValid === ""
							// 		? {
							// 				borderColor: "#cccccc",
							// 		  }
							// 		: emailValid === true
							// 		? { borderColor: "#219e02 !important" }
							// 		: {
							// 				borderColor: "#cc1414 !important",

							// 				boxShadow: "#cc1414 !important",
							// 		  }
							// }
						/>
						<button type="submit">
							<NotificationsIcon className="bell-icon" />
						</button>
					</form>
				) : (
					<div className="registered-wrapper">
						<h4>
							You've been successfully registered! Check your
							email for confirmation.
						</h4>
						<LottieAnimation
							lotti={tickMark}
							height={70}
							width={70}
						/>
					</div>
				)}
			</div>
			<IconButtonWrapper
				onClick={closeNewsletter}
				className={classes.customHoverFocus}
			>
				<CloseIconWrapper />
			</IconButtonWrapper>
		</Wrapper>
	);
}

export default NewsletterPopup;

const Wrapper = styled.div`
	height: auto;
	width: 300px;
	background-color: #161616f0;
	/* 
	position: absolute;
	top: 50%;
	right: 50%; */

	position: absolute;
	right: 150px;
	bottom: 42px;

	z-index: 50;
	border: #cfcfcf 1px solid;
	border-radius: 5px;

	box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
		rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
		rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	padding: 30px 0px;

	.upper {
		color: #e6e6e6;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: "Spectral", sans-serif;
		width: 100%;

		.blurb {
			font-family: "GothamBook", sans-serif;
			text-transform: none;
			font-size: 11px;
			letter-spacing: 1px;
			align-self: center;

			/* background-color: red; */
			text-align: center;
			margin-top: 10px;
			margin-bottom: 0px;

			padding-right: 30px;
			padding-left: 30px;
			color: #bdbdbd;
		}
		p {
			font-family: "GothamThin", sans-serif;
			text-transform: uppercase;
			font-size: 12px;
			letter-spacing: 2px;
		}

		h2 {
			font-family: "GothamLight", sans-serif;
			text-transform: uppercase;
			font-size: 15px;
			letter-spacing: 6px;
			margin-top: 10px;
		}

		h3 {
			color: white;
			font-weight: 300;
			font-size: 20px;
			margin-top: 10px;
			height: 40px;

			background-color: #363636;
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.bottom {
		width: 100%;
		margin-top: 20px;

		.registered-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			width: 100%;
			margin-bottom: 10px;

			h4 {
				color: #bdbdbd;
				font-family: "GothamBook", sans-serif;
				font-size: 13px;
				width: 80%;

				text-align: center;
				margin-bottom: 10px;



				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		form {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			font-family: "Spectral", sans-serif;

			margin-right: 25px;
			margin-left: 25px;

			input {
				font-family: "GothamLight", sans-serif;
				height: 35px;
				width: 100%;
				background-color: transparent;
				outline: none;
				border: 1.5px solid;
				/* border-color: #cfcfcf89 !important; */
				border-color: ${(props) =>
					props.emailExists
						? props.emailValid
							? "green !important"
							: "red !important"
						: "#b3b3b3 !important"};

				border-radius: 20px;
				padding-left: 15px;
				color: #e7e7e7;
				transition: 0.3s ease-in-out;

				&:focus {
					border-color: ${(props) =>
						props.emailExists
							? props.emailValid
								? "#24b300 !important"
								: "red !important"
							: "white !important"};
					box-shadow: 0 0 0 3px #e0e0e029;
				}
			}

			button {
				font-family: "Spectral", sans-serif;
				height: 28px;
				width: 28px;

				display: flex;
				align-items: center;
				justify-content: center;

				position: absolute;
				right: 5px;
				top: 50%;
				transform: translateY(-50%);

				border-radius: 50%;
				outline: none;
				border: none;
				background-color: var(--main-color-red);
				color: white;
				transition: 0.3s ease-out;

				.bell-icon {
					font-size: 18px;
				}

				&:hover {
					background-color: #e61a0b;
					cursor: pointer;
				}

				&:focus {
					border: 1px solid #aaaaaa;
				}
			}
		}
	}

	display: ${(props) => (props.showNewsletter ? "flex" : "none")};

	@media only screen and (max-device-width: 480px) {
		height: 330px;
		width: 300px;
		background-color: #e7e7e7ec;
		/* 
	position: absolute;
	top: 50%;
	right: 50%; */

		position: absolute;
		left: 50%;
		top: 50%;

		transform: translate(-50%, -50%);

		z-index: 50;
		border: #272727 1px solid;
		border-radius: 5px;
	}
`;

const IconButtonWrapper = React.memo(styled(IconButton)`
	position: absolute !important;
	top: 5px;
	right: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`);

const CloseIconWrapper = React.memo(styled(CloseIcon)`
	color: #e6e6e6;
	font-size: 15px !important;
`);
