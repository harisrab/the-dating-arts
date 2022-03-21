import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useStateValue } from "../../Store/StateProvider";

// Import Sections
import HeroSection from "./HeroSection";
import BeginningsAndMasters from "./BeginningsAndMasters";
import TheTutelage from "./TheTutelage";
import ExperiencesOfLife from "./ExperiencesOfLife";
import VideoListings from "./VideoListings";
import Newsletter from "../homepageSections/Newsletter";
import Footer from "../homepageSections/Footer";

function AboutColgate() {
	const [{ cmsData }, dispatch] = useStateValue();
	const [data, setData] = useState({});

	useEffect(() => {
		if (cmsData.status === "fetched") {
		setData(cmsData.data.pageAboutColgates[0]);
		}
	}, [cmsData]);

	return (
		<div id="main_app">
			{cmsData.status === "fetched" && data !== {} ? (
				<AboutWrapper
					id="main_app"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					key={6}
				>
					<HeroSection
						heading={data.heroTitle}
						description={data.heroDescription}
						url={cmsData.data.pageAboutColgates[0].heroImage.url}
					/>
					<BeginningsAndMasters
						heading={data.beginningsAndMasters}
						description={data.beginningsAndMastersDescription}
						url={
							cmsData.data.pageAboutColgates[0]
								.beginningsAndMastersImage.url
						}
					/>
					<TheTutelage
						heading={data.theTutelageTitle}
						description={data.theTutelageDescription}
						url={
							cmsData.data.pageAboutColgates[0].theTutelageImage
								.url
						}
					/>
					<ExperiencesOfLife
						heading={data.experiencesOfLifeTitle}
						description={data.experiencesOfLifeDescription}
						url={
							cmsData.data.pageAboutColgates[0]
								.experiencesOfLifeImage.url
						}
					/>
					<VideoListings />
					{/* <Newsletter /> */}
					<Footer />
				</AboutWrapper>
			) : (
				<></>
			)}
		</div>
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

	/* scroll-snap-type: y mandatory; */
	scroll-behavior: smooth;

	overflow-x: hidden;
`;
