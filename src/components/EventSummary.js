import React from "react";
import styled from "styled-components";

function EventSummary() {
	return (
		<Wrapper>
			<DateHolder></DateHolder>
			<TitleHolder></TitleHolder>
			<LocationHolder></LocationHolder>
			<PriceTag></PriceTag>
			<ButtonHolder></ButtonHolder>
		</Wrapper>
	);
}

export default EventSummary;

const Wrapper = styled.div`
	height: 50px;
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 0px 0px 6px 0px rgba(204, 20, 20, 0.29);
	background-color: rgba(45, 1, 1, 0.29);
	overflow: hidden;
	border-radius: 10px;
	border: 1px solid #d70909;

	margin-bottom: 9px;
`;

const DateHolder = styled.div`
	height: 100%;
	width: 9%;
	background-color: #0000ff58;
`;

const TitleHolder = styled.div`
	height: 100%;
	flex-grow: 1;
	background-color: #ffff0050;
`;

const LocationHolder = styled.div`
	height: 100%;
	width: 22%;
	background-color: #00800047;
`;

const PriceTag = styled.div`
	height: 100%;
	width: 12%;
	background-color: #001e8075;
`;


const ButtonHolder = styled.div`
height: 100%;
width: 13%;
background-color: #01887d8f;
`;