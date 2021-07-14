import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
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
		height: "103%",
	},
};
function ApplyNowButton() {
	const [didHover, setDidHover] = useState(false);
	const history = useHistory();
	const [{ headerLogoState }, dispatch] = useStateValue();

	const changePage = () => {
		dispatch({
			type: "SET_LOGO_TYPE",
			payload: "jumpback",
		});

		history.push("/live-experiences");
	};

	return (
		<ButtonWrapper
			variants={btnVariants}
			onMouseEnter={() => setDidHover(true)}
			onMouseLeave={() => setDidHover(false)}
			initial="initial"
			whileHover={"final"}
			transition={{ duration: 0.2 }}
			onClick={changePage}
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

export default ApplyNowButton;

const ButtonWrapper = styled(motion.button)`
	width: 100px;
	height: 35px;
	border: 1px var(--main-color-white) solid;

	margin-top: 0px;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: flex-end;
	box-sizing: border-box;
	overflow: hidden;
	justify-self: flex-end;

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
	}

	@media only screen and (max-device-width: 480px) {
		margin-bottom: 30px;
		background-color: var(--main-color-red);
		border-color: var(--main-color-red);

		p {
			color: white;
			font-family: "Spectral", sans-serif;
			font-weight: 400;
		}
	}
`;

const AnimatedBG = styled(motion.div)`
	width: 101%;
	height: 0%;
	background-color: white;
	margin-left: -1px;
	margin-bottom: -1px;
	position: relative;

	@media only screen and (max-device-width: 480px) {
		display: none;
	}
`;
