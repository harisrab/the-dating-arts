import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../homepageSections/Footer";
import LiveExperiencesSection from "../liveExperiences/LiveExperiencesSection";
import LiveIntroduction from "../liveExperiences/LiveIntroduction";
import { useStateValue } from "../../Store/StateProvider";

function LiveExperiences() {
	const [{ cmsData }, dispatch] = useStateValue();
	const [data, setData] = useState({});

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setData(cmsData.data.pageLiveExperiences[0]);
		}
	}, [cmsData]);

	return (
		<HomePageWrapper
			id="main_app"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			key={3}
		>
			{cmsData.status === "fetched" && data !== {} ? (
				<>
					<LiveIntroduction
						heading={data.heroTitle}
						description={data.heroDescription}
					/>

					{/* Legends Immersion Bootcamp */}

					<LiveExperiencesSection
						blurb={"Introduction"}
						title={data.legendsImmersionIntroductionTitle}
						text={data.legendsImmersionIntroductionDescription}
					/>
					<LiveExperiencesSection
						blurb={"Details"}
						title={data.legendsImmersionDetailsTitle}
						text={data.legendsImmersionDetailsDescription}
					/>

					{/* Mastery Bootcamp */}

					<LiveExperiencesSection
						blurb={"Introduction"}
						title={data.mastery1On1BootcampIntroductionTitle}
						text={data.mastery1On1BootcampIntroductionDescription}
					/>
					<LiveExperiencesSection
						blurb={"Details"}
						title={data.mastery1On1BootcampDetailsTitle}
						text={data.mastery1On1BootcampDetailsDescription}
					/>

					{/* Results Bootcamp */}

					<LiveExperiencesSection
						blurb={"Introduction"}
						title={data.resultsBootcampIntroductionTitle}
						text={data.resultsBootcampIntroductionDescription}
					/>
					<LiveExperiencesSection
						blurb={"Details"}
						title={data.resultsBootcampDetailsTitle}
						text={data.resultsBootcampDetailsDescription}
					/>

					{/* Tailor Made Icon */}

					<LiveExperiencesSection
						blurb={"Introduction"}
						title={data.tailorMadeIconIntroductionTitle}
						text={data.tailorMadeIconIntroductionDescription}
					/>
					<LiveExperiencesSection
						blurb={"Details"}
						title={data.tailorMadeIconDetailsTitle}
						text={data.tailorMadeIconDetailsDescription}
					/>
					<Footer />
				</>
			) : (
				<></>
			)}
		</HomePageWrapper>
	);
}

export default LiveExperiences;

const HomePageWrapper = styled(motion.div)`
	z-index: 49;
	height: 100vh;
	width: 100%;

	pointer-events: all;
	user-select: text;

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

	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;

		pointer-events: all;
		user-select: text;
	}
`;
