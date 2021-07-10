import React from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { motion } from "framer-motion";

function LiveIntroduction({ heading, description }) {
	return (
		<Wrapper>
			<ContentWrapper>
				<Left>
					<div className="left-content">
						<h2>{heading}</h2>
					</div>
				</Left>
				<Right>
					<p>{description}</p>
				</Right>
			</ContentWrapper>
			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default LiveIntroduction;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	pointer-events: all;
	user-select: text;

	position: relative;

	scroll-snap-align: start;
`;

const ContentWrapper = styled.div`
	height: 85%;
	width: 90%;
	font-family: "Spectral", sans-serif;
	color: white;
	display: flex;
`;

const Left = styled.div`
	height: 100%;
	width: 40%;

	display: flex;
	align-items: center;

	.left-content {
		margin-left: 100px;
		h2 {
			font-size: 40px;
			font-weight: 400;

			color: var(--main-color-red);
		}
	}
`;

const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		width: 80%;
		font-weight: 200;
		font-size: 18px;
	}
	height: 100%;
	width: 60%;
`;
