import React from "react";
import styled from "styled-components";

function Date({ start = 11, end = "13", month = "June" }) {
	return (
		<Wrapper>
			<p>{`${start}—${end}`}</p>
			<h3>{`${month}`}</h3>
		</Wrapper>
	);
}

export default Date;

const Wrapper = styled.div`
	height: auto;
	width: auto;

	color: var(--main-color-white);
	font-family: "Spectral", sans-serif;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;

	p {
		font-weight: 200;
		font-size: 12px;
	}
	h3 {
		font-weight: 500;
		font-size: 20px;
		margin-top: -6px;
	}
`;
