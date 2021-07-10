import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useStateValue } from "../../Store/StateProvider";

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
function ProductItemDetailsButton({ info }) {
	const [didHover, setDidHover] = useState(false);

	const [{ productModalToggle }, dispatch] = useStateValue();

	const handleProductModal = (e) => {
		dispatch({
			type: "SET_SELECTED_PRODUCT_ID",
			payload: info.id,
		});

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
			<motion.p
				initial={!didHover ? { color: "#000000" } : {}}
				animate={didHover ? { color: "#fff" } : {}}
			>
				DETAILS
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

	border-radius: 5px;
	overflow: hidden;

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

		font-size: 11px;
		font-family: "Spectral", sans-serif;
		font-weight: 500;
	}
`;

const AnimatedBG = styled(motion.div)`
	width: 150%;
	height: 0%;
	background-color: black;
	position: relative;
`;
