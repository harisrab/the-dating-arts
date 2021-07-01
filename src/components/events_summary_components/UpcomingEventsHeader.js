import React from "react";
import styled from "styled-components";

function UpcomingEventsHeader({ changeOption, currentOption }) {
	return (
		<Titles>
			<div className="title-holder">
				<h2>Upcoming Events</h2>
			</div>

			<div className="links">
				<div onClick={changeOption} id={0} className="selectable">
					<p style={currentOption === 0 ? { opacity: 1 } : {}}>All</p>
				</div>
				<div onClick={changeOption} id={1} className="selectable">
					<p style={currentOption === 1 ? { opacity: 1 } : {}}>
						Results Bootcamp
					</p>
				</div>

				<div onClick={changeOption} id={2} className="selectable">
					<p style={currentOption === 2 ? { opacity: 1 } : {}}>
						Online Bootcamp
					</p>
				</div>
				<div onClick={changeOption} id={3} className="selectable">
					<p style={currentOption === 3 ? { opacity: 1 } : {}}>
						Mastery 1-ON-1
					</p>
				</div>
			</div>
		</Titles>
	);
}

export default UpcomingEventsHeader;

const Titles = styled.div`
	height: 13%;
	width: 100%;
	/* background-color: red; */
	margin-bottom: 40px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	color: var(--main-color-white);

	.title-holder {
		height: 100%;
		h2 {
			font-family: "Spectral", sans-serif;
			font-weight: 600;
			font-size: 35px;
		}
		margin-right: 60px;
	}

	.links {
		display: flex;
		align-items: flex-end;
		height: 100%;
		width: auto;
		justify-content: space-between;
		gap: 25px;
		.selectable {
			width: fit-content;
			height: 70%;
			display: flex;
			align-items: flex-end;

			p {
				padding: 0;
				margin: 0;

				font-size: 13px;
				font-family: "Archivo", serif;
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
`;
