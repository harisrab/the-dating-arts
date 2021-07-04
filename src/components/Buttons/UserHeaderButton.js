import React from "react";
import { Frame, AnimatePresence } from "framer";
import PersonIcon from "@material-ui/icons/Person";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../Store/StateProvider";
import { useHistory } from "react-router-dom";
import "./UserHeaderButton.css";

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

const overlayVariants = {
	initial: {
		opacity: 0,
		height: "0%",
		width: "100%",
		positon: "absolute",
		top: 0,
		left: 0,
		backgroundColor: "blue",
		zIndex: 100,
	},
	final: {
		opacity: 1,
		height: "100%",
	},
};

function UserHeaderButton() {
	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispatch] = useStateValue();
	const history = useHistory();

	const moveToLogin = () => {
		// do some fancy page switching
		// if user not availabe then switch to login page, otherwise move to user profile page
		if (user) {
			history.push("/profile");
		} else {
			history.push("/login");
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
				// display: "flex",
				// justifyContent: "center",
				// alignItems: "center",
				position: "relative",
				overflow: "hidden",
				pointerEvents: "auto",
			}}
		>
			<AnimatePresence>
				{/* render this only when at the checkout page or payment page */}
				{user && (
					<Frame
						variants={overlayVariants}
						position={"absolute"}
						inital={"initial"}
						animate={"final"}
						transition={{ type: "tween", duration: 0.8 }}
						ease={"easeIn"}
						height={0}
						width={"100%"}
						backgroundColor={"var(--main-color-black)"}
						style={{
							zIndex: 100,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "var(--main-color-white)",
							overflow: "hidden",
							opacity: 0,
						}}
					>
						<Avatar
							style={{ position: "absolute", top: 0, left: 0 }}
							alt="Remy Sharp"
							src=""
							variant="square"
						/>
					</Frame>
				)}

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
					<PersonIcon style={{ color: "white", width: "50%" }} />
				</Frame>
			</AnimatePresence>
		</Frame>
	);
}

export default UserHeaderButton;
