import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";

function BrandSection() {
	return (
		<Wrapper>
			<img src="/homepage/Brands.png" alt="" />

			<TextSection>
				<h2>People we've worked with.</h2>
				<p>
					The Dating Arts has contributed to the coaching of over 5000
					men in more than 30 countries, all united by a unique
					passion for the world of the Dating Arts. These associations
					are officially recognised by The Dating Arts and are at the
					heart of a range of Dating Arts activities.
				</p>
			</TextSection>

			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default BrandSection;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-color: var(--main-color-light-black);

	position: relative;

	scroll-snap-align: start;

	img {
		position: absolute;
		height: 70vh;
		top: 17%;
		right: 10%;
	}
`;

const TextSection = styled.div`
	color: white;
	width: 43vw;

	position: absolute;
	top: 50%;
	left: 10vw;
	transform: translate(0, -50%);

	pointer-events: none;

	h2 {
		font-family: "Spectral", sans-serif;
		font-weight: 600;
		font-size: 2em;
		margin-bottom: 15px;
	}

	p {
		font-family: "Spectral", sans-serif;
		font-weight: 200;
	}
`;
