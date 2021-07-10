import React from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";

function HeroSection() {
	return (
		<Wrapper>
			<h3>Welcome To Our Store</h3>
			<h2>
				take all you <span>desire</span>
			</h2>
			<AnimatedDownArrow color="black" />
		</Wrapper>
	);
}

export default HeroSection;

const Wrapper = styled.div`
	background-color: var(--main-color-white);
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	scroll-snap-align: start;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	pointer-events: all;

	h3 {
		font-family: "Spectral", sans-serif;
		font-weight: 400;
		font-size: 50px;
	}

	h2 {
		font-family: "Spectral", sans-serif;
		font-weight: 200;
		font-size: 25px;
		color: gray;

		span {
		}
	}
`;
