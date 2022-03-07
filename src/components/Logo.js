import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Logo({ background = "black" }) {
	const history = useHistory();

	console.log("Background Color =====> ", background);

	return (
		<LogoWrapper onClick={() => history.push("/")}>
			<h3>The dating arts</h3>
		</LogoWrapper>
	);
}

export default Logo;

const LogoWrapper = styled.div`
	&:hover {
		cursor: pointer;
	}

	pointer-events: auto;

	/* max-width: fit-content; */
	/* width: 230px; */
	/* height: 34px; */

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	/* background-color: red; */

	img {
		color: red;
	}

	h3 {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 15px 30px;

		border: 1.5px solid white;
		/* border: 1px solid white; */
		text-transform: uppercase;

		font-size: 10px;
		letter-spacing: 8px;
		color: white;

		font-family: "GothamBook", sans-serif;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;

		transition: 0.2s;

		&:hover {
			background-color: #ffffff1d;
			color: white;
		}
	}
`;

const LogoTitle = styled.p`
	font-family: "Spectral", serif;
	/* font-size: 0.8125em; */

	/* font-size: 2vh; */
	font-size: 14px;
	letter-spacing: 0.31875em;
	color: ${(props) => (props.background === "white" ? `black` : `white`)};
	line-height: 1.2em;

	span {
		color: var(--logo-second-color);
		pointer-events: "auto";
		user-select: text;
		-webkit-user-select: text;
	}
`;
