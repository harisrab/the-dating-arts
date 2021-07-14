import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";
import EventsModalHeader from "./events/EventsModalHeader";
import EventsModalContent from "./events/EventsModalContent";
import EventsModalFooter from "./events/EventsModalFooter";
import { useStateValue } from "../../Store/StateProvider";

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

function EventsModal({ setShowEventsModal, showEventsModal }) {
	const [{ eventModalToggle }, dispatch] = useStateValue();

	return (
		<AnimatePresence>
			{eventModalToggle && (
				<Wrapper
					variants={modalBGVariants}
					initial="initial"
					animate="final"
					exit="exit"
					transition={{ duration: 0.3 }}
					key={20}
				>
					<EventsModalHeader
						setShowEventsModal={setShowEventsModal}
					/>

					<EventsModalContent />

					<EventsModalFooter />
				</Wrapper>
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

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	overflow: hidden;

	@media only screen and (max-device-width: 480px) {
	}
`;
