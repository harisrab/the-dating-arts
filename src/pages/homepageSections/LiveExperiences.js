import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import Card from "../../components/Card";
import { useStateValue } from "../../Store/StateProvider";

function LiveExperiences() {
	const [{ cmsData }, dispatch] = useStateValue();

	const [experiences, setExperiences] = useState([]);

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setExperiences(cmsData.data.liveExperiences);
		}
	}, [cmsData]);

	return (
		<>
			{experiences.length === 0 ? (
				<></>
			) : (
				<Wrapper id="main_app">
					<InnerWrapper>
						<Header>
							<h1>Live Experiences</h1>
							<p>
								You don't get in life what you want. You get in
								life what you are.
							</p>
						</Header>
						<CardsHolder>
							{experiences.map(
								({ titleTag, mainTitle, description }, i) => {
									return (
										<Card
											titleTag={titleTag}
											mainTitle={mainTitle}
											description={description}
											key={i}
										/>
									);
								}
							)}
						</CardsHolder>
					</InnerWrapper>
					<AnimatedDownArrow />
				</Wrapper>
			)}
		</>
	);
}

export default LiveExperiences;

const Wrapper = styled.div`
	overflow: hidden;

	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (max-device-width: 480px) {
		justify-content: flex-start;
		height: auto;
		background-image: none;
		background-color: black;
		scroll-snap-align: start;
	}
`;

const Header = styled.div`
	width: 100%;
	height: 100px;

	color: white;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	font-family: "Spectral", sans-serif;

	h1 {
		font-weight: 500;
		font-size: 32px;
		margin-bottom: 15px;
	}

	p {
		font-weight: 200;
		font-size: 16px;
	}

	position: absolute;
	top: -120px;

	@media only screen and (max-device-width: 480px) {
		h1 {
			font-size: 30px;
			font-weight: 400;
		}

		p {
			width: 85%;
			text-align: center;
		}
	}
`;

const CardsHolder = styled.div`
	height: 310px;
	width: 100%;

	/* background-color: #ffff0068; */

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	justify-content: center;

	margin-top: 20px;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		height: auto;
		justify-content: flex-start;
		align-items: center;
	}
`;

const InnerWrapper = styled.div`
	width: 100%;
	height: auto;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;

	margin-top: 40px;

	position: relative;

	@media only screen and (max-device-width: 480px) {
		margin-top: 280px;

		margin-bottom: 180px;
	}
`;
