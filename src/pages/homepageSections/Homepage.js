import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

function Homepage() {
	return (
		<>
			<HomePageWrapper
				id="main_app"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
				key={9}
			>
				<HeroSection />
				<BrandSection />
				<AOLSection />
				<UpcomingEvents />
				<LiveExperiences />
				<AtHomeTraining />
				<Testimonials />
				<Newsletter />
				<Footer />
			</HomePageWrapper>
		</>
	);
}

export default Homepage;

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
	}

	/* Firefox */

	scrollbar-color: var(--scrollbar-handle-color)
		var(--scrollbar-background-color); /* thumb and track color */
	scrollbar-width: thin;

	/* scroll-snap-type: y mandatory;
	scroll-behavior: smooth; */

	@media screen and (min-height: 585px) {
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
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
