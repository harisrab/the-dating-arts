import React from "react";
import styled from "styled-components";

function Logo() {
	return (
		<LogoWrapper>
			<p>
				THE DATING <span>ARTS</span>
			</p>
		</LogoWrapper>
	);
}

export default Logo;

const LogoWrapper = styled.div`
	width: 236px;
	height: 34px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	position: absolute;

	top: 63px;
	left: 97px;

	p {
		font-family: "Spectral", serif;
		font-size: 13px;
		letter-spacing: 5.1px;
		color: #0a0a0a;
		line-height: 1.2em;

		span {
			color: #cc1414;
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
			color: #e6e6e6;
			line-height: 1.2em;
			padding: 0px;

			span {
				color: #cc1414;
			}
		}
	}
`;
