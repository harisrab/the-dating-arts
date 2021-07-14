import React from "react";
import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CurrencyFormat from "react-currency-format";

function Price({ price = "4997" }) {
	return (
		<Wrapper>
			<AttachMoneyIconWrapper />
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

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	will-change: transform;

	p {
		font-family: "Spectral", sans-serif;
		color: var(--main-color-white);
		font-weight: 200;
		font-size: 17px;
		margin-top: 2px;
		margin-left: 5px;
		will-change: transform;
	}


	@media only screen and (max-device-width: 480px) {
		
	}
`;

const AttachMoneyIconWrapper = styled(AttachMoneyIcon)`
	color: white;
	
	@media only screen and (max-device-width: 480px) {
		color: white;
		font-size: 17px !important;
	}
`;
