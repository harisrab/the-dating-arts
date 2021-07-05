import React, { useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageVar = {
	initial: { width: "0%" },
	final: { width: "90%" },
};

function HeroSection() {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("final");
		}
		// if (!inView) {
		// 	controls.start("initial");
		// }
	}, [controls, inView]);

	return (
		<Wrapper>
			<ContentWrapper>
				<LeftSection>
					<div className="text-container">
						<div className="about">
							<p>About</p>
						</div>
						<div className="main-heading">
							<h1>
								<span>Colgate</span>
							</h1>
						</div>
						<div className="summary">
							Twenty years from now you will be more disappointed
							by the things that you didn't do than by the ones
							you did do. So throw off the bowlines. Sail away
							from the safe harbor. Catch the trade winds in your
							sails. Explore. Dream. Discover.
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
							transition={{ duration: 2, delay: 1 }}
							src="/colgate_profile.png"
							alt=""
						/>
					</motion.div>
				</RightSection>
			</ContentWrapper>
			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default HeroSection;

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

		.about {
			pointer-events: all;
			user-select: text;
			p {
				pointer-events: all;
				user-select: text;
				color: gray;
			}
			margin-bottom: -3px;
		}

		.main-heading {
			font-size: 20px;
			pointer-events: all;
			user-select: text;

			h1 {
				pointer-events: all;
				user-select: text;
				font-weight: 400;
				span {
					pointer-events: all;
					user-select: text;
					color: var(--main-color-red);
				}
			}

			margin-bottom: 10px;
		}

		.summary {
			pointer-events: all;
			user-select: text;
			font-weight: 200;
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
			/* -o-object-position: right; */
			/* object-position: right; */

			transform-origin: left;
			-webkit-transform-origin: left;
		}
	}
`;
