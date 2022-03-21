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
			<div className="social_icons">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="currentColor"
					onClick={() => {
						window.open(
							"https://www.instagram.com/thedatingarts/",
							"_blank"
						);
					}}
				>
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="currentColor"
					onClick={() => {
						window.open(
							"https://facebook.com/askcolgatenow",
							"_blank"
						);
					}}
				>
					<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					width="22"
					height="22"
					viewBox="0 0 24 24"
					onClick={() => {
						window.open(
							"https://youtube.com/channel/UCkzwd-6cVehBGZbzQMddSeA",
							"_blank"
						);
					}}
				>
					<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
				</svg>
			</div>

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
					<Link to="/wem" style={{ textDecoration: "none" }}>
						<ListItem
							initial={{ opacity: 0.7, scale: 1 }}
							whileHover={{ opacity: 1, scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							About Wem
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

	.social_icons {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;

		left: 13%;
		bottom: 8.5%;

		width: 150px;
		position: absolute;

		color: #a5a4a4;
		transition: 0.2s;

		svg:hover {
			color: #7e7e7e;
			cursor: pointer;
		}
	}

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
