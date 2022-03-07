// Imports
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";

// Component
function StorePage({ showWebsite, setShowWebsite }) {
	const [accessKey, setAccessKey] = useState("");
	const [error, setError] = useState("");

	const loginToWebsite = (e) => {
		e.preventDefault();

		if (accessKey === "Askcolgate@tda") {
			setShowWebsite(true);
		} else {
			setError("Key incorrect!");
		}
	};

	return (
		<HomePageWrapper
			id="main_app"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			key={1}
		>
			<div className="blur"></div>
			<Wrapper>
				<h3 className="storepage">The Dating Arts</h3>
				{/* <h2 className="storepage">
					Coming Soon <span className="storepage"></span>
				</h2> */}
				<form onSubmit={loginToWebsite}>
					<input
						type="password"
						placeholder="Access key"
						value={accessKey}
						onChange={(e) => setAccessKey(e.target.value)}
					/>
					<button type="submit">Login</button>
				</form>
				{error !== "" && <p>{error}</p>}
			</Wrapper>
		</HomePageWrapper>
	);
}

export default StorePage;

const HomePageWrapper = styled.div`
	z-index: 49;
	height: 100vh;
	width: 100%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	overflow-y: scroll;
	overflow: overlay;
	/* background-color: white; */

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	/* Style the scroll bar */
	&::-webkit-scrollbar {
		width: 0.6em;
	}

	&::-webkit-scrollbar-track {
		background: #cccccc;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: #4b4b4b;
		border-radius: 4px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: #424242;
	}

	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;

	/* background-image: url("homepage/herosection_background.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover; */

	position: relative;

	.blur {
		position: absolute;
		background-color: #00000078;
		backdrop-filter: blur(2px); // This be the blur
		height: 100vh;
		width: 100%;
		z-index: 0;
	}
`;

const Wrapper = styled.div`
	/* background-color: var(--main-color-white); */
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	scroll-snap-align: start;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	form {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30px;

		input {
			background-color: transparent;
			border: 2px solid #b3b3b3;
			width: 200px;
			height: 30px;
			margin-right: 10px;
			transition: 0.3s;
			outline: none;
			padding-left: 10px;
			font-family: "GothamThin", sans-serif;
			color: white;

			background-color: #f1f1f118;

			&:focus {
				border: 2px solid white;
				transition: 0.3s;
				border-radius: 0px;
				outline: none;
			}
		}

		button {
			height: 30px;
			width: 70px;
			border-radius: 0px;
			background-color: white;
			color: black;
			font-family: "GothamBook", sans-serif;
			font-size: 13px;
			transition: 0.5s;
			border: none;

			&:hover {
				cursor: pointer;
				background-color: #141414;
				transition: 0.5s;
			}

			&:active {
				background-color: #3a3a3a;
				transition: 0.5s;
			}
		}
	}

	p {
		font-family: "GothamThin", serif;
		color: var(--main-color-red);
		font-size: 12px;
		margin-top: 30px;
	}

	h3 {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 20px 40px;
		/* border: 1px solid white; */
		text-transform: uppercase;

		font-size: 10px;
		letter-spacing: 10px;
		color: white;

		font-family: "GothamMedium", sans-serif;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	h2 {
		font-family: "GothamThin", sans-serif;
		font-weight: 200;
		font-size: 25px;
		color: gray;
		margin-top: 20px;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;

		span {
			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}

	@media only screen and (max-device-width: 480px) {
		h3 {
			text-align: center;
			font-size: 30px;
		}

		h2 {
			font-size: 20px;
		}
	}
`;
