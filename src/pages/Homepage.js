import React, { useState } from "react";
import styled from "styled-components";

import HeroSection from "./homepageSections/HeroSection";
import BrandSection from "./homepageSections/BrandSection";
import AOLSection from "./homepageSections/AOLSection.js";
import UpcomingEvents from "./homepageSections/UpcomingEvents";
import LiveExperiences from "./homepageSections/LiveExperiences";
import AtHomeTraining from "./homepageSections/AtHomeTraining";
import Testimonials from "./homepageSections/Testimonials";
import Newsletter from "./homepageSections/Newsletter";
import Footer from "./homepageSections/Footer";

function Homepage({ showEventsModal, setShowEventsModal }) {
	return (
		<HomePageWrapper id="main_app">
			<HeroSection />
			<BrandSection />
			<AOLSection />
			<UpcomingEvents
				showEventsModal={showEventsModal}
				setShowEventsModal={setShowEventsModal}
			/>
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
