import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AtHomeSection from "../atHomeTrainings/AtHomeSection";
import AtHomeIntroduction from "../atHomeTrainings/AtHomeIntroduction";
import { useStateValue } from "../../Store/StateProvider";
import Footer from "../homepageSections/Footer";

function AtHomeTrainings() {
	const [{ cmsData }, dispatch] = useStateValue();
	const [data, setData] = useState({});

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setData(cmsData.data.pageAtHomeTrainings[0]);
		}
	}, [cmsData]);

	return (
		<div id="main_app">
			{cmsData.status === "fetched" && data !== {} ? (
				<HomePageWrapper
					id="main_app"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					key={4}
				>
					<AtHomeIntroduction
						heading={data.heroTitle}
						description={data.heroDescription}
					/>
					<AtHomeSection
						blurb={"Introduction"}
						title={data.closeHerSchoolLiveTitle}
						text={data.closeHerSchoolLiveDescription}
					/>
					<AtHomeSection
						blurb={"Introduction"}
						title={data.empowerVideoSessionTitle}
						text={data.empowerVideoSessionDescription}
					/>
					<AtHomeSection
						blurb={"Introduction"}
						title={data.expressOnlineBootcampTitle}
						text={data.expressOnlineBootcampDescription}
					/>
					<AtHomeSection
						blurb={"Introduction"}
						title={data.masterclassBreakoutTitle}
						text={data.masterclassBreakoutDescription}
					/>
					<Footer />
				</HomePageWrapper>
			) : (
				<></>
			)}
		</div>
	);
}

export default AtHomeTrainings;

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
	background-color: black;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

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
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;

		pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;
	}
`;
