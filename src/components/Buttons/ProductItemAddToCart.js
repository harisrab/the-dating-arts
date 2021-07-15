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
				initial={!didHover ? { color: "#fff" } : {}}
				animate={didHover ? { color: "#fff" } : {}}
			>
				BUY NOW
			</motion.p>
		</ButtonWrapper>
	);
}

export default ProductItemDetailsButton;

const ButtonWrapper = styled(motion.button)`
	width: 85%;
	height: 3vw;
	border: 1px solid;
	border-color: black;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: flex-end;
	box-sizing: border-box;

	overflow: hidden;

	border-radius: 5px;

	background-color: transparent;

	&:hover {
		cursor: pointer;
	}

	position: relative;

	background-color: black;

	p {
		color: white;
		position: absolute;

		z-index: 1;

		width: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		font-size: 11px;
		font-family: "Spectral", sans-serif;
		font-weight: 500;
	}


	@media only screen and (max-device-width: 480px)  {
		height: 40px;
	}
`;
