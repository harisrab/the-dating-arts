import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { request, gql } from "graphql-request";
import { motion, AnimatePresence } from "framer-motion";
import SelectableSlider from "../../components/SelectableSlider";
import RightButton from "../../components/Buttons/RightButton";
import LeftButton from "../../components/Buttons/LeftButton";

function Testimonials() {
	const [testimonials, setTestimonials] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const URL =
			"https://api-us-east-1.graphcms.com/v2/ckq8brsjz4kol01xk7rmph436/master";

		const query = gql`
			{
				testimonials {
					id
					quote
					author
				}
			}
		`;

		request(URL, query)
			.then((data) => {
				// console.log("Data AOL ====>", data.testimonials);
				setTestimonials(data.testimonials);
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		console.log("Current Index ====> ", currentIndex);
	}, [currentIndex]);

	return (
		<>
			{testimonials.length === 0 ? (
				<></>
			) : (
				<Wrapper>
					<AnimatePresence>
						<ContentWrapper>
							<h2>Testimonials</h2>
							<div className="h3__wrapper">
								<motion.h3
									key={currentIndex}
									initial={{ opacity: 1, y: 40 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, type: "spring" }}
									className="heading"
								>
									{testimonials[currentIndex].quote}
								</motion.h3>
							</div>

							<div className="p__wrapper">
								<motion.p
									key={currentIndex}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 1,
										type: "spring",
										delay: 0.1,
									}}
									className="copy"
								>
									{testimonials[currentIndex].author}
								</motion.p>
							</div>
							<div className="sliderbar-holder">
								<SelectableSlider
									length={testimonials.length}
									currentIndex={currentIndex}
									setCurrentIndex={setCurrentIndex}
								/>
							</div>
						</ContentWrapper>
					</AnimatePresence>

					<AnimatedDownArrow />
				</Wrapper>
			)}
		</>
	);
}

export default Testimonials;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const ContentWrapper = styled.div`
	width: 60vw;
	height: auto;

	position: relative;


	color: var(--main-color-white);
	font-family: "Spectral", sans-serif;
	font-style: normal;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		color: white;
		font-family: "Spectral", sans-serif;
		font-weight: 300;
		font-size: 32px;

		position: absolute;
		top: -150px;

		
	}

	.h3__wrapper {
		height: 80px;
		min-height: fit-content;
		width: fit-content;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.p__wrapper {
		width: fit-content;
		overflow: hidden;
		height: 40px;
		display: flex;
		align-items: center;
	}

	.heading {
		color: #e8e8e8;

		text-align: center;
		font-size: 15px;
		font-weight: 300;
	}

	.copy {
		color: var(--main-color-red);
		font-weight: 300;
		font-size: 18px;
		line-height: 1.4;
		word-break: break-all;
	}

	.sliderbar-holder {
		height: auto;
		width: 200px;

		position: absolute;
		bottom: -100px;
	}
`;
