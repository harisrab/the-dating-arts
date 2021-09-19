import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import EmailIcon from "@material-ui/icons/Email";
import SubscribeButton from "../../components/Buttons/SubscribeButton";
import axios from "axios";

function Newsletter() {
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

	useEffect(() => {
		console.log("Email Valid Status ===> ", emailValid);
	}, [emailValid]);

	const handleSubscription = (e) => {
		e.preventDefault();
		console.log("Subscription Button Clicked");

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
	};

	return (
		<Wrapper>
			<NewsletterWrapper>
				<TextContainer>
					<p>Subscribe to</p>
					<h3>
						The Dating <span>Arts</span> Newsletter
					</h3>
					<p className="blurb">
						Get the lastest news and stories delivered to your inbox
					</p>
				</TextContainer>
				<FunctionalContainer>
					<form onSubmit={handleSubscription}>
						<input
							style={
								emailValid === ""
									? { borderColor: "white" }
									: emailValid === true
									? { borderColor: "#33f502" }
									: { borderColor: "red" }
							}
							className="input__box"
							type="email"
							onChange={handleEmail}
							value={email}
						/>
						<EmailIcon className="icon" />
						<SubscribeButton type="submit" status={status} />
					</form>
				</FunctionalContainer>
			</NewsletterWrapper>

			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default Newsletter;

const Wrapper = styled.div`
	overflow: hidden;

	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	h1 {
		color: white;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		background-image: none;
		background-color: black;
	}
`;

const NewsletterWrapper = styled.div`
	width: 80%;
	height: 120px;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
	}

	@media screen and (max-height: 550px) {
		height: 150vh;
	}
`;

const TextContainer = styled.div`
	height: 100%;
	width: auto;
	padding-left: 10px;
	padding-right: 10px;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	justify-content: center;

	font-family: "Spectral", sans-serif;

	color: var(--main-color-white);

	p {
		font-weight: 200;
		font-size: 15px;
	}

	h3 {
		font-weight: 400;
		font-size: 31.5px;

		span {
			color: var(--main-color-red);
		}
	}

	.blurb {
		font-size: 16.5px;
		opacity: 0.8;
		margin-top: -5px;
	}

	@media only screen and (max-device-width: 480px) {
		width: 100%;
		height: auto;
		padding-left: 0;
		padding-right: 0;

		p {
			margin-bottom: 10px;
		}

		h3 {
			margin-bottom: 20px;
		}
	}
`;

const FunctionalContainer = styled.div`
	height: 100%;
	flex-grow: 1;
	/* background-color: #9900ff47; */

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: flex-end;

	@media screen and (max-height: 550px) {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}

	form {
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		width: 100%;
		margin-bottom: 22px;

		@media screen and (max-height: 550px) {
			margin-bottom: -25px;
		}

		position: relative;

		.icon {
			position: absolute;
			top: 50%;
			left: 35px;
			transform: translateY(-50%);
			font-size: 18px;
			color: #ffffffbc;
		}

		.input__box {
			flex-grow: 1;
			margin-right: 10px;
			margin-left: 20px;
			background-color: transparent;

			border: 1px solid white;

			color: white;

			padding-left: 50px;
			font-size: 15px;
			font-family: "Spectral", sans-serif;
			font-weight: 200;
			outline: none;
		}
	}

	@media only screen and (max-device-width: 480px) {
		width: 100%;
		height: 100px;
		align-items: center;
		justify-content: center;
		margin-top: 30px;

		form {
			flex-direction: column;
			justify-content: center;
			margin-bottom: 0px;
			width: 100%;

			.icon {
				position: absolute;
				top: 20%;
				transform: translateY(-50%);
				left: 15px;
				font-size: 18px;
				color: #ffffffbc;
			}

			.input__box {
				height: 40px;
				width: 100%;
				margin-left: 0;
				margin-right: 0;
				transition: 0.2s;

				&:focus {
					outline: none;
					border: 2px white solid;
				}
			}
		}
	}
`;
