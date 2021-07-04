import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import Card from "../../components/Card";
import { request, gql } from "graphql-request";

function LiveExperiences() {
	const [experiences, setExperiences] = useState([]);

	useEffect(() => {
		const URL =
			"https://api-us-east-1.graphcms.com/v2/ckq8brsjz4kol01xk7rmph436/master";

		const query = gql`
			{
				liveExperiences {
					titleTag
					mainTitle
					description
				}
			}
		`;

		request(URL, query)
			.then((data) => {
				// console.log(data.liveExperiences);
				setExperiences(data.liveExperiences);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			{experiences.length === 0 ? (
				<></>
			) : (
				<Wrapper>
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
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Header = styled.div`
	width: 100%;
	height: 100px;

	color: white;

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
`;

const CardsHolder = styled.div`
	height: 310px;
	width: 100%;

	/* background-color: #ffff0068; */

	display: flex;
	justify-content: center;

	margin-top: 20px;
`;

const InnerWrapper = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: column;

	margin-top: 40px;

	position: relative;
`;
