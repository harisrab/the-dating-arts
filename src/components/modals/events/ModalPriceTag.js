import React from "react";
import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CurrencyFormat from "react-currency-format";

function ModalPriceTag({ price }) {
	return (
		<Wrapper>
			{/* <MoneyIcon></MoneyIcon> */}
			<h2>
				<CurrencyFormat
					value={price}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"$"}
				/>
			</h2>
			<div className="per_person">
				<p>/person</p>
			</div>
		</Wrapper>
	);
}

export default ModalPriceTag;

const Wrapper = styled.div`
	height: 100%;
	width: 200px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	font-family: "GothamMedium", sans-serif;
	color: white;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	h2 {
		height: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		align-items: center;
		font-size: 35px;
		font-weight: 500;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}

	.per_person {
		height: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		align-items: center;
		font-weight: 200;
		font-size: 13px;
		padding-left: 10px;
		padding-top: 8px;
		opacity: 0.7;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
	}
`;

const MoneyIcon = styled(AttachMoneyIcon)`
	color: white;
	height: 100% !important;
	font-size: 50px !important;
`;
