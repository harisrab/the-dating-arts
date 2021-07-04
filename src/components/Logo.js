import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Logo({ mode = "black" }) {
	const history = useHistory();

	return (
		<LogoWrapper mode={mode} onClick={() => history.push("/")}>
			<p className="logo" mode={mode}>
				THE DATING <span className="logo">ARTS</span>
			</p>
		</LogoWrapper>
	);
}

export default Logo;

const LogoWrapper = styled.div`
	&:hover {
		cursor: pointer;
	}

	max-width: fit-content;
	height: 34px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	user-select: text;
	-webkit-user-select: text;
	pointer-events: "auto";

	z-index: 1000000000;

	p {
		font-family: "Spectral", serif;
		/* font-size: 0.8125em; */

		/* font-size: 2vh; */
		font-size: 12px;
		letter-spacing: 0.31875em;
		color: ${(props) =>
			props.mode === "white"
				? "var(--main-color-dark-black)"
				: "var(--main-color-white)"};
		line-height: 1.2em;

		user-select: text;
		-webkit-user-select: text;
		pointer-events: "auto";

		span {
			color: var(--logo-second-color);
			pointer-events: "auto";
			user-select: text;
			-webkit-user-select: text;
		}
	}
`;
