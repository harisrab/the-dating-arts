import React from "react";
import styled from "styled-components";

function Title({ text }) {
	return <Wrapper>{text}</Wrapper>;
}

export default Title;

const Wrapper = styled.p`
	color: var(--main-color-white);
	padding-left: 40px;
	font-size: 17px;
	font-family: "Spectral", sans-serif;
	font-weight: 300;
    width: 100%;

	@media only screen and (max-device-width: 480px) {
		padding-left: 10px;
		font-size: 15px;
	}
`;
