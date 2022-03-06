import React, { useEffect } from "react";
import styled from "styled-components";

import { useStateValue } from "../Store/StateProvider";

function EachReview({ details }) {
	const grow = [1];
	const random = Math.floor(Math.random() * grow.length);

	const [{ reviewsPopUpToggle }, dispatch] = useStateValue();

	const handleReviewModalOpen = (id) => {
		console.log("Clicked");
		dispatch({
			type: "SET_REVIEWS_POPUP_STATE",
			payload: true,
		});

		dispatch({
			type: "SET_SELECTED_REVIEW_ID",
			payload: `${id}`,
		});
	};

	useEffect(() => {
		console.log("Each details ====> ", details);
	}, [details]);

	return (
		<EachReviewWrapper
			style={{ flexGrow: `${grow[random]}` }}
			onClick={() => handleReviewModalOpen(details.id)}
		>
			<Header>
				<img src={details.profilePhoto.url} alt="" />
				<div className="name__profession">
					<p className="name">{details.name}</p>
					<p className="profession">{details.profession}</p>
				</div>
			</Header>
			<div className="quote_holder">
				<p className="quote">{details.quote}</p>
			</div>
		</EachReviewWrapper>
	);
}

export default EachReview;

const EachReviewWrapper = styled.div`
	height: 200px;
	border: 1px solid #e4e4e4a7;
	border-radius: 2px;
	/* flex-grow: 1; */
	width: 310px;

	background-color: #ffffff5c;
	box-shadow: rgba(0, 0, 0, 0) 0px 30px 90px;
	transition: 0.3s;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	&:hover {
		border: 1px solid #ffffff;
		cursor: pointer;
		box-shadow: rgba(204, 204, 204, 0.4) 0px 30px 90px;
		background-color: #ffffff67;
	}

	overflow: hidden;
	position: relative;

	/* padding-left: 10px;
	padding-right: 10px; */

	.quote_holder {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;

		margin-right: 10px;
		margin-left: 10px;

		.quote {
			color: white;
			font-family: "GothamBook", serif;
			font-weight: 200;
			font-size: 13px;
			text-align: center;
		}
	}
`;

const Header = styled.div`
	/* background-color: blue; */
	height: 60px;
	width: 100%;

	display: flex;
	align-items: center;

	border-bottom: 1px solid #e6e6e613;

	img {
		height: 25px;
		width: 25px;
		border-radius: 50%;
		object-fit: cover;

		margin-left: 20px;
	}

	.name__profession {
		display: flex;
		flex-direction: column;
		flex: 1;
		margin-left: 15px;
		height: 100%;

		align-items: flex-start;
		justify-content: center;

		.name {
			color: white;
			font-size: 14px;
			margin-bottom: 2px;
			font-family: "GothamMedium", sans-serif;
			text-transform: uppercase;
			font-size: 12px;
		}

		.profession {
			margin-top: 2px;
			color: white;
			font-family: "GothamLight", sans-serif;
			text-transform: normal;
			font-size: 11px;
			/* font-size: 11px; */
			font-weight: 200;
		}
	}
`;
