import React, { useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageVar = {
	initial: { width: "0%" },
	final: { width: "90%" },
};

function WhoAreWe() {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("final");
		}
	}, [controls, inView]);

	return (
		<Wrapper>
			<ContentWrapper>
				<LeftSection>
					<div className="text-container">
						<div className="main-heading">
							<h1>Who are we?</h1>
						</div>
						<div className="summary">
							For over a decade, The Dating Arts has secured its
							highly acclaimed reputation as the premier dating
							and social strategy consulting agency for
							professionals looking to better their lifestyles,
							social skills, and relationships with a goal to live
							and date fearlessly. Founded by Wemerson Oliveira,
							The Dating Arts has been helping high caliber, goal
							oriented, and successful minded clients in the areas
							of dating, relationship, social dynamics, and
							personal development.
						</div>
					</div>
				</LeftSection>
				<RightSection>
					<motion.div className="img_wrapper">
						<motion.img
							ref={ref}
							style={{ originX: 0 }}
							variants={imageVar}
							initial="initial"
							animate={controls}
							transition={{
								duration: 2,
								delay: 0.3,
								ease: "easeOut",
							}}
							src="https://images.unsplash.com/photo-1578736641330-3155e606cd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
							alt=""
						/>
					</motion.div>
				</RightSection>
			</ContentWrapper>
			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default WhoAreWe;

const Wrapper = styled.div`
	background-color: var(--main-color-black);
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	scroll-snap-align: start;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	pointer-events: all;
`;

const ContentWrapper = styled.div`
	width: 89.37%;
	height: 86.94%;

	display: flex;
	pointer-events: all;
	user-select: text;
`;

const LeftSection = styled.div`
	height: 100%;
	width: 60%;

	display: flex;
	align-items: center;
	pointer-events: all;
	user-select: text;

	.text-container {
		display: flex;
		flex-direction: column;

		height: auto;
		width: 80%;

		font-family: "Spectral", sans-serif;
		color: var(--main-color-white);
		pointer-events: all;
		user-select: text;

		.main-heading {
			font-size: 20px;
			pointer-events: all;
			user-select: text;

			h1 {
				pointer-events: all;
				user-select: text;
				font-weight: 400;
			}

			margin-bottom: 10px;
		}

		.summary {
			pointer-events: all;
			user-select: text;
			font-weight: 200;
			font-size: 15px;
		}

		margin-left: 50px;
	}
`;

const RightSection = styled(motion.div)`
	height: 100%;
	width: 40%;

	display: flex;
	align-items: center;
	justify-content: center;

	pointer-events: all;
	user-select: text;

	.img_wrapper {
		height: auto;
		width: auto;

		img {
			height: 380px;
			width: 380px;

			object-fit: cover;
			-o-object-fit: cover;

			transform-origin: left;
			-o-transform-origin: left;
		}
	}
`;
