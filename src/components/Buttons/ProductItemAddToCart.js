import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const btnVariants = {
	initial: {
		scale: 1,
	},
	final: {},
};

const bgVariants = {
	initial: {
		height: "0%",
	},
	final: {
		height: "103%",
	},
};
function ProductItemDetailsButton({ url }) {
	const [didHover, setDidHover] = useState(false);

	const handleSubscribe = (e) => {
		e.preventDefault();
		window.location.href = url;
	};

	return (
		<ButtonWrapper onClick={handleSubscribe}>
			<button className="btn btn-1">
				<span>Buy now</span>
			</button>
		</ButtonWrapper>
	);
}

export default ProductItemDetailsButton;

const ButtonWrapper = styled.div`
	background-color: transparent;
	border: none;

	width: 85%;

	.btn {
		border: none;
		font-family: "GothamBook", sans-serif;
		font-size: 13px;
		color: inherit;
		cursor: pointer;
		padding: 13px;

		width: 100%;

		display: inline-block;
		text-transform: uppercase;
		letter-spacing: 1px;
		outline: none;
		position: relative;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
		border: 1px solid var(--main-color-white);
		color: var(--main-color-white);
		overflow: hidden;
		background: black;

		border-radius: 2px;
		/* width: 85%; */
	}

	.btn span {
		letter-spacing: 3px;
		font-size: 10px;
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
		/* color: black; */
		/* background: #fff; */
		/* border: 1px solid white; */
		background-color: #303030;
	}
`;
