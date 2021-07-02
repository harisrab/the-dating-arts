import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import LiveExpButton from "../components/Buttons/LiveExpButton";

function Card({ titleTag, mainTitle, description }) {
	return (
		<Wrapper
			initial={{ scale: 1 }}
			whileHover={{ scale: 1.05 }}
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
	background-color: rgba(219, 0, 0, 0.19);
	border: rgb(122, 0, 0) solid 1px;
	border-radius: 6px;

	margin-right: 35px;
	margin-left: 35px;

	font-family: "Spectral", sans-serif;
	color: var(--main-color-white);

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	padding: 30px;
    padding-bottom: 0px;

	.tag_holder {
		font-weight: 200;
		font-size: 15px;
	}

	.main_title {
		h3 {
			font-weight: 400;
			font-size: 25px;
			margin-bottom: 10px;
		}
	}

	.desc {
		p {
			font-weight: 200;
			font-size: 13px;
		}
        margin-bottom: 20px;
	}
`;
