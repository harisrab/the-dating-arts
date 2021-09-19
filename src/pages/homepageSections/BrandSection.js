import React from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";

function BrandSection() {
	return (
		<Wrapper>
			<img src="/homepage/Brands.svg" alt="" />
			<TextSection>
				<h2>People we've worked with.</h2>
				<p>
					The Dating Arts has contributed to the coaching of over 5000
					men in more than 30 countries, all united by a unique
					passion for the world of the Dating Arts. These associations
					are officially recognised by The Dating Arts and are at the
					heart of a range of Dating Arts activities.
				</p>
			</TextSection>

			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default BrandSection;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	background-color: var(--main-color-dark-black);

	position: relative;

	scroll-snap-align: start;

	overflow: hidden;

	img {
		position: absolute;
		height: 300px;
		top: 50%;
		left: 75%;

		transform: translate(-50%, -50%);
	}


	@media screen and (max-height: 550px) {
		height: 145vh;
	}


	@media screen and (max-width: 970px) {
		img {
			height: 250px;
		}
	}


	@media only screen and (max-device-width: 480px) {
		background-color: black;

		img {
			position: absolute;
			height: 250px;
			top: 80%;
			left: 52.5%;

			transform: translate(-50%, -50%);

			opacity: 0.15;
		}
	}
`;

const TextSection = styled.div`
	color: white;
	width: 43vw;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	position: absolute;
	top: 50%;
	left: 32%;
	transform: translate(-50%, -50%);

	h2 {
		font-family: "Spectral", sans-serif;
		font-weight: 600;
		font-size: 32px;
		margin-bottom: 15px;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	p {
		font-family: "Spectral", sans-serif;
		font-weight: 200;
		font-size: 15px;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	@media only screen and (max-device-width: 480px) {
		width: 85vw;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);

		h2 {
			font-family: "Spectral", sans-serif;
			font-weight: 600;
			font-size: 25px;
			margin-bottom: 15px;

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}

		p {
			font-family: "Spectral", sans-serif;
			font-weight: 200;
			font-size: 15px;

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}
`;
