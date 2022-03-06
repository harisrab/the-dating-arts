import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useStateValue } from "../../Store/StateProvider";

function ProductExploreButton({ id }) {
	const [didHover, setDidHover] = useState(false);
	const [{ productModalToggle }, dispatch] = useStateValue();

	const handleProductModal = (e) => {
		dispatch({
			type: "SET_SELECTED_PRODUCT_ID",
			payload: id,
		});
		dispatch({
			type: "SET_PRODUCT_MODAL_STATE",
			payload: true,
		});
	};

	return (
		<ButtonWrapper onClick={handleProductModal}>
			<button className="btn btn-1">
				<span>Details</span>
			</button>
		</ButtonWrapper>
	);
}

export default ProductExploreButton;

const ButtonWrapper = styled.div`
	background-color: transparent;
	border: none;

	.btn {
		border: none;
		font-family: "GothamBook", sans-serif;
		font-size: 13px;
		color: inherit;
		cursor: pointer;
		padding: 13px 40px;
		display: inline-block;
		text-transform: uppercase;
		letter-spacing: 1px;
		outline: none;
		position: relative;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
		border: 1px solid black;
		color: black;
		overflow: hidden;
		background: transparent;
	}

	.btn span {
		letter-spacing: 3px;
		font-size: 12px;
	}

	.btn:after {
		content: "";
		position: absolute;
		z-index: -1;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
	}

	/* Button 1 */
	.btn-1:hover,
	.btn-1:active {
		/* font-family: "GothamBook", sans-serif; */
		color: white;
		background: #000;
		border: 1px solid black;
	}
`;
