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
function SubmitButton() {
	const [didHover, setDidHover] = useState(false);

	const handleSubscribe = (e) => {
		e.preventDefault();
		console.log("Add to Cart Button was Clicked");
	};

	return (
		<ButtonWrapper
			variants={btnVariants}
			onMouseEnter={() => setDidHover(true)}
			onMouseLeave={() => setDidHover(false)}
			initial="initial"
			whileHover={"final"}
			transition={{ duration: 0.2 }}
			onClick={handleSubscribe}
		>
			<motion.p
				initial={!didHover ? { color: "#a70000" } : {}}
				animate={didHover ? { color: "#fff" } : {}}
			>
				ADD TO CART
			</motion.p>
			<AnimatedBG
				variants={bgVariants}
				initial="initial"
				animate={didHover ? "final" : {}}
				transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
			></AnimatedBG>
		</ButtonWrapper>
	);
}

export default SubmitButton;

const ButtonWrapper = styled(motion.button)`
	width: 100%;
	height: 3.2vw;
	border: 1px solid;
	border-color: var(--main-color-red);

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: flex-end;
	box-sizing: border-box;

	background-color: transparent;

	&:hover {
		cursor: pointer;
	}

	position: relative;

	p {
		/* color: #cc1414; */
		position: absolute;

		z-index: 1;

		width: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		font-size: 13px;
		font-family: "Spectral", sans-serif;
		font-weight: 500;
	}
`;

const AnimatedBG = styled(motion.div)`
	width: 101%;
	height: 0%;
	background-color: var(--main-color-red);
	margin-left: -1px;
	margin-bottom: -1px;
	position: relative;
`;
