import React from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";

function CheckSection({ text, color }) {
	return (
		<ChecksWrapper color={color ? "#cc1414" : "white"}>
			<CheckIcon className="check" />
			<p>{text}</p>
		</ChecksWrapper>
	);
}

export default CheckSection;

const ChecksWrapper = styled.div`
	height: 50px;
	width: 100%;

	display: flex;
	align-items: center;

	.check {
		color: ${(props) => props.color};
	}

	p {
		color: #e6e6e6;
		font-family: "Spectral", serif;
		font-weight: 300;
		font-size: 20px;
		margin-left: 25px;
	}

	@media (max-device-width: 480px) {
		height: 50px;
		width: 100%;

		display: flex;
		align-items: center;

		.check {
			color: ${(props) => props.color};
			font-size: 15px;
		}

		p {
			color: #e6e6e6;
			font-family: "Spectral", serif;
			font-weight: 300;
			font-size: 15px;
			margin-left: 25px;
		}
	}
`;
