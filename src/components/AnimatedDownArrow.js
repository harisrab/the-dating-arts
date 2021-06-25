import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { motion } from "framer-motion";
import styled from "styled-components";

function AnimatedDownArrow() {
	return (
		<DownArrow
			// initial={{ y: 0 }}
			animate={{ y: 10 }}
			transition={{
				repeat: Infinity,
				duration: 1,
				repeatType: "reverse",
			}}
		>
			<KeyboardArrowDownIcon className="downarrow" />
		</DownArrow>
	);
}

export default AnimatedDownArrow;

const DownArrow = styled(motion.div)`
	position: absolute;

	left: 50%;
	transform: translate(-50%, 0);

	bottom: 8%;

	width: auto;
	height: auto;

	.downarrow {
		color: white;
		height: 30px;
	}
`;
