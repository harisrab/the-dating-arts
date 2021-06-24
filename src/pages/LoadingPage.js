import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Frame, AnimatePresence, FramerTreeLayoutContext } from "framer";
import { useStateValue } from "../Store/StateProvider";

const parentVariants = {
	initial: {},
	final: {},
	exit: {
		opacity: 0,
		scale: 0.95,
		filter: "blur(20px)",
		transitionEnd: {
			display: "none",
		},
	},
};

const logoHolderVariants = {
	initial: {
		opacity: 0,
		filter: "blur(20px)",
	},
	final: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			duration: 2,
			type: "spring",
			ease: "easeOut",
			delay: 1,
		},
		filter: "blur(0px)",
	},
	exits: {
		opacity: 0,
		scale: 0.95,
		filter: "blur(20px)",
		transitionEnd: {
			display: "none",
		},
	},
};
const childVariants = {
	initial: {
		width: "0%",
	},
	final: {
		width: "100%",
	},
	exit: {},
};

function LoadingPage() {
	const [{ loader }, dispatch] = useStateValue();

	return (
		<>
			<AnimatePresence>
				{loader.isLoading === true && (
					<Frame
						variants={parentVariants}
						initial={"initial"}
						animate={"final"}
						style={wrapper}
						exit={"exit"}
						transition={{ duration: 1 }}
					>
						<Frame
							style={logoHolderWrapper}
							variants={logoHolderVariants}
							initial={"initial"}
							animate={"final"}
							exit={"exit"}
						>
							<Logo />
							<Frame style={loadingBarWrapper}>
								<Frame
									variants={childVariants}
									iniital={"initial"}
									animate={"final"}
									transition={{
										duration: 2,
										ease: "easeOut",
										delay: 2,
										type: "tween",
									}}
									style={loadingBarStyle}
								/>
								<Frame style={loadingBarBackStyle} />
							</Frame>
						</Frame>
					</Frame>
				)}
			</AnimatePresence>
		</>
	);
}

export default LoadingPage;

const wrapper = {
	height: "100vh",
	width: "100%",
	backgroundColor: "black",

	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",

	zIndex: 51,
};

const logoHolderWrapper = {
	height: "50%",
	width: "50%",
	backgroundColor: "var(--main-color-black)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	filter: "blur(30px)",
};

const loadingBarWrapper = {
	backgroundColor: "none",
	height: 20,
	width: 200,
	position: "relative",
	marginTop: 5,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const loadingBarStyle = {
	backgroundColor: "var(--progressbar-top-color-white)",
	height: 1,
	width: 0,
	position: "absolute",
};

const loadingBarBackStyle = {
	backgroundColor: "var(--progressbar-back-color-white)",
	height: 1,
	width: 200,
	position: "absolute",
};
