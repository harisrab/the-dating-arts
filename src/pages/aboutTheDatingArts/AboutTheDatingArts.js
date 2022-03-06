import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useStateValue } from "../../Store/StateProvider";

// Import Sections
import HeroSection from "./HeroSection";
import WhoAreWe from "./WhoAreWe";
import WhereAreWeBased from "./WhereAreWeBased";
import ServicesWeProvide from "./ServicesWeProvide";
import OurReputedExclusivity from "./OurReputedExclusivity";
import Newsletter from "../homepageSections/Newsletter";
import Footer from "../homepageSections/Footer";

function AboutTheDatingArts() {
	const [{ cmsData }, dispatch] = useStateValue();
	const [data, setData] = useState({});

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setData(cmsData.data.aboutTheDatingArts[0]);
		}
	}, [cmsData]);


	return (
		<div id="main_app">
			{Object.keys(data).length === 0 ? (
				<></>
			) : (
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
						url={data.heroImage.url}
					/>
					<WhoAreWe
						heading={data.whoAreWeTitle}
						description={data.whoAreWeDescription}
						url={data.whoAreWeImage.url}
					/>
					<WhereAreWeBased
						heading={data.whereAreWeBasedTitle}
						description={data.whereAreWeBasedDescription}
						url={data.whereAreWeBasedImage.url}
					/>
					<ServicesWeProvide
						heading={data.servicesWeProvidetitle}
						description={data.servicesWeProvideDescription}
						url={data.servicesWeProvideImage.url}
					/>
					<OurReputedExclusivity
						heading={data.ourReputedExclusivityTitle}
						description={data.ourReputedExclusivityDescription}
						url={data.ourReputedExclusivityImage.url}
					/>
					{/* <Newsletter /> */}
					<Footer />
				</AboutWrapper>
			)}
		</div>
	);
}

export default AboutTheDatingArts;

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

	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
`;
