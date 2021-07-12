import React from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";

function LiveExperiencesSection({ blurb, title, text }) {
	return (
		<Wrapper>
			<ContentWrapper>
				<Left>
					<div className="left-content">
						<p>{blurb}</p>
						<h2>{title}</h2>
					</div>
				</Left>
				<Right>
					<p>{text}</p>
				</Right>
			</ContentWrapper>
			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default LiveExperiencesSection;

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

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;
`;

const ContentWrapper = styled.div`
	height: 85%;
	width: 90%;
	font-family: "Spectral", sans-serif;
	color: white;
	display: flex;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;
`;

const Left = styled.div`
	height: 100%;
	width: 40%;

	display: flex;
	align-items: center;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	.left-content {
		margin-left: 100px;
		p {
			color: grey;
			font-size: 18px;
			margin-bottom: -5px;
			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
		h2 {
			font-size: 35px;
			font-weight: 400;
			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}
`;

const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	p {
		width: 80%;
		font-weight: 200;
		font-size: 18px;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}
	height: 100%;
	width: 60%;
`;
