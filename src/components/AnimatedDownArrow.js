import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { motion } from "framer-motion";
import styled from "styled-components";

function AnimatedDownArrow({ color }) {
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
				<KeyboardArrowDownIcon
					style={
						color === "black"
							? { color: "rgb(0, 0, 0)" }
							: { color: "rgb(255, 255, 255)" }
					}
					className="downarrow"
				/>
			</DownArrow>
		</Wrapper>
	);
}

export default AnimatedDownArrow;

const Wrapper = styled.div`
	width: 100%;
	position: absolute;
	bottom: 8%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	justify-content: center;
	will-change: transform;
`;

const DownArrow = styled(motion.div)`
	width: auto;
	height: auto;
	will-change: transform;

	.downarrow {
		color: #fff;
		height: 30px;
		will-change: transform;
	}
`;
