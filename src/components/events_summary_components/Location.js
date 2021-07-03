import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Location({ location = "Las Vegas, USA" }) {
	return (
		<Wrapper>
			<div className="icon">
				<LocationOnIcon style={{ color: "var(--main-color-white)" }} />
			</div>
			<p>{location}</p>
		</Wrapper>
	);
}

export default Location;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	.icon {
		width: auto;
		height: auto;

		margin-left: 15px;
		margin-top: 4px;
	}

	p {
		color: var(--main-color-white);
		font-family: "Spectral", sans-serif;
		font-weight: 200;

		margin-left: 15px;
	}
`;
