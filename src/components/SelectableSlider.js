import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function SelectableSlider({ length = 5, currentIndex = 1, setCurrentIndex }) {
	return (
		<Wrapper>
			{[...Array(length)].map((_, i) => {
				return (
					<div
						key={i}
						id={i}
						className={`selector selector_${i}`}
						onClick={() => setCurrentIndex(i)}
						style={
							i === currentIndex
								? {
										backgroundColor:
											"var(--main-color-red)",
										height: "4px",
										opacity: 1,
								  }
								: {}
						}
					></div>
				);
			})}
		</Wrapper>
	);
}

export default SelectableSlider;

const Wrapper = styled(motion.div)`
	height: auto;
	width: auto;

	color: white;

	display: flex;
	align-items: center;

	.selector {
		height: 2px;
		flex: 1;
		background-color: white;
		margin: 1px;
		border-radius: 4px;
		opacity: 0.21;
	}

	max-width: 100%;
`;
