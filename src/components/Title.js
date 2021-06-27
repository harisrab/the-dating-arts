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
	font-family: "Archivo", sans-serif;
	font-weight: 300;
    width: 100%;
`;
