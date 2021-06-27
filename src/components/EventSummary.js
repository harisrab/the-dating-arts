import React from "react";
import styled from "styled-components";

function EventSummary() {
	return <Wrapper></Wrapper>;
}

export default EventSummary;

const Wrapper = styled.div`
	height: 50px;
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	-webkit-backdrop-filter: blur(65px);
	backdrop-filter: blur(65px);
	box-shadow: 0px 0px 6px 0px rgba(204, 20, 20, 0.29);
	background-color: rgba(45, 1, 1, 0.29);
	overflow: hidden;
	border-radius: 10px;
	border: 1px solid #d70909;

	margin-bottom: 9px;
`;
