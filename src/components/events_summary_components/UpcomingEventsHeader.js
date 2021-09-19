import React, { useState, useEffect } from "react";
import styled from "styled-components";

function UpcomingEventsHeader({ changeOption, currentOption }) {
	const [isMobile, setIsMobile] = useState();

	useEffect(() => {
		setIsMobile(window.matchMedia("(max-device-width: 480px)").matches);
	}, []);

	return (
		<Titles>
			<div className="title-holder">
				<h2>Upcoming Events</h2>
			</div>

			<div className="links">
				<div onClick={changeOption} id={"all"} className="selectable">
					<p
						style={
							currentOption === "all"
								? {
										opacity: 1,
								  }
								: {}
						}
					>
						All
					</p>
				</div>
				<div
					onClick={changeOption}
					id={"results_bootcamp"}
					className="selectable"
				>
					<p
						style={
							currentOption === "results_bootcamp"
								? {
										opacity: 1,
								  }
								: {}
						}
					>
						{isMobile ? "Results" : "Results Bootcamp"}
					</p>
				</div>

				<div
					onClick={changeOption}
					id={"online_bootcamp"}
					className="selectable"
				>
					<p
						style={
							currentOption === "online_bootcamp"
								? {
										opacity: 1,
								  }
								: {}
						}
					>
						{isMobile ? "Online" : "Online Bootcamp"}
					</p>
				</div>
				<div
					onClick={changeOption}
					id={"mastery_one_on_one"}
					className="selectable"
				>
					<p
						style={
							currentOption === "mastery_one_on_one"
								? {
										opacity: 1,
								  }
								: {}
						}
					>
						{isMobile ? "Mastery" : "Mastery 1-ON-1"}
					</p>
				</div>
			</div>
		</Titles>
	);
}

export default UpcomingEventsHeader;

const Titles = styled.div`
	pointer-events: all;
	user-select: text;

	height: 13%;
	width: 100%;
	margin-bottom: 25px;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: space-between;

	color: var(--main-color-white);

	.title-holder {
		height: 100%;

		h2 {
			@media screen and (max-width: 1070px) {
				font-size: 30px;
			}


			font-family: "Spectral", sans-serif;
			font-weight: 600;
			font-size: 35px;

			pointer-events: all;
			user-select: text;
		}
		margin-right: 60px;

		pointer-events: all;
		user-select: text;
	}

	.links {
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		align-items: flex-end;
		height: 100%;
		width: auto;
		justify-content: space-between;

		/* gap: 25px; */

		.selectable {
			width: fit-content;
			height: 70%;
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			align-items: flex-end;

			margin-left: 25px;

			p {
				padding: 0;
				margin: 0;

				font-size: 13px;
				font-family: "Spectral", serif;
				opacity: 0.4;
				transition: 0.2s ease-out;
				pointer-events: none;
			}

			&:hover {
				cursor: pointer;

				p {
					opacity: 0.7;
				}
			}

			&:active {
				p {
					opacity: 0.6;
				}
			}
		}
	}

	@media only screen and (max-device-width: 480px) {
		height: auto;
		width: 100%;
		margin-bottom: 20px;

		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		.title-holder {
			height: 100%;
			width: 100%;

			h2 {
				font-family: "Spectral", sans-serif;
				font-weight: 400;
				font-size: 30px;

				pointer-events: all;
				user-select: text;
			}

			pointer-events: all;
			user-select: text;
		}

		.links {
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			align-items: center;
			height: 100%;
			width: 100%;
			justify-content: space-between;

			/* gap: 25px; */

			margin-top: 20px;
			margin-bottom: 20px;

			.selectable {
				width: fit-content;
				height: 70%;
				display: -webkit-box;
				display: -ms-flexbox;
				display: -webkit-flex;
				display: flex;
				align-items: center;

				margin-left: 20px;

				p {
					padding: 0;
					margin: 0;

					font-size: 13px;
					font-family: "Spectral", serif;
					opacity: 0.4;
					transition: 0.2s ease-out;
					pointer-events: none;
				}

				&:hover {
					cursor: pointer;

					p {
						opacity: 0.7;
					}
				}

				&:active {
					p {
						opacity: 0.6;
					}
				}
			}

			#all {
				margin-left: 0px;
			}
		}
	}
`;
