import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function ApplyNowButton() {
	return (
		<ButtonWrapper className="btn btn-1">
			<span>Apply now</span>
		</ButtonWrapper>
	);
}

export default ApplyNowButton;

const ButtonWrapper = styled(motion.button)`
	.btn {
		border: none;
		font-family: "GothamBook", sans-serif;
		font-size: 13px;
		color: inherit;
		background: var(--main-color-white);
		cursor: pointer;
		padding: 14px 49px;
		display: inline-block;
		text-transform: uppercase;
		letter-spacing: 1px;
		outline: none;
		position: relative;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
		border: 2px solid var(--main-color-white);
		color: var(--main-color-dark-black);
		overflow: hidden;
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
		border: 2px solid white;
	}
`;
