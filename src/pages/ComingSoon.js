
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
			<Wrapper>
				<h3 className="storepage">
					The Dating <span>Arts</span>
				</h3>
				<h2 className="storepage">
					Coming Soon <span className="storepage"></span>
				</h2>
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
	background-color: white;

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
`;

const Wrapper = styled.div`
	background-color: var(--main-color-white);
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
			border: 2px solid gray;
			width: 200px;
			height: 30px;
			margin-right: 10px;
			transition: 0.3s;
			outline: none;
			padding-left: 10px;
			font-family: "Spectral", sans-serif;

			&:focus {
				border: 2px solid black;
				transition: 0.3s;
				border-radius: 0px;
				outline: none;
			}
		}

		button {
			height: 30px;
			width: 70px;
			border-radius: 0px;
			background-color: black;
			color: white;
			font-family: "Spectral", sans-serif;
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
		font-family: "Spectral", serif;
		color: var(--main-color-red);
		font-size: 13px;
		margin-top: 30px;
	}

	h3 {
		font-family: "Spectral", sans-serif;
		font-weight: 400;
		font-size: 50px;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;

		span {
			color: var(--main-color-red);
		}
	}

	h2 {
		font-family: "Spectral", sans-serif;
		font-weight: 200;
		font-size: 25px;
		color: gray;

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
