import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Frame } from "framer";

const parentVariants = {
	initial: {
		opacity: 0,
	},
	final: {
		opacity: 1,
	},
};

const childVariants = {
	initial: {
		width: 0,
	},
	final: {
		width: 200,
	},
};

function LoadingPage() {
	return (
		<Frame
			variants={parentVariants}
			initial={"initial"}
			animate={"final"}
			transition={{
				duration: 3,
				type: "tween",
				ease: "easeOut",
				delayChildren: 10,
				when: "beforeChildren",
			}}
			style={wrapper}
		>
			<Logo />
			<Frame style={loadingBarWrapper}>
				<Frame
					variants={childVariants}
					iniital={"initial"}
					animate={"final"}
					transition={{ duration: 3, ease: "easeOut" }}
					style={loadingBarStyle}
				/>
				<Frame style={loadingBarBackStyle} />
			</Frame>
		</Frame>
	);
}

export default LoadingPage;

const wrapper = {
	height: "100vh",
	width: "100vw",
	backgroundColor: "none",

	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
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
