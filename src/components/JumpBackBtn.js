import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useStateValue } from "../Store/StateProvider";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

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
	let history = useHistory();

	const GoBack = () => {
		history.goBack();
	};
	return (
		<Wrapper>
			<motion.div
				className="exit__button"
				onClick={GoBack}
				variants={variants}
				initial="initial"
				whileHover="final"
				transition={{ duration: 0.1 }}
				style={{ pointerEvents: "auto" }}
			>
				<ArrowBackIosIcon style={{ color: "#fff" }} />
				<motion.p variants={textVars} transition={{ duration: 0.3 }}>
					Go back
				</motion.p>
			</motion.div>
		</Wrapper>
	);
}

export default ProductModalHeader;

const Wrapper = styled.div`
	.exit__button {
		height: auto;
		width: auto;

		margin-left: 0px;

		/* background-color: var(--main-color-white); */

		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;

		align-items: center;
		justify-content: center;

		&:hover {
			cursor: pointer;
		}

		pointer-events: "auto";
		user-select: text;
		-webkit-user-select: text;

		p {
			margin-left: 10px;
			margin-top: -2px;

			opacity: 0;

			text-decoration: underline;
			text-decoration-style: dotted;

			color: #b6b6b6;

			pointer-events: "auto";
			user-select: text;
			-webkit-user-select: text;
		}
	}

	/* background-color:	 blue; */
`;
