import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useScrollDirection } from "react-use-scroll-direction";

// Import All Sections
import HeroSection from "./HeroSection";
import BrandSection from "./BrandSection";
import AOLSection from "./AOLSection.js";
import UpcomingEvents from "./UpcomingEvents";
import LiveExperiences from "./LiveExperiences";
import AtHomeTraining from "./AtHomeTraining";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function Homepage() {
	// const scrollTarget = useRef();
	const { isScrollingUp, scrollTargetRef } = useScrollDirection();

	useEffect(() => {
		console.log("Scroll Target Ref =====> ", isScrollingUp);
	}, [isScrollingUp]);

	

	return (
		<>
			<HomePageWrapper id="main_app" ref={scrollTargetRef} key={9}>
				<HeroSection />
				<AOLSection />
				<UpcomingEvents />
				<LiveExperiences />
				<AtHomeTraining />
				<Testimonials />
				<Footer />
			</HomePageWrapper>
		</>
	);
}

Homepage.whyDidYouRender = true;

export default Homepage;

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

		z-index: 2000000;
	}

	/* Firefox */

	scrollbar-color: var(--scrollbar-handle-color)
		var(--scrollbar-background-color); /* thumb and track color */
	scrollbar-width: thin;

	/* scroll-snap-type: y mandatory;
	scroll-behavior: smooth; */

	@media screen and (min-height: 585px) {
		/* scroll-snap-type: y mandatory; */
		/* scroll-behavior: smooth; */
	}

	@media only screen and (max-device-width: 480px) {
		/* Style the scroll bar */
		scroll-snap-type: none;
		scroll-behavior: smooth;

		&::-webkit-scrollbar {
			display: none;
		}
	}
`;
