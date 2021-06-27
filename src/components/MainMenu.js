import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useStateValue } from "../Store/StateProvider";
import { Link } from "react-router-dom";

// Animation Variants
const wrapperVariants = {
	initial: {
		height: "0vh",
		y: 0,
		transition: {
			duration: 2.2,
			type: "tween",
			ease: "easeOut",
			delay: 0.2,
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
			delay: 0.2,
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
	exit: {},
};

const mainVariants = {
	initial: {
		height: "0vh",
		y: 0,
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeOut",
			when: "afterChildren",
			delay: 0.2,
		},
	},
	final: {
		height: "100vh",
		y: 0,
		transition: {
			duration: 0.7,
			type: "tween",
			ease: "easeOut",
			when: "beforeChildren",
		},
	},
	hover: {},
	exit: {},
};

const listVariants = {
	initial: {},
	hover: {},
	final: {},
	exit: {
		opacity: 0,
		when: "afterChildren",
		transition: { staggerChildren: 0.5, staggerDirection: -1 },
	},
};

const listItemVariants = {
	initial: {
		skewX: 0,
		scale: 1,
	},
	hover: {
		skewX: 2,
		scale: 1.05,
		color: "var(--main-color-red)",
		transition: {
			duration: 0.2,
		},
	},
	final: {},
	exit: { opacity: 0, x: -20 },
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
		<>
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
					<div className="top-line"></div>
					<div className="bottom-line"></div>
					<AnimatePresence exitBeforeEnter>
						{active && (
							<List
								variants={listVariants}
								initial="initial"
								exit={"exit"}
							>
								<Link to="/" style={{ textDecoration: "none" }}>
									<ListItem
										variants={listItemVariants}
										key={1}
										whileHover="hover"
										exit="exit"
									>
										HOME
									</ListItem>
								</Link>
								<Link
									to="/about"
									style={{ textDecoration: "none" }}
								>
									<ListItem
										key={2}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										ABOUT
									</ListItem>
								</Link>
								<Link
									to="/store"
									style={{ textDecoration: "none" }}
								>
									<ListItem
										key={3}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										STORE
									</ListItem>
								</Link>
								<Link
									to="/experiences"
									style={{ textDecoration: "none" }}
								>
									<ListItem
										key={4}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										LIVE EXPERIENCES
									</ListItem>
								</Link>
								<Link
									to="/coaching"
									style={{ textDecoration: "none" }}
								>
									<ListItem
										key={5}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										COACHING
									</ListItem>
								</Link>
								<Link
									to="/blog"
									style={{ textDecoration: "none" }}
								>
									<ListItem
										key={6}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										BLOG
									</ListItem>
								</Link>
								<Link
									to="/contact"
									style={{ textDecoration: "none" }}
								>
									<ListItem
										key={7}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										CONTACT
									</ListItem>
								</Link>
								<Link
									to="/admission"
									style={{ textDecoration: "none" }}
								>
									<ListItem
										key={8}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										ADMISSION APPLICATION
									</ListItem>
								</Link>
							</List>
						)}
					</AnimatePresence>
				</Main>
			</Wrapper>
		</>
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

	background-color: #380000;
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

	.top-line {
		height: 0.2px;
		width: 33%;
		background-color: #ffffff2d;

		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.bottom-line {
		height: 0.5px;
		width: 89%;
		background-color: #ffffff2d;

		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translate(-50%, 0);
	}
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
	user-select: none;

	&:hover {
		cursor: pointer;
	}
`;