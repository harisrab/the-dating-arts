import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const btnVariants = {
	initial: {
		color: "rgb(204, 20, 20)",
	},
	final: {
		color: "rgb(230, 230, 230)",
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
function EventsAddToCartButton() {
	const [didHover, setDidHover] = useState(false);

	return (
		<ButtonWrapper
			variants={btnVariants}
			onMouseEnter={() => setDidHover(true)}
			onMouseLeave={() => setDidHover(false)}
			initial="initial"
			whileHover={"final"}
			transition={{ duration: 0.2 }}
		>
			<p>Add To Cart</p>
			<AnimatedBG
				variants={bgVariants}
				initial="initial"
				animate={didHover ? "final" : {}}
				transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
			></AnimatedBG>
		</ButtonWrapper>
	);
}

export default EventsAddToCartButton;

const ButtonWrapper = styled(motion.button)`
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
		color: rgb(204, 20, 20);
		position: absolute;

		z-index: 1;

		width: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		/* color: #dd31d2; */
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
