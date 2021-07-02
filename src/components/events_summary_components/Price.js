import React from "react";
import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CurrencyFormat from "react-currency-format";

function Price({ price = "4997" }) {
	return (
		<Wrapper>
			<AttachMoneyIcon style={{ color: "white" }} />
			<p>
				<CurrencyFormat
					value={price}
					displayType={"text"}
					thousandSeparator={true}
				/>
			</p>
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
