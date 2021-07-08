import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Logo({ background = "black" }) {
	const history = useHistory();

	console.log("Background Color =====> ", background);

	return (
		<LogoWrapper onClick={() => history.push("/")}>
			<LogoTitle className="logo" background={background}>
				THE DATING <span className="logo">ARTS</span>
			</LogoTitle>
		</LogoWrapper>
	);
}

export default Logo;

const LogoWrapper = styled.div`
	&:hover {
		cursor: pointer;
	}

	pointer-events: auto;

	max-width: fit-content;
	height: 34px;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	/* z-index: 1000000000; */
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
