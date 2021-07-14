import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import TrainingCard from "../../components/TrainingCard";
import { useStateValue } from "../../Store/StateProvider";

function AtHomeTraining() {
	const [{ cmsData }, dispatch] = useStateValue();
	const [trainings, setTrainings] = useState([]);

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setTrainings(cmsData.data.atHomeTrainings);
		}
	}, [cmsData]);

	return (
		<>
			{trainings.length === 0 ? (
				<></>
			) : (
				<Wrapper id="main_app">
					<InnerWrapper>
						<Header>
							<h1>At Home Training</h1>
							<p>
								"While the masses spin around hamster wheels and
								end up in anonymous graves, you’ll be taking a
								private escalator right to the top with me as
								your personal coach"
							</p>
						</Header>
						<CardsHolder>
							{trainings.map((training, i) => {
								return (
									<TrainingCard training={training} key={i} />
								);
							})}
						</CardsHolder>
					</InnerWrapper>
					<AnimatedDownArrow />
				</Wrapper>
			)}
		</>
	);
}

export default AtHomeTraining;

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

	@media only screen and (max-device-width: 480px) {
		height: fit-content;
		background-image: none;
		background-color: black;
		padding-bottom: 400px;
	}
`;

const Header = styled.div`
	width: 100%;
	height: auto;

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
		font-size: 28px;
		margin-bottom: 10px;
	}

	p {
		font-weight: 200;
		font-size: 14px;
		width: 600px;
		text-align: center;
		margin-bottom: 10px;
	}

	.author {
		font-weight: 300;
		font-size: 18px;
	}

	position: absolute;
	top: -130px;

	@media only screen and (max-device-width: 480px) {
		h1 {
			font-weight: 400;
			margin-bottom: 20px;
		}

		p {
			text-align: center;
			width: 85%;
		}

		top: -180px;
	}
`;

const CardsHolder = styled.div`
	height: 310px;
	width: 100%;

	margin-top: 20px;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		height: auto;
		justify-content: flex-start;
	}
`;

const InnerWrapper = styled.div`
	position: relative;

	top: 53%;
	transform: translateY(-50%);

	@media only screen and (max-device-width: 480px) {
		margin-top: 190px;
		
	}
`;
