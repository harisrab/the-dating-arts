import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import TrainingCard from "../../components/TrainingCard";
import { request, gql } from "graphql-request";

function AtHomeTraining() {
	const [trainings, setTrainings] = useState([]);

	useEffect(() => {
		const URL =
			"https://api-us-east-1.graphcms.com/v2/ckq8brsjz4kol01xk7rmph436/master";

		const query = gql`
			{
				atHomeTrainings {
					price
					per
					title
					feature1
					feature2
					feature3
					feature4
				}
			}
		`;

		request(URL, query)
			.then((data) => {
				// console.log(data.atHomeTrainings);
				setTrainings(data.atHomeTrainings);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			{trainings.length === 0 ? (
				<></>
			) : (
				<Wrapper>
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
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	/* display: -webkit-box;
display: -ms-flexbox; 
display: -webkit-flex;
display: flex; ;
	align-items: center;
	justify-content: center; */
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
`;

const InnerWrapper = styled.div`
	position: relative;

	top: 53%;
	transform: translateY(-50%);
`;
