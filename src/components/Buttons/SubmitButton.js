import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const btnVariants = {
	initial: {
		scale: 1,
		// height: "103%",
		backgroundColor: "#e00101",
	},
	final: {
		backgroundColor: "#c00000",
		// height: "103%",
	},
};

const bgVariants = {
	initial: {
		// height: "103%",
		// backgroundColor: "#e00101",
	},
	final: {
		// backgroundColor: "#c00000",
		// height: "103%",
	},
};
function SubmitButton({ success }) {
	const [didHover, setDidHover] = useState(false);

	return (
		<ButtonWrapper
			variants={btnVariants}
			onMouseEnter={() => setDidHover(true)}
			onMouseLeave={() => setDidHover(false)}
			initial="initial"
			whileHover={"final"}
			transition={{ duration: 0.2 }}
			disabled={success === "" ? false : success ? true : true}
			style={
				success === ""
					? {}
					: success
					? {
							backgroundColor: "green",
							borderColor: "green",
							color: "#fff",
					  }
					: {
							backgroundColor: "green",
							borderColor: "green",
							color: "#fff",
					  }
			}
		>
			{success === "" ? (
				<motion.p
					initial={!didHover ? { color: "#fff" } : {}}
					animate={didHover ? { color: "#fff" } : {}}
				>
					SUBMIT
				</motion.p>
			) : (
				<p
					style={{
						color: "white",
						fontWeight: "200",
						fontSize: "18px",
					}}
				>
					Message Submitted
				</p>
			)}
			{success === "" ? (
				<AnimatedBG
					variants={bgVariants}
					initial="initial"
					animate={didHover ? "final" : {}}
					transition={{
						type: "tween",
						ease: "easeOut",
						duration: 0.3,
					}}
				></AnimatedBG>
			) : (
				<></>
			)}
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
		font-family: "GothamBook", sans-serif;
		font-weight: 500;
		letter-spacing: 2px;
	}

	@media only screen and (max-device-width: 480px) {
		height: 40px;
		background-color: var(--main-color-red);

		p {
			color: white !important;
		}
	}
`;

const AnimatedBG = styled(motion.div)`
	width: 101%;
	height: 0%;
	background-color: var(--main-color-red);
	margin-left: -1px;
	margin-bottom: -1px;
	position: relative;

	@media only screen and (max-device-width: 480px) {
		display: none;
	}
`;
