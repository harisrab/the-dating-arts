import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../Store/StateProvider";
import axios from "axios";

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
		<Wrapper showNewsletter={showNewsletter}>
			<div className="upper">
				<p>Subscribe To</p>
				<h2>
					The Dating <span>Arts</span>
				</h2>
				<h3>Newsletter</h3>
			</div>

			<div className="bottom">
				{!status ? (
					<form onSubmit={handleSubscription}>
						<input
							type="text"
							placeholder="Email address"
							onChange={handleEmail}
							value={email}
							style={
								emailValid === ""
									? { borderColor: "#1d1d1d" }
									: emailValid === true
									? { borderColor: "#33f502" }
									: { borderColor: "red" }
							}
						/>
						<button type="submit">SUBSCRIBE</button>
					</form>
				) : (
					<div className="registered-wrapper">
						<h4>
							You've been successfully registered! Check your
							email for confirmation.
						</h4>
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
	height: 330px;
	width: 300px;
	background-color: #e7e7e7ec;
	/* 
	position: absolute;
	top: 50%;
	right: 50%; */

	position: absolute;
	right: 65px;
	bottom: 90px;

	z-index: 50;
	border: #272727 1px solid;
	border-radius: 5px;

	box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
		rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
		rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	.upper {
		color: #272727;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: "Spectral", sans-serif;
		margin-top: 60px;
		width: 100%;

		p {
			font-weight: 200;
		}

		h2 {
			font-weight: 300;
			font-size: 30px;

			span {
				color: var(--main-color-red);
			}
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
		margin-bottom: 45px;

		.registered-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 100%;
			margin-bottom: 10px;

			h4 {
				color: #272727;
				font-family: "Spectral", sans-serif;
				font-weight: 300;
				font-size: 15px;
				width: 80%;

				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			font-family: "Spectral", sans-serif;

			input {
				font-family: "Spectral", sans-serif;
				height: 30px;
				width: 80%;
				background-color: transparent;
				outline: none;
				border: 1px solid #272727;
				border-radius: 3px;
				padding-left: 10px;
				color: #272727;
			}

			button {
				font-family: "Spectral", sans-serif;
				height: 30px;
				width: 80%;
				margin-top: 10px;
				border-radius: 3px;
				outline: none;
				border: none;
				background-color: var(--main-color-red);
				color: white;
				transition: 0.3s ease-out;

				&:hover {
					background-color: #b90303;
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

const IconButtonWrapper = styled(IconButton)`
	position: absolute !important;
	top: 5px;
	right: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CloseIconWrapper = styled(CloseIcon)`
	color: #272727;
	font-size: 15px !important;
`;
