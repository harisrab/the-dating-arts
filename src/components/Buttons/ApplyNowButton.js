import React from "react";
import { Frame } from "framer";

const wrapperVariants = {
	initial: {
		cursor: "pointer",
	},
	hover: {
		cursor: "pointer",
	},
};

function ApplyNowButton() {
	return (
		<Frame
			style={buttonWrapper}
			variants={wrapperVariants}
			initial="initial"
			whileHover="hover"
			transition={{ type: "tween", when: "afterChildren" }}
		>
			<p>Apply Now</p>
			<Frame
				variants={{
					initial: {
						height: "0%",
					},
					hover: {
						height: "100%",
					},
				}}
				initial={"initial"}
				whileHover={"hover"}
				style={slider}
			/>
		</Frame>
	);
}

export default ApplyNowButton;

const buttonWrapper = {
	height: "40px",
	width: "130px",
	marginTop: "30px",
	backgroundColor: "none",
	border: "1.5px solid var(--main-color-white)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "var(--main-color-white)",
	fontSize: "13px",
	fontFamily: "Spectral",
	position: "relative",
	PointerEvent: "auto",
	overflow: "hidden",
};

const slider = {
	height: "50%",
	width: "100%",
	position: "absolute",
	display: "block",
	bottom: 0,
	backgroundColor: "white",
	zIndex: 1,
};
