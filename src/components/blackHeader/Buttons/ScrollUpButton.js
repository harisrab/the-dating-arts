import React, { useState, useEffect } from "react";
import { Frame, AnimatePresence } from "framer";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useStateValue } from "../../../Store/StateProvider";

import { useHistory } from "react-router-dom";

const variants = {
	initial: {
		width: "34px",
		height: "34px",
		overflow: "visible",
		backgroundColor: "#ffffff0",
		border: "1px solid #070707",
		shadow: "0px 0px 5px 0px #070707",
	},
	hover: {
		transition: { duration: 0.2, type: "tween" },
		cursor: "pointer",
		shadow: "0px 0px 8px 0px #070707",
	},
	tap: {
		shadow: "0px 0px 12px 0px #070707",
		transition: { duration: 0.2, type: "tween" },
	},
};

function ScrollUpButton() {
	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispatch] = useStateValue();
	const [showBtn, setShowBtn] = useState(false);

	const scrollTop = () => {
		const body = document.getElementById("main_app");
		body.scrollTop = 0;
	};

	useEffect(() => {
		document
			.getElementById("main_app")
			.addEventListener("scroll", (event) => {
				let scroll = event.target.scrollTop;

				if (scroll > 600) {
					setShowBtn(true);
				} else {
					setShowBtn(false);
				}
			});
	});

	return (
		<Frame
			variants={variants}
			initial={"initial"}
			whileHover={"hover"}
			whileTap={"tap"}
			onClick={scrollTop}
			style={{
				display: showBtn ? "flex" : "none",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				pointerEvents: "auto",
				willChange: "transform",
			}}
		>
			<AnimatePresence>
				{/* render this only when at the checkout page or payment page */}

				<Frame
					key={23}
					height={"100%"}
					width={"100%"}
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
					<ArrowUpwardIcon
						style={{
							color: "black",
							width: "50%",
						}}
					/>
				</Frame>
			</AnimatePresence>
		</Frame>
	);
}

export default ScrollUpButton;
