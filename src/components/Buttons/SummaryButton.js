import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useStateValue } from "../../Store/StateProvider";

const btnVariants = {
	initial: {
		color: "rgb(230, 230, 230)",
		scale: 1,
	},
	final: {
		color: "rgb(0,0,0)",
	},
};

const bgVariants = {
	initial: {
		height: "0%",
	},
	final: {
		height: "107%",
	},
};

function SummaryButton({ setShowEventsModal, id }) {
	const [didHover, setDidHover] = useState(false);
	const [{ eventModalToggle }, dispatch] = useStateValue();

	const toggleModal = (e, id) => {
		// Toggle Modal
		dispatch({
			type: "SET_MODAL_STATE",
			payload: true,
		});

		// Set Selected ID
		dispatch({
			type: "SET_SELECTED_EVENT_ID",
			payload: id,
		});

		console.log("Data Dispatched");
	};

	return (
		<ButtonWrapper
			variants={btnVariants}
			onMouseEnter={() => setDidHover(true)}
			onMouseLeave={() => setDidHover(false)}
			initial="initial"
			whileHover="final"
			transition={{ duration: 0.2 }}
			onClick={() => toggleModal(true, id)}
		>
			<p>Explore</p>
			<AnimatedBG
				variants={bgVariants}
				initial="initial"
				animate={didHover ? "final" : {}}
				transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
			></AnimatedBG>
		</ButtonWrapper>
	);
}

export default SummaryButton;

const ButtonWrapper = styled(motion.button)`
	width: 93%;
	height: 80%;
	border: 1px var(--main-color-white) solid;
	border-radius: 7px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: flex-end;
	box-sizing: border-box;
	overflow: hidden;

	background-color: transparent;

	&:hover {
		cursor: pointer;
	}

	position: relative;
	color: var(--main-color-white);

	p {
		position: absolute;

		z-index: 1;

		width: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		font-family: "Spectral", sans-serif;
		font-weight: 500;
		font-size: 14px;
	}
`;

const AnimatedBG = styled(motion.div)`
	width: 100%;

	height: 0%;
	background-color: white;
	position: relative;
`;
