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

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
	}
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

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		width: 100%;
		height: 60%;
	}
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
			font-family: "GothamLight", sans-serif;
			font-size: 13px;
			letter-spacing: 5px;
			text-transform: uppercase;

			color: grey;
			/* font-size: 18px; */
			margin-bottom: -5px;
			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
		h2 {
			font-family: "GothamMedium", sans-serif;
			margin-top: 10px;
			font-size: 23px;
			letter-spacing: 5px;
			text-transform: uppercase;

			/* font-size: 35px; */
			font-weight: 400;
			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}

	@media only screen and (max-device-width: 480px) {
		width: 100%;
		align-items: center;
		justify-content: center;
		height: 30%;

		.left-content {
			margin-left: 0px;
			width: 85%;

			h2 {
				font-family: "GothamMedium", sans-serif;
				margin-top: 10px;
				font-size: 23px;
				letter-spacing: 5px;
				text-transform: uppercase;

				font-size: 30px;
			}
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

		font-family: "GothamBook", sans-serif;
		margin-top: 10px;
		font-size: 15px;
		line-height: 1.5;

		/* letter-spacing: 5px; */
		/* text-transform: uppercase; */
	}
	height: 100%;
	width: 60%;

	@media only screen and (max-device-width: 480px) {
		width: 100%;
		height: 60%;
		justify-content: center;
		align-items: center;

		p {
			width: 85%;
			font-size: 15px;
			height: 200px;
			overflow-y: scroll;
		}
	}
`;
