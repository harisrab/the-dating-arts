import React from "react";
import { Frame, AnimatePresence } from "framer";

import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../../Store/StateProvider";

const variants = {
	initial: {
		width: "4.2vh",
		height: "4.2vh",
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

const lineOneVariants = {
	initial: {
		width: "28.8%",
		height: "2.2%",
		backgroundColor: "#e6e6e6",
		overflow: "visible",
		position: "absolute",
		top: "37.77%",
		right: "22.22%",
		originX: 0,
		opacity: 0,
	},

	hover: {
		width: "53.33%",
		right: "22.22%",
	},

	tap: {
		boxShadow: "0px 0px 2px 0px #e6e6e6",
	},
};

const lineTwoVariants = {
	initial: {
		height: "2.2%",
		width: "44.4%",
		backgroundColor: "#e6e6e6",
		overflow: "visible",
		position: "absolute",
		top: "48.88%",
		right: "31.11%",
		originX: 0.5,
		opacity: 0,
	},

	hover: {
		width: "53.33%",
		right: "22.22%",
	},

	tap: {
		boxShadow: "0px 0px 2px 0px #e6e6e6",
	},
};

const lineThreeVariants = {
	initial: {
		width: "28.8%",
		height: "2.2%",
		backgroundColor: "#e6e6e6",
		overflow: "visible",
		position: "absolute",
		bottom: "37.77%",
		right: "22.22%",
		originX: 0,
		opacity: 0,
	},

	hover: {
		width: "53.33%",
		right: "22.22%",
	},

	tap: {
		boxShadow: "0px 0px 2px 0px #e6e6e6",
	},
};

function MenuButton() {
	const [{ menu }, dispatch] = useStateValue();

	let active = menu.buttonStates.hamburger;

	const setActive = (m) => {
		dispatch({
			type: "SET_HAMBURGER_STATE",
			payload: m,
		});
	};

	return (
		<Frame
			className="buttonBox"
			variants={variants}
			initial={"initial"}
			whileHover={"hover"}
			whileTap={"tap"}
			onClick={() => setActive(!active)}
			style={{ position: "relative" }}
		>
			<AnimatePresence>
				{active === true ? (
					<Frame
						key={active}
						height={"100%"}
						width={"100%"}
						position="absolute"
						top={0}
						left={0}
						backgroundColor="none"
						transition={{ type: "tween", duration: 0.2 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<CloseIcon
							style={{
								color: "white",
								height: "60%",
								width: "60%",
							}}
						/>
					</Frame>
				) : (
					<>
						<Frame
							variants={lineOneVariants}
							animate={{ opacity: 1 }}
							width={"28.8%"}
							height={"2.2%"}
							transition={{ type: "tween" }}
							style={{ position: "absolute" }}
						/>
						<Frame
							variants={lineTwoVariants}
							animate={{ opacity: 1 }}
							width={"44.4%"}
							height={"2.2%"}
							transition={{ type: "tween" }}
							style={{ position: "absolute" }}
						/>
						<Frame
							variants={lineThreeVariants}
							animate={{ opacity: 1 }}
							width={"28.8%"}
							height={"2.2%"}
							transition={{ type: "tween" }}
							style={{ position: "absolute" }}
						/>
					</>
				)}
			</AnimatePresence>
		</Frame>
	);
}

export default MenuButton;
