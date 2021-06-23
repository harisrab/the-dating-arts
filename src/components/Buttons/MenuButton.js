import React from "react";
import { Frame, AnimatePresence } from "framer";

import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../../Store/StateProvider";

const variants = {
	initial: {
		width: 45,
		height: 45,
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
		width: 13,
		height: 1,
		backgroundColor: "#e6e6e6",
		overflow: "visible",
		position: "absolute",
		top: 17,
		right: 10,
		originX: 0,
		opacity: 0,
	},

	hover: {
		width: 24,
		right: 10,
	},

	tap: {
		boxShadow: "0px 0px 2px 0px #e6e6e6",
	},
};

const lineTwoVariants = {
	initial: {
		height: 1,
		width: 20,
		backgroundColor: "#e6e6e6",
		overflow: "visible",
		position: "absolute",
		top: 21,
		right: 14,
		originX: 0.5,
		opacity: 0,
	},

	hover: {
		width: 24,
		right: 10,
	},

	tap: {
		boxShadow: "0px 0px 2px 0px #e6e6e6",
	},
};

const lineThreeVariants = {
	initial: {
		width: 13,
		height: 1,
		backgroundColor: "#e6e6e6",
		overflow: "visible",
		position: "absolute",
		bottom: 17,
		right: 10,
		originX: 0,
		opacity: 0,
	},

	hover: {
		width: 24,
		right: 10,
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
		>
			<AnimatePresence>
				{active === true ? (
					<Frame
						key={active}
						height={24}
						width={24}
						position="absolute"
						top={10}
						left={10}
						backgroundColor="none"
						transition={{ type: "tween", duration: 0.2 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<CloseIcon
							style={{
								color: "white",
							}}
						/>
					</Frame>
				) : (
					<>
						<Frame
							variants={lineOneVariants}
							animate={{ opacity: 1 }}
							width={13}
							transition={{ type: "tween" }}
						/>
						<Frame
							variants={lineTwoVariants}
							animate={{ opacity: 1 }}
							width={20}
							transition={{ type: "tween" }}
						/>
						<Frame
							variants={lineThreeVariants}
							animate={{ opacity: 1 }}
							width={13}
							transition={{ type: "tween" }}
						/>
					</>
				)}
			</AnimatePresence>
		</Frame>
	);
}

export default MenuButton;
