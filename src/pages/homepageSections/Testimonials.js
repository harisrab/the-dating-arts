import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import SelectableSlider from "../../components/SelectableSlider";
import RightButton from "../../components/Buttons/RightButton";
import LeftButton from "../../components/Buttons/LeftButton";
import { useStateValue } from "../../Store/StateProvider";
import Folders from "../../components/Folders";
import _ from "lodash";

import "../../styles.css";
import Reviews from "../../components/Reviews";

function Testimonials() {
	const [selectedFolder, setSelectedFolder] = useState(0);
	const [shouldRender, setShouldRender] = useState(selectedFolder);
	const [renderReviews, setRenderReviews] = useState(1);

	const [reviews, setReviews] = useState([]);

	const [{ cmsData }, dispatch] = useStateValue();

	const handleFolderSelection = (e) => {
		// Handles selection of folders
		setSelectedFolder(e.target.id);

		dispatch({
			type: "SET_FOLDER_ID",
			payload: e.target.id,
		});
	};

	const handleShowAll = () => {
		setSelectedFolder(0);
		setShouldRender(0);
	};

	useEffect(() => {
		console.log(selectedFolder);

		if (selectedFolder !== 0) setRenderReviews(0);
	}, [selectedFolder]);

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setReviews(cmsData.data.reviews);
		}
	}, [cmsData, dispatch]);

	return (
		<Wrapper>
			<h2>Testimonials</h2>
			{/* <button onClick={handleShowAll}>Click</button> */}
			<Folders
				selectedFolder={selectedFolder}
				setSelectedFolder={setSelectedFolder}
				handleFolderSelection={handleFolderSelection}
				shouldRender={shouldRender}
				setShouldRender={setShouldRender}
			/>

			{selectedFolder !== 0 && (
				<ReviewsWrapper>
					<div className="review_header" onClick={handleShowAll}>
						<img
							style={{ color: "white" }}
							src="/homepage/back-arrow.svg"
							alt=""
						/>
						<p>Folders</p>
					</div>
					<Reviews
						renderReviews={renderReviews}
						currentFolder={selectedFolder}
						reviews={reviews}
					/>{" "}
				</ReviewsWrapper>
			)}

			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default Testimonials;

const Wrapper = styled.div`
	overflow: hidden;

	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-color: var(--main-color-black);

	position: relative;

	scroll-snap-align: start;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h2 {
		color: white;
		font-family: "Spectral", sans-serif;
		font-weight: 300;
		font-size: 32px;

		position: absolute;
		top: 80px;
		will-change: transform;
	}

	@media screen and (max-height: 550px) {
		height: 150vh;
	}

	@media only screen and (max-device-width: 480px) {
		background-image: none;
		background-color: black;
	}
`;

const ReviewsWrapper = styled.div`
	.review_header {
		display: flex;
		align-items: center;

		img {
			height: 22px;
			margin-left: 10px;
		}

		p {
			color: white;
			font-family: "Roboto", sans-serif;
			font-weight: 200;
			margin-left: 15px;
			font-size: 14px;
		}
		opacity: 0.6;
		transition: 0.2s;

		&:hover {
			opacity: 1;
			cursor: pointer;
		}
		width: 100px;
		height: 40px;
	}
`;
