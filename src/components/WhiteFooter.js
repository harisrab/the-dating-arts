import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useStateValue } from "../Store/StateProvider";

function Footer() {
	const [isMobile, setIsMobile] = useState();
	const [{ cmsData }, dispatch] = useStateValue();

	useEffect(() => {
		setIsMobile(window.matchMedia("(max-device-width: 480px)").matches);
	}, []);

	return (
		<Wrapper>
			<p className="rights_reserved">
				© 2021 The Dating Arts. {isMobile && <br></br>}All rights
				reserved.
			</p>
			<div className="left_links">
				<ul>
					<Link
						className="link_tag"
						to="/"
						style={{ textDecoration: "none" }}
					>
						<ListItem
							initial={{ opacity: 0.7, scale: 1 }}
							whileHover={{
								opacity: 1,
								scale: 1.1,
							}}
							transition={{ duration: 0.2 }}
						>
							Home
						</ListItem>
					</Link>
					<Link to="/about-tda" style={{ textDecoration: "none" }}>
						<ListItem
							initial={{ opacity: 0.7, scale: 1 }}
							whileHover={{ opacity: 1, scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							About The Dating Arts
						</ListItem>
					</Link>
					<Link
						to="/about-colgate"
						style={{ textDecoration: "none" }}
					>
						<ListItem
							initial={{ opacity: 0.7, scale: 1 }}
							whileHover={{ opacity: 1, scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							About Colgate
						</ListItem>
					</Link>
					<Link
						to="/live-experiences"
						style={{ textDecoration: "none" }}
					>
						<ListItem
							initial={{ opacity: 0.7, scale: 1 }}
							whileHover={{ opacity: 1, scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							Live Experiences
						</ListItem>
					</Link>
					<Link
						to="/at-home-trainings"
						style={{ textDecoration: "none" }}
					>
						<ListItem
							initial={{ opacity: 0.7, scale: 1 }}
							whileHover={{ opacity: 1, scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							At Home Trainings
						</ListItem>
					</Link>
					<Link
						to={{
							pathname: `${cmsData.data.applicationPages[0].googleFormsLink}`,
						}}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<ListItem
							initial={{ opacity: 0.7, scale: 1 }}
							whileHover={{ opacity: 1, scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							Admission Application
						</ListItem>
					</Link>
					<Link to="/contact" style={{ textDecoration: "none" }}>
						<ListItem
							initial={{ opacity: 0.7, scale: 1 }}
							whileHover={{ opacity: 1, scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							Contact
						</ListItem>
					</Link>
					<Link to="/store" style={{ textDecoration: "none" }}>
						<ListItem
							initial={{ opacity: 0.7, scale: 1 }}
							whileHover={{ opacity: 1, scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							Store
						</ListItem>
					</Link>
				</ul>
			</div>
			<div className="right_links">
				<Link to="/policies#privacy" style={{ textDecoration: "none" }}>
					<ListItemRight
						initial={{ opacity: 0.7, scale: 1 }}
						whileHover={{ opacity: 1, scale: 1.1 }}
						transition={{ duration: 0.2 }}
					>
						Privacy Policy
					</ListItemRight>
				</Link>
				<Link to="/policies#tc" style={{ textDecoration: "none" }}>
					<ListItemRight
						initial={{ opacity: 0.7, scale: 1 }}
						whileHover={{ opacity: 1, scale: 1.1 }}
						transition={{ duration: 0.2 }}
					>
						Terms and Conditions
					</ListItemRight>
				</Link>
				<Link to="/policies#return" style={{ textDecoration: "none" }}>
					<ListItemRight
						initial={{ opacity: 0.7, scale: 1 }}
						whileHover={{ opacity: 1, scale: 1.1 }}
						transition={{ duration: 0.2 }}
					>
						Return Policy
					</ListItemRight>
				</Link>
			</div>
		</Wrapper>
	);
}

export default Footer;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-color: #dddddd;

	position: relative;

	scroll-snap-align: start;

	h1 {
		color: black;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.left_links {
		position: absolute;
		height: auto;
		width: auto;

		top: 50%;
		left: 15%;
		transform: translateY(-50%);
	}

	.right_links {
		position: absolute;
		height: auto;
		width: auto;
		top: 50%;
		transform: translateY(-50%);

		right: 15%;

		display: none;
		@media only screen and (max-device-width: 480px) {
			display: none;
		}
	}

	.rights_reserved {
		color: black;
		position: absolute;
		right: 13%;
		bottom: 8.5%;

		font-family: "Spectral", sans-serif;
		font-weight: 200;
		font-size: 13px;

		@media only screen and (max-device-width: 480px) {
			left: 10%;
			bottom: 8%;
			width: 200px;
		}
	}
`;

const ListItem = styled(motion.li)`
	color: #303030;
	font-size: 14px;
	font-family: "GothamLight", sans-serif;
	letter-spacing: 3px;

	text-transform: uppercase;

	list-style: none;
	margin: 12px;

	user-select: none;
	opacity: 0.7;
	transform-origin: 0;
	-webkit-transform-origin-x: 0.5;
	-webkit-transform-origin-y: 0.5;

	margin-top: 20px;
	margin-bottom: 20px;

	&:hover {
		color: black;
	}
`;

const ListItemRight = styled(motion.li)`
	color: black;
	font-size: 15px;
	font-weight: 400;
	font-family: "Spectral";
	letter-spacing: 1px;
	list-style: none;
	margin: 12px;
	user-select: none;
	opacity: 0.7;
	transform-origin: 0;
`;
