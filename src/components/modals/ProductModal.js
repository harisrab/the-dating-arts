import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";
import ProductModalHeader from "./products/ProductModalHeader";
import ProductModalContent from "./products/ProductModalContent";
import ProductModalFooter from "./products/ProductModalFooter";
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

function ProductModal() {
	const [{ productModalToggle }, dispatch] = useStateValue();

	return (
		<AnimatePresence>
			{productModalToggle && (
				<Wrapper
					variants={modalBGVariants}
					initial="initial"
					animate="final"
					exit="exit"
					transition={{ duration: 0.3 }}
					key={20}
				>
					<img src="/inside_book.png" alt="" />

					<ProductModalHeader />

					<ProductModalContent />

					<ProductModalFooter />
				</Wrapper>
			)}
		</AnimatePresence>
	);
}

export default ProductModal;

const Wrapper = styled(motion.div)`
	position: absolute;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	height: 100vh;
	width: 100vw;

	background-color: var(--main-color-white);
	z-index: 100000000;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	img {
		position: absolute;
		top: 50%;
		left: 83%;

		transform: translate(-50%, -50%);
		height: 150%;
	}

	overflow: hidden;
`;
