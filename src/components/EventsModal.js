import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";

const modalBGVariants = {
	initial: {
		opacity: 0,
	},
	final: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

const modalVariants = {
	initial: {
		opacity: 0,
	},
	final: {
		opacity: 1,
		pointerEvents: "none",
	},
	exit: {
		opacity: 0,
	},
};

function EventsModal({ setShowEventsModal, showEventsModal }) {
	return (
		<AnimatePresence>
			{showEventsModal && (
				<Wrapper
					variants={modalBGVariants}
					initial="initial"
					animate="final"
					exit="exit"
					transition={{ duration: 0.3 }}
				></Wrapper>
			)}
		</AnimatePresence>
	);
}

export default EventsModal;

const Wrapper = styled(motion.div)`
	position: absolute;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	height: 88vh;
	width: 92vw;

	background-color: #ffffff;
	z-index: 100000000;

	display: flex;
	align-items: center;
	justify-content: center;
`;
