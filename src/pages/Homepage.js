import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import HeroSection from "./homepageSections/HeroSection";

function Homepage() {
	return (
		<HomePageWrapper>
			<HeroSection />
		</HomePageWrapper>
	);
}

export default Homepage;

const HomePageWrapper = styled.div`
	z-index: 49;
`;
