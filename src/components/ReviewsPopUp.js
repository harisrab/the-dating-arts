import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useStateValue } from "../Store/StateProvider";
import ReviewPopUpHeader from "./ReviewPopUpHeader";

import _ from "lodash";
import "../Store/StateProvider";

const modalBGVariants = {
	initial: {
		opacity: 0,
	},
	final: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

function ReviewsPopUp() {
	const [
		{ cmsData, reviewsPopUpToggle, selectedFolderId, selectedReviewId },
		dispatch,
	] = useStateValue();
	const [data, setData] = useState([]);

	useEffect(() => {
		console.log("Moda Data =======> ", data);
		if (cmsData.status === "fetched") {
			if (selectedReviewId !== "" && selectedFolderId !== "") {
				setData(
					cmsData.data.reviews[selectedFolderId][selectedReviewId][0]
				);
			}
		}
	}, [cmsData, dispatch, selectedReviewId, selectedFolderId]);

	useEffect(() => {
		console.log("PopUp Data =====> ", data);
	}, [data]);

	return (
		<AnimatePresence>
			{reviewsPopUpToggle && (
				<Wrapper
					variants={modalBGVariants}
					initial="initial"
					animate="final"
					exit="exit"
					transition={{ duration: 0.3 }}
					key={20}
				>
					<ReviewPopUpHeader />
					{data.profilePhoto !== undefined && (
						<>
							<Header>
								<img src={data.profilePhoto.url} alt="" />
								<h2 className="modal_name_tag">{data.name}</h2>
								<div className="additional_info">
									<div className="left">
										<img
											className="profession_img"
											src="/profession-icon.svg"
											alt=""
										/>{" "}
										<p>{data.profession}</p>
									</div>
									<div className="right">
										<img
											className="program_img"
											src="/program-icon.svg"
											alt=""
										/>{" "}
										<p>{data.program}</p>
									</div>
								</div>
							</Header>

							<ContentBox>{data.fullReview}</ContentBox>
						</>
					)}
					{/* <ReviewPopUpFooter /> */}
				</Wrapper>
			)}
		</AnimatePresence>
	);
}

export default ReviewsPopUp;

const Wrapper = styled(motion.div)`
	position: absolute;
	
	
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	height: 500px;
	width: 350px;

	/* background-color: #ffffff; */
	background-color: #e7e7e7f4;
	z-index: 100000000;

	border-radius: 5px;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	overflow: hidden;

	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

	@media screen and (max-height: 550px) {
	}

	@media only screen and (max-device-width: 480px) {
		height: 88vh;
		width: 92vw;
	}
`;

const Header = styled.div`
	width: 100%;
	height: 150px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	img {
		height: 70px;
		width: 70px;
		object-fit: cover;
		border-radius: 50%;
	}

	h2 {
		font-size: 14px;
		font-family: "GothamMedium", serif;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.additional_info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding-right: 30px;
		padding-left: 30px;

		font-size: 10px;
		font-weight: 400;
		font-family: "GothamBook", sans-serif;
		letter-spacing: 1px;
		text-transform: uppercase;


		.left {
			display: flex;
			align-items: center;

			.profession_img {
				fill: white;
				height: 15px;
				width: 15px;
				margin-right: 5px;
			}
		}

		.right {
			display: flex;
			align-items: center;

			.program_img {
				fill: #06f606;
				height: 15px;
				width: 15px;
				margin-right: 5px;
			}
		}
	}
`;

const ContentBox = styled.div`
	/* background-color: orange; */

	width: 88%;
	flex: 1;
	margin-top: 30px;
	margin-bottom: 25px;

	border-radius: 15px;

	/* border: 1px solid #d8d8d8; */
	overflow: hidden;
	overflow-y: scroll;

	/* Fonts */
	font-size: 14px;
	font-family: "GothamBook", serif;
	opacity: 0.8;

	padding-right: 20px;
	padding-left: 20px;

	/* Style the scroll bar */
	&::-webkit-scrollbar {
		width: 0.6em;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: #0000001a;
		border-radius: 20px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: var(--scrollbar-handle-hover-color);
	}

	/* Firefox */

	scrollbar-color: var(--scrollbar-handle-color)
		var(--scrollbar-background-color); /* thumb and track color */
	scrollbar-width: thin;
`;
