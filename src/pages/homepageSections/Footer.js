import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<Wrapper>
			<h1>Footer</h1>
		</Wrapper>
	);
}

export default Footer;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-color: var(--main-color-black);

	position: relative;

	scroll-snap-align: start;

	h1 {
		color: white;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;
