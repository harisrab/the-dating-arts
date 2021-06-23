import React from "react";
import styled from "styled-components";

function Logo({ mode = "black" }) {
	return (
		<LogoWrapper mode={mode}>
			<p className="logo" mode={mode}>
				THE DATING <span className="logo">ARTS</span>
			</p>
		</LogoWrapper>
	);
}

export default Logo;

const LogoWrapper = styled.div`
	max-width: fit-content;
	height: 34px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	position: relative;
	z-index: 10000;

	user-select: text;
	-webkit-user-select: text;

	p {
		font-family: "Spectral", serif;
		/* font-size: 0.8125em; */
		font-size: 0.7rem;
		letter-spacing: 0.31875em;
		color: ${(props) =>
			props.mode === "white"
				? "var(--main-color-dark-black)"
				: "var(--main-color-white)"};
		line-height: 1.2em;

		user-select: text;
		-webkit-user-select: text;

		span {
			color: var(--logo-second-color);
		}
	}

	@media (max-device-width: 480px) {
		width: 100vw;
		height: 34px;

		position: absolute;

		display: flex;
		align-items: center;
		justify-content: center;

		top: 50px;
		left: 0px;

		p {
			font-family: "Spectral", serif;
			font-size: 13px;
			letter-spacing: 5.1px;
			color: var(--logo-first-color);
			line-height: 1.2em;
			padding: 0px;

			span {
				color: var(--logo-second-color);
			}
		}
	}
`;
