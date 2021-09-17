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

	const [{ menu, cmsData }, dispatch] = useStateValue();

	let active = menu.buttonStates.hamburger;

	useEffect(() => {
		if (active) {
			controls.start("final");
		} else {
			controls.start("initial");
		}
	}, [active, controls]);

	const closeMenu = () => {
		dispatch({
			type: "SET_HAMBURGER_STATE",
			payload: false,
		});
	};

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
								<Link
									onClick={closeMenu}
									to="/"
									style={{ textDecoration: "none" }}
								>
									<ListItem
										variants={listItemVariants}
										key={1}
										whileHover="hover"
										exit="exit"
									>
										Home
									</ListItem>
								</Link>
								<Link
									to="/store"
									style={{ textDecoration: "none" }}
									onClick={closeMenu}
								>
									<ListItem
										key={3}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										Store
									</ListItem>
								</Link>
								<Link
									to="/live-experiences"
									style={{ textDecoration: "none" }}
									onClick={closeMenu}
								>
									<ListItem
										key={4}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										Live Experiences
									</ListItem>
								</Link>
								<Link
									to="/at-home-trainings"
									style={{ textDecoration: "none" }}
									onClick={closeMenu}
								>
									<ListItem
										key={5}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										At Home Trainings
									</ListItem>
								</Link>
								<Link
									to="/about-tda"
									style={{ textDecoration: "none" }}
									onClick={closeMenu}
								>
									<ListItem
										key={2}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										About The Dating Arts
									</ListItem>
								</Link>
								<Link
									to="/about-colgate"
									style={{ textDecoration: "none" }}
									onClick={closeMenu}
								>
									<ListItem
										key={2}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										About Colagte
									</ListItem>
								</Link>
								<Link
									to="/contact"
									style={{ textDecoration: "none" }}
									onClick={closeMenu}
								>
									<ListItem
										key={7}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										Contact
									</ListItem>
								</Link>
								<Link
									to={{
										pathname: `${cmsData.data.applicationPages[0].googleFormsLink}`,
									}}
									target="_blank"
									style={{ textDecoration: "none" }}
									onClick={closeMenu}
								>
									<ListItem
										key={8}
										variants={listItemVariants}
										whileHover="hover"
										exit="exit"
									>
										Admission Application
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

	@media only screen and (max-device-width: 480px) {
		left: -6.2vw;
		width: 105vw;
	}
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

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
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
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ListItem = styled(motion.li)`
	color: var(--main-color-white);
	font-size: 17px;
	font-weight: 400;
	font-family: "Spectral";
	letter-spacing: 1px;
	list-style: none;
	margin: 12px;
	user-select: none;

	&:hover {
		cursor: pointer;
	}
`;
