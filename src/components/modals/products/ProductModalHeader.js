import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useStateValue } from "../../../Store/StateProvider";
import { motion } from "framer-motion";
import ShoppingCartButton from "../../blackHeader/Buttons/ShoppingCartButton";

const variants = {
	initial: {},
	hover: {},
};

const textVars = {
	initial: {
		opacity: 0,
	},
	final: { opacity: 1 },
};

function ProductModalHeader() {
	const [{ eventModalToggle }, dispatch] = useStateValue();

	const ToggleModal = () => {
		dispatch({
			type: "SET_PRODUCT_MODAL_STATE",
			payload: false,
		});

		dispatch({
			type: "SET_SELECTED_PRODUCT_ID",
			payload: "",
		});
	};
	return (
		<Wrapper>
			<motion.div
				className="exit__button"
				onClick={ToggleModal}
				variants={variants}
				initial="initial"
				whileHover="final"
				transition={{ duration: 0.1 }}
			>
				<ArrowBackIosIcon />
				<motion.p variants={textVars} transition={{ duration: 0.3 }}>
					Go back
				</motion.p>
			</motion.div>
			<div className="cart_btn">
				<ShoppingCartButton />
			</div>
		</Wrapper>
	);
}

export default ProductModalHeader;

const Wrapper = styled.div`
	height: 15%;
	width: 100%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.exit__button {
		height: auto;
		width: auto;

		margin-left: 50px;

		background-color: var(--main-color-white);

		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;

		align-items: center;
		justify-content: center;

		&:hover {
			cursor: pointer;
		}

		p {
			margin-left: 10px;
			margin-top: -2px;

			opacity: 0;

			text-decoration: underline;
			text-decoration-style: dotted;

			color: gray;
		}
	}

	.cart_btn {
		height: auto;
		width: auto;
		margin-right: 70px;
	}

	/* background-color:	 blue; */
`;
