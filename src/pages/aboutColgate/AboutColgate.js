import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import Sections
import HeroSection from "./HeroSection";
import BeginningsAndMasters from "./BeginningsAndMasters";
import TheTutelage from "./TheTutelage";
import ExperiencesOfLife from "./ExperiencesOfLife";
import Newsletter from "../homepageSections/Newsletter";
import Footer from "../homepageSections/Footer";

function AboutColgate() {
	return (
		<AboutWrapper
			id="main_app"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			key={6}
		>
			<HeroSection />
			<BeginningsAndMasters />
			<TheTutelage />
			<ExperiencesOfLife />
			<Newsletter />
			<Footer />
		</AboutWrapper>
	);
}

export default AboutColgate;

const AboutWrapper = styled(motion.div)`
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
	background-color: black;

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
