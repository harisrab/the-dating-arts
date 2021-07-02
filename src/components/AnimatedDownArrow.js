import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { motion } from "framer-motion";
import styled from "styled-components";

function AnimatedDownArrow() {
	return (
		<Wrapper>
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
		</Wrapper>
	);
}

export default AnimatedDownArrow;

const Wrapper = styled.div`
	width: 100%;
	position: absolute;
	bottom: 8%;
	display: flex;
	justify-content: center;
`;

const DownArrow = styled(motion.div)`
	width: auto;
	height: auto;

	.downarrow {
		color: white;
		height: 30px;
	}
`;
