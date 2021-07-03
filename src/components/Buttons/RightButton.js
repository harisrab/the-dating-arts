import React from "react";
import { Frame, AnimatePresence } from "framer";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const variants = {
	initial: {
		width: "5.5vh",
		height: "5.5vh",
		overflow: "visible",
		backgroundColor: "#ffffff0",
		border: "1px solid #e6e6e6",
		shadow: "0px 0px 5px 0px #e6e6e6",
	},
	hover: {
		transition: { duration: 0.2, type: "tween" },
		cursor: "pointer",
		shadow: "0px 0px 8px 0px #e6e6e6",
	},
	tap: {
		shadow: "0px 0px 12px 0px #e6e6e6",
		transition: { duration: 0.2, type: "tween" },
	},
};

function RightButton({ currentIndex, setCurrentIndex, testimonials }) {
	return (
		<Frame
			variants={variants}
			initial={"initial"}
			whileHover={"hover"}
			whileTap={"tap"}
			onClick={() => {
				if (currentIndex < testimonials.length - 1) {
					setCurrentIndex(currentIndex + 1);
				}
			}}
			style={{ position: "relative", pointerEvents: "auto" }}
		>
			<AnimatePresence>
				{/* render this only when at the checkout page or payment page */}

				<Frame
					key={55}
					height={"100%"}
					width={"100%"}
					position="absolute"
					top={0}
					left={0}
					backgroundColor="none"
					transition={{ type: "tween", duration: 0.2 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<ArrowForwardIcon
						style={{ color: "white", fontSize: "18px" }}
					/>
				</Frame>
			</AnimatePresence>
		</Frame>
	);
}

export default RightButton;
