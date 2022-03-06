import React from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";

function HeroSection() {
	return (
		<Wrapper>
			<h3 className="storepage">Welcome To Our Store</h3>
			<h2 className="storepage">
				take all you <span className="storepage">desire</span>
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

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	h3 {
		font-family: "GothamBold", sans-serif;
		text-transform: uppercase;
		font-size: 25px;
		letter-spacing: 10px;

		margin-bottom: 20px;


		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	h2 {
		font-family: "GothamBook", sans-serif;
		text-transform: uppercase;
		font-size: 14px;
		letter-spacing: 5px;

		color: gray;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;

		span {
			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}


	@media only screen and (max-device-width: 480px) {
		h3 {
			text-align: center;
			font-size: 30px;
		}

		h2 {
			font-size: 20px;
		}
	}
`;
