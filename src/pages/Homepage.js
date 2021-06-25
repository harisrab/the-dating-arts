import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import HeroSection from "./homepageSections/HeroSection";

function Homepage() {
	return (
		<HomePageWrapper>
			<HeroSection />
			<HeroSection></HeroSection>
			<HeroSection></HeroSection>
			<HeroSection></HeroSection>
		</HomePageWrapper>
	);
}

export default Homepage;

const HomePageWrapper = styled.div`
	z-index: 49;
	height: 100vh;
	width: 100%;

	background-color: red;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	overflow-y: scroll;
	overflow: overlay;

	/* Style the scroll bar */
	&::-webkit-scrollbar {
		width: 0.3em;
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
`;
