import React, { useEffect } from "react";
import styled from "styled-components";
import EachReview from "./EachReview";

function Reviews({ currentFolder, renderReviews, reviews }) {
	const onAnimationEnd = () => {};

	useEffect(() => {
		console.log("Reviews from Reviews ====> ", reviews);
	}, [reviews]);

	return (
		<ReviewWrapper
			style={{
				animation: `${renderReviews === 0 ? "fadeIn" : "fadeOut"} 3s`,
			}}
			onAnimationEnd={renderReviews !== 0 && onAnimationEnd}
		>
			{Object.entries(reviews[currentFolder]).map((eachReview) => (
				<EachReview details={eachReview[1][0]}></EachReview>
			))}
		</ReviewWrapper>
	);
}

export default Reviews;

const ReviewWrapper = styled.div`
	height: 350px;
	width: 90vw;

	margin-top: 30px;
	max-width: 1000px;

	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	align-content: flex-start;
	gap: 10px;
	flex-wrap: wrap;
	overflow-y: scroll;

	padding-right: 10px;
	padding-left: 10px;

	overflow-x: visible;

	/* Style the scroll bar */
	&::-webkit-scrollbar {
		width: 0.6em;
	}

	&::-webkit-scrollbar-track {
		background: var(--scrollbar-background-color);
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: var(--scrollbar-handle-color);
		border-radius: 4px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: var(--scrollbar-handle-hover-color);
	}
`;
