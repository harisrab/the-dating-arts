import React from "react";
import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

function Price({ price = "4,997" }) {
	return (
		<Wrapper>
			<AttachMoneyIcon style={{ color: "white" }} />
			<p>{price}</p>
		</Wrapper>
	);
}

export default Price;

const Wrapper = styled.div`
	width: 100%;

	display: flex;
	align-items: center;

	p {
		font-family: "Archivo", sans-serif;
		color: var(--main-color-white);
		font-weight: 200;
		margin-top: 2px;
		margin-left: 5px;
	}
`;
