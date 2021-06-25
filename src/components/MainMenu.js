import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useStateValue } from "../Store/StateProvider";

// Animation Variants
const wrapperVariants = {
	initial: {
		height: "0vh",
		y: 0,
		transition: {
			duration: 2.2,
			type: "tween",
			ease: "easeOut",
		},
	},
	final: {
		height: "100vh",
		y: 0,
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeOut",
		},
	},
	hover: {},
};

const backgroundVariants = {
	initial: {
		height: "0vh",
		y: 0,
		transition: {
			duration: 0.7,
			type: "tween",
			ease: "easeOut",
		},
	},
	final: {
		height: "100vh",
		y: 0,
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const mainVariants = {
	initial: {
		height: "0vh",
		y: 0,
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeOut",
		},
	},
	final: {
		height: "100vh",
		y: 0,
		transition: {
			duration: 0.7,
			type: "tween",
			ease: "easeOut",
		},
	},
};

function MainMenu() {
	const controls = useAnimation();

	const [{ menu }, dispatch] = useStateValue();

	let active = menu.buttonStates.hamburger;

	useEffect(() => {
		if (active) {
			controls.start("final");
		} else {
			controls.start("initial");
		}
	}, [active, controls]);

	return (
		<Wrapper
			variants={wrapperVariants}
			initial="initial"
			animate={controls}
		>
			<Background
				animate={controls}
				variants={backgroundVariants}
			></Background>
			<Main variants={mainVariants}>
				<List>
					<ListItem>HOME</ListItem>
					<ListItem>ABOUT</ListItem>
					<ListItem>STORE</ListItem>
					<ListItem>LIVE EXPERIENCES</ListItem>
					<ListItem>COACHING</ListItem>
					<ListItem>BLOG</ListItem>
					<ListItem>CONTACT</ListItem>
					<ListItem>ADMISSION APPLICATION</ListItem>
				</List>
			</Main>
		</Wrapper>
	);
}

export default MainMenu;

const Wrapper = styled(motion.div)`
	position: absolute;
	height: 0vh;
	width: 100vw;

	top: -6.53vh;
	left: -5.315vw;

	z-index: 1000000;
	pointer-events: all;

	overflow: hidden;
	/* display: none; */
`;

const Background = styled(motion.div)`
	height: 0vh;
	width: 100%;

	position: relative;
	top: 0;
	left: 0;

	background-color: var(--main-color-red);
`;

const Main = styled(motion.div)`
	height: 0vh;
	width: 100%;
	position: absolute;

	top: 0;
	left: 0;

	background-color: black;

	overflow: hidden;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const List = styled(motion.ul)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ListItem = styled(motion.li)`
	color: var(--main-color-white);
	font-size: 0.7em;
	font-weight: 700;
	font-family: "Spectral";
	letter-spacing: 0.2em;
	list-style: none;
	margin: 12px;
	user-select: text !important;
`;
