import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const bgVariants = {
	initial: {
		height: "0%",
	},
	final: {
		height: "103%",
	},
};
function EventsAddToCartButton() {
	const [didHover, setDidHover] = useState(false);

	return (
		<AnimatePresence>
			<ButtonWrapper
				onMouseEnter={() => setDidHover(true)}
				onMouseLeave={() => setDidHover(false)}
				initial={{ color: "#cc1414" }}
				whileHover={{ color: "#ffffff" }}
				whileTap="final"
				transition={{ duration: 0.2 }}
			>
				<p>Add To Cart</p>
				<AnimatedBG
					variants={bgVariants}
					initial="initial"
					animate={didHover ? "final" : {}}
					transition={{
						type: "tween",
						ease: "easeOut",
						duration: 0.3,
					}}
				></AnimatedBG>
			</ButtonWrapper>
		</AnimatePresence>
	);
}

export default EventsAddToCartButton;

const ButtonWrapper = styled(motion.button)`
	color: white;
	width: 12vw;
	height: 3vw;
	border: 2px var(--main-color-red) solid;

	display: flex;
	align-items: flex-end;
	box-sizing: border-box;

	background-color: transparent;

	&:hover {
		cursor: pointer;
	}

	position: relative;

	p {
		position: absolute;
		width: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	overflow: hidden;
`;

const AnimatedBG = styled(motion.div)`
	width: 101%;
	height: 0%;
	background-color: var(--main-color-red);
	margin-left: -1px;
	margin-bottom: -1px;
	position: relative;
`;
