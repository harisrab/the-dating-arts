import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
		<HomePageWrapper id="main_app">
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
	);
}

export default Homepage;

const HomePageWrapper = styled.div`
	z-index: 49;
	height: 100vh;
	width: 100%;

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
	scroll-behavior: smooth;
`;
