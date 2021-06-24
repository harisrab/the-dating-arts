import React from "react";
import styled from "styled-components";
import ApplyNowButton from "../../components/Buttons/ApplyNowButton";

function HeroSection() {
	return (
		<HeroSectionWrapper>
			<TextHolder>
				<h2>Your dream women will be right in front of you one day.</h2>
				<h3>Do you have the skills to get her?</h3>
			</TextHolder>
			<ApplyNowButton />
		</HeroSectionWrapper>
	);
}

export default HeroSection;

const HeroSectionWrapper = styled.div`
	height: 100vh;
	width: 100%;
	background-image: url("homepage/herosection_background.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	padding-top: 200px;
	padding-left: 190px;
`;

const TextHolder = styled.div`
	font-family: "Spectral", sans-serif;
	color: var(--main-color-white);

	height: fit-content;
	width: fit-content;

	h2 {
		font-weight: 200;
		font-size: 1.3rem;
		user-select: text;
	}

	h3 {
		font-weight: 700;
		font-size: 2rem;
	}
`;
