import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Location({ location = "Las Vegas, USA" }) {
	return (
		<Wrapper>
			<div className="icon">
				<LocationOnIconWrapper />
			</div>
			<p>{location}</p>
		</Wrapper>
	);
}

export default Location;

const Wrapper = styled.div`
	width: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;

	p {
		color: var(--main-color-white);
		font-family: "Spectral", sans-serif;
		font-weight: 200;
		font-size: 16px;

		margin-left: 15px;
		will-change: transform;
	}

	@media only screen and (max-device-width: 480px) {
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		align-items: center;

		.icon {
			will-change: transform;
			font-size: 12px !important;
			color: white;
		}

		p {
			color: var(--main-color-white);
			font-family: "Spectral", sans-serif;
			font-weight: 200;
			font-size: 12px;

			margin-left: 10px;
			will-change: transform;
		}
	}
`;

const LocationOnIconWrapper = styled(LocationOnIcon)`
	width: auto;
	height: auto;

	margin-left: 15px;
	margin-top: 4px;
	will-change: transform;
	color: var(--main-color-white);

	@media only screen and (max-device-width: 480px) {
		font-size: 15px !important;
		margin-left: 10px;
		margin-top: 4px;
	}
`;
