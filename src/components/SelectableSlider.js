import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function SelectableSlider({ length = 5, currentIndex = 1, setCurrentIndex }) {
	return (
		<Wrapper>
			{[...Array(length)].map((_, i) => {
				return (
					<motion.div
						className="clickable"
						onClick={() => setCurrentIndex(i)}
					>
						<motion.div
							key={i}
							id={i}
							className={`selector selector_${i}`}
							style={
								i === currentIndex
									? {
											backgroundColor:
												"var(--main-color-red)",
											height: "4px",
											opacity: 1,
											transition: "0.3s ease-out",
									  }
									: {}
							}
						></motion.div>
					</motion.div>
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

	max-width: 100%;

	.clickable {
		flex-grow: 1;
		height: 4vh;

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

		transition: 0.2s ease-out;

		&:hover {
			cursor: pointer;
			flex-grow: 1.2;
			transition: 0.3s ease-out;

			.selector {
				height: 3px;
				opacity: 0.5;
				transform-origin: center;
				transition: 0.3s ease-out;
			}
		}
	}
`;
