import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import axios from "axios";
import { motion } from "framer-motion";
import YouTubeExploreButton from "../../components/Buttons/YouTubeExploreButton";

const aVars = {
	initial: {
		scale: 1,
	},
	final: {
		scale: 1.05,
	},
};

const overlayVars = {
	initial: {
		opacity: 0,
		// visibility: "hidden",
		// height: "100%",
	},
	final: {
		// visibility: "visible",
		opacity: 1,
		// height: "100%",
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

function VideoListings() {
	const [videos, setVideos] = useState([]);

	const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

	useEffect(() => {
		axios
			.get(
				`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=xnzKnTUgTAo%2Cok4F69AIr7o%2COre04ff2iCE%2CJSF6uS302Uc&key=${API_KEY}`
			)
			.then((data) => {
				console.log("Data Retrived ==> ", data);
				const videos = data.data.items.map((eachVideo) => {
					return {
						id: eachVideo.id,
						title: eachVideo.snippet.title,
						publishTime: eachVideo.snippet.publishTime,
						thumbnail: eachVideo.snippet.thumbnails.maxres,
					};
				});

				console.log("Data Filtered ====> ", videos);

				setVideos(videos);
			})
			.catch((error) =>
				console.log("Error while fetching YouTube Videos", error)
			);
	}, []);
	return (
		<Wrapper>
			<ContentWrapper>
				<h2>What's latest on YouTube</h2>

				<div className="videos">
					{videos.length === 0 ? (
						<></>
					) : (
						<>
							{videos.map((eachVideo, i) => {
								return (
									<motion.a
										variants={aVars}
										whileHover="final"
										transition={{ duration: 0.3 }}
										href={`https://youtu.be/${eachVideo.id}`}
										key={i}
									>
										<img
											className="thumbnail"
											src={eachVideo.thumbnail.url}
											alt="youtube-thumbnail"
										/>

										<motion.div
											className="overlay"
											variants={overlayVars}
											// initial="initial"
											// whileHover="final"
										>
											<p>{eachVideo.title}</p>
										</motion.div>
									</motion.a>
								);
							})}
						</>
					)}
				</div>

				<YouTubeExploreButton />
			</ContentWrapper>

			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default VideoListings;

const Wrapper = styled.div`
	background-color: var(--main-color-black);
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	pointer-events: all;
	user-select: text;

	scroll-snap-align: start;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	pointer-events: all;
`;

const ContentWrapper = styled.div`
	pointer-events: all;
	user-select: text;

	width: 89.37%;
	height: 86.94%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	font-family: "Spectral", sans-serif;

	position: relative;

	h2 {
		position: absolute;
		top: 80px;

		color: white;
		font-weight: 400;
		font-size: 30px;

		pointer-events: all;
		user-select: text;
	}

	.videos {
		display: flex;
		height: auto;
		width: auto;

		pointer-events: all;
		user-select: text;
		/* background-color: red; */

		/* margin-bottom: 30px; */
	}

	a {
		margin-right: 10px;
		margin-left: 10px;

		height: 150px;
		width: auto;

		position: relative;

		border-radius: 5px;
		overflow: hidden;

		&:hover {
			border: 3px solid;
			border-color: #8b0000;
		}

		.thumbnail {
			height: 150px;
			width: 250px;
			background-color: blue;
		}

		.overlay {
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;

			z-index: 10000;

			overflow: hidden;

			background-color: #000000cf;

			opacity: 0;

			padding-right: 20px;
			padding-left: 20px;

			display: flex;
			align-items: center;

			p {
				color: white;
				/* width: 250px; */
				font-size: 12px;
				font-weight: 400;
				font-family: "Spectral", sans-serif;

				/* margin-top: 35px; */
				/* margin-left: 20px; */
			}
		}
	}

	pointer-events: all;
	user-select: text;

	/* background-color: red; */
`;
