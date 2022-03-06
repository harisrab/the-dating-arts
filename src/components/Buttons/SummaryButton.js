import React from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";

function SummaryButton() {
	return (
		<ButtonWrapper>
			<button className="btn btn-1">
				<span>Explore</span>
			</button>
		</ButtonWrapper>
	);
}

export default SummaryButton;

const ButtonWrapper = styled.div`
	background-color: transparent;
	border: none;

	height: 100%;
	width: 100%;


	.btn {
		border: none;

		height: 100%;
		width: 100%;

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

		border: 1px solid transparent;

		border-left: 1px solid var(--main-color-white);

		color: var(--main-color-white);
		overflow: hidden;
		background: transparent;

		border-style:inset;
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
		color: black;
		background: #fff;
		border: 1px solid white;
	}
`;
