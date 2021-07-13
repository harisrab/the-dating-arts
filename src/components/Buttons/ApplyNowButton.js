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
		height: "103%",
	},
};
function ApplyNowButton() {
	const [{ cmsData }, dispatch] = useStateValue();

	const [didHover, setDidHover] = useState(false);

	return (
		<ButtonWrapper
			variants={btnVariants}
			onMouseEnter={() => setDidHover(true)}
			onMouseLeave={() => setDidHover(false)}
			onTap={() => setDidHover(true)}
			initial="initial"
			whileHover={"final"}
			transition={{ duration: 0.2 }}
			onClick={() =>
				(window.location.href =
					cmsData.data.applicationPages[0].googleFormsLink)
			}
		>
			<p>Apply Now</p>
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
	width: 130px;
	height: 44px;
	border: 1px var(--main-color-white) solid;

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
	color: var(--main-color-white);

	overflow: hidden;

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
	width: 101%;
	height: 0%;
	background-color: white;
	margin-left: -1px;
	margin-bottom: -1px;
	position: relative;
`;
