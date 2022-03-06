import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import LiveExpButton from "../components/Buttons/LiveExpButton";

function Card({ titleTag, mainTitle, description }) {
	return (
		<Wrapper
			initial={{ scale: 1 }}
			// whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.2, type: "tween", ease: "easeIn" }}
		>
			<div className="tag_holder">
				<p>{titleTag}</p>
			</div>
			<div className="main_title">
				<h3>{mainTitle}</h3>
			</div>
			<div className="desc">
				<p>{description}</p>
			</div>

			<LiveExpButton />
		</Wrapper>
	);
}

export default Card;

const Wrapper = styled(motion.div)`
	height: 100%;
	width: 250px;
	background-color: rgba(167, 167, 167, 0.19);
	border: rgb(236, 236, 236) solid 1px;
	border-radius: 2px;

	margin-right: 35px;
	margin-left: 35px;

	font-family: "GothamBook", sans-serif;
	color: var(--main-color-white);

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	/* padding-top: 10px;
	padding-bottom: 10px; */

	user-select: text;
	
	padding: 30px;
	padding-bottom: 30px;
	
	.tag_holder {
		user-select: text;
		font-family: "GothamLight", sans-serif;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 10px;
		font-weight: 200;
	}

	.main_title {
		h3 {
			font-family: "GothamBold", sans-serif;
			text-transform: uppercase;
			letter-spacing: 2px;
			font-size: 20px;

			margin-top: 10px;
			margin-bottom: 10px;
		}
	}

	.desc {
		p {
			font-family: "GothamBook", sans-serif;
			font-size: 13px;
		}
		margin-bottom: 20px;
	}

	@media only screen and (max-device-width: 480px) {
		margin-bottom: 30px;
		height: fit-content;
	}
`;
