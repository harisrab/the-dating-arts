import React from "react";
import { Frame, AnimatePresence } from "framer";
// import { useHistory } from "react-router-dom";

const variants = {
	initial: {
		width: "34px",
		height: "34px",
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

function SocialIconsHeader({ type = "instagram" }) {
	const moveToLogin = () => {
		// do some fancy page switching
		// if user not availabe then switch to login page, otherwise move to user profile page
		if (type === "facebook") {
			window.location.href = "https://facebook.com/askcolgatenow";
		} else if (type === "youtube") {
			window.location.href =
				"https://youtube.com/channel/UCkzwd-6cVehBGZbzQMddSeA";
		} else if (type === "instagram") {
			window.location.href = "https://www.instagram.com/askcolgate/";
		}
	};

	return (
		<Frame
			variants={variants}
			initial={"initial"}
			whileHover={"hover"}
			whileTap={"tap"}
			onClick={moveToLogin}
			style={{
				position: "relative",
				pointerEvents: "auto",
				marginRight: "18px",
				willChange: "transform",
			}}
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
					{type === "youtube" ? (
						<img
							style={{ height: "55%", width: "55%" }}
							src={`/${type}.svg`}
							alt=""
						/>
					) : (
						<img
							style={{ height: "45%", width: "45%" }}
							src={`/${type}.svg`}
							alt=""
						/>
					)}
				</Frame>
			</AnimatePresence>
		</Frame>
	);
}

export default SocialIconsHeader;
