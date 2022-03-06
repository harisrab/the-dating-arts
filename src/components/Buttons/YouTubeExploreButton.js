import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const btnVariants = {
	initial: {
		color: "#cc1414",
		scale: 1,
	},
	final: {
		color: "#ffffff",
	},
};

const bgVariants = {
	initial: {
		height: "0%",
	},
	final: {
		height: "103%",
	},
};
function SubscribeButton() {
	const [didHover, setDidHover] = useState(false);

	const handleSubscribe = (e) => {
		window.location.href =
			"https://www.youtube.com/channel/UCkzwd-6cVehBGZbzQMddSeA";
	};

	return (
		<ButtonWrapper onClick={handleSubscribe}>
			<button className="btn btn-1">
				<span>Explore YouTube</span>
			</button>
		</ButtonWrapper>
	);
}

export default SubscribeButton;

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
		border: 1px solid red;
		color: red;
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
		background: red;
		border: 1px solid red;
	}

	position: absolute;
	bottom: 80px;
	
`;
