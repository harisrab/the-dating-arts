import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useStateValue } from "../../Store/StateProvider";

const btnVariants = {
	initial: {
		color: "#000000",
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
function ProductExploreButton() {
	const [didHover, setDidHover] = useState(false);
	const [{ productModalToggle }, dispatch] = useStateValue();

	const handleProductModal = (e) => {
		dispatch({
			type: "SET_PRODUCT_MODAL_STATE",
			payload: true,
		});
	};

	return (
		<ButtonWrapper
			variants={btnVariants}
			onMouseEnter={() => setDidHover(true)}
			onMouseLeave={() => setDidHover(false)}
			initial="initial"
			whileHover={"final"}
			transition={{ duration: 0.2 }}
			onClick={handleProductModal}
		>
			<p>DETAILS</p>
			<AnimatedBG
				variants={bgVariants}
				initial="initial"
				animate={didHover ? "final" : {}}
				transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
			></AnimatedBG>
		</ButtonWrapper>
	);
}

export default ProductExploreButton;

const ButtonWrapper = styled(motion.button)`
	width: 10vw;
	height: 3vw;
	border: 1px solid;
	border-color: #000000;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: flex-end;
	box-sizing: border-box;

	background-color: transparent;

	position: relative;

	&:hover {
		cursor: pointer;
	}

	color: #cc1414;

	p {
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
	background-color: #000000;
	margin-left: -1px;
	margin-bottom: -1px;
	position: relative;
`;
