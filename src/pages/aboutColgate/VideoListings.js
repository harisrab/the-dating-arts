import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import axios from "axios";
import YouTubeExploreButton from "../../components/Buttons/YouTubeExploreButton";

function VideoListings() {
	const [videos, setVideos] = useState([]);

	const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

	console.log("API_KEY", API_KEY);

	const [isMobile, setIsMobile] = useState();

	useEffect(() => {
		setIsMobile(window.matchMedia("(max-device-width: 480px)").matches);
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
							{videos
								.slice(0, isMobile ? 2 : 4)
								.map((eachVideo, i) => {
									return (
										<a
											href={`https://youtu.be/${eachVideo.id}`}
											key={i}
										>
											<img
												className="thumbnail"
												src={eachVideo.thumbnail.url}
												alt="youtube-thumbnail"
											/>

											<div className="overlay">
												<p>{eachVideo.title}</p>
											</div>
										</a>
									);
								})}
						</>
					)}
				</div>
				{!isMobile ? <YouTubeExploreButton /> : <></>}
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
	overflow: hidden;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		background-image: none;
		background-color: black;
		height: auto;
		padding-bottom: 200px;
	}
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

	font-family: "GothamMedium", sans-serif;
	text-transform: uppercase;
	letter-spacing: 2px;
	position: relative;

	h2 {
		position: absolute;
		top: 80px;

		color: white;
		font-weight: 400;
		/* font-size: 30px; */
		font-size: 20px;

		pointer-events: all;
		user-select: text;
	}

	.videos {
		display: flex;

		align-items: center;
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
		border: 2px solid transparent;
		transition: 0.2s;

		&:hover {
			border: 2px solid #d4d4d4;
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
			transition: 0.2s;

			&:hover {
				opacity: 1;
			}

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

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;

		pointer-events: all;
		user-select: text;

		width: 89.37%;
		height: 86.94%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		font-family: "GothamMedium", sans-serif;
		text-transform: uppercase;
		letter-spacing: 2px;

		position: relative;

		h2 {
			position: absolute;
			top: 100px;

			color: white;
			font-weight: 400;
			font-size: 20px;

			pointer-events: all;
			user-select: text;
			text-align: center;
		}

		.videos {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			height: auto;
			width: auto;

			pointer-events: all;
			user-select: text;
			/* background-color: red; */

			/* margin-bottom: 30px; */

			margin-top: 300px;
		}

		a {
			height: 150px;
			width: auto;
			margin-bottom: 30px;
			position: relative;

			border-radius: 5px;
			overflow: hidden;

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
	}
`;
