import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const btnVariants = {
	initial: {
		color: "#cc1414",
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
function SubscribeButton({ status }) {
	const [didHover, setDidHover] = useState(false);

	return (
		<ButtonWrapper
			variants={btnVariants}
			onMouseEnter={() => setDidHover(true)}
			onMouseLeave={() => setDidHover(false)}
			initial="initial"
			whileHover={"final"}
			transition={{ duration: 0.2 }}
			disabled={status === "" ? false : status ? true : true}
			style={
				status === ""
					? {}
					: status
					? {
							backgroundColor: "green",
							borderColor: "green",
							color: "#ffffff",
					  }
					: { backgroundColor: "red", color: "#ffffff" }
			}
		>
			<p
				style={
					status === ""
						? {}
						: status
						? { color: "#ffffff" }
						: { color: "#ffffff" }
				}
			>
				{status === "" ? "SUBSCRIBE" : status ? "SUBSCRIBED" : "ERROR"}
			</p>
			{status === "" ? (
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
			) : status ? (
				<></>
			) : (
				<></>
			)}
		</ButtonWrapper>
	);
}

export default SubscribeButton;

const ButtonWrapper = styled(motion.button)`
	width: 10vw;
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

	@media only screen and (max-device-width: 480px) {
		height: 40px;
		width: 100%;
		margin-top: 20px;
		background-color: var(--main-color-red);

		p {
			color: white;
			font-weight: 200;
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
`;
