import React from "react";
import styled from "styled-components";

function EachReview({ details }) {
	const grow = [1];
	const random = Math.floor(Math.random() * grow.length);

	return (
		<EachReviewWrapper style={{ flexGrow: `${grow[random]}` }}>
			<Header>
				<img src={details.profile_photo} alt="" />
				<p>{details.name}</p>
			</Header>
			<p className="quote">{details.quote}</p>
		</EachReviewWrapper>
	);
}

export default EachReview;

const EachReviewWrapper = styled.div`
	height: 180px;
	border: 1px solid #ff000065;
	border-radius: 10px;
	/* flex-grow: 1; */
	width: 310px;

	background-color: #ff000013;
	box-shadow: rgba(0, 0, 0, 0) 0px 30px 90px;
	transition: 0.3s;

	&:hover {
		border: 1px solid #ff00003e;
		cursor: pointer;
		box-shadow: rgba(130, 1, 1, 0.4) 0px 30px 90px;
		background-color: #ff00004e;
	}

	overflow: hidden;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
    padding-left: 10px;
    padding-right: 10px;

	.quote {
		color: white;
		font-family: "Spectral", serif;
		font-weight: 200;
		font-size: 14px;
		text-align: center;
	}
`;

const Header = styled.div`
	/* background-color: blue; */
	height: 50px;

	display: flex;
	align-items: center;

	position: absolute;
	top: 0;
	left: 0;

	img {
		height: 25px;
		width: 25px;
		border-radius: 50%;
		object-fit: cover;

		margin-left: 10px;
	}

	p {
		font-family: "Roboto", serif;
		color: white;
		font-weight: 300;
		margin-left: 15px;
		font-size: 14px;
	}
`;
