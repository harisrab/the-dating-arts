import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { motion, AnimatePresence } from "framer-motion";
import SelectableSlider from "../../components/SelectableSlider";
import RightButton from "../../components/Buttons/RightButton";
import LeftButton from "../../components/Buttons/LeftButton";
import { useStateValue } from "../../Store/StateProvider";

function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const [{ cmsData }, dispatch] = useStateValue();
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setTestimonials(cmsData.data.testimonials);
		}
	}, [cmsData]);

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

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
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

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
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
		will-change: transform;
	}

	.h3__wrapper {
		height: 80px;
		min-height: fit-content;
		width: fit-content;
		overflow: hidden;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		align-items: center;
		will-change: transform;
	}

	.p__wrapper {
		width: fit-content;
		overflow: hidden;
		height: 40px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		align-items: center;
		will-change: transform;
	}

	.heading {
		color: #e8e8e8;

		text-align: center;
		font-size: 15px;
		font-weight: 300;
		will-change: transform;
	}

	.copy {
		color: var(--main-color-red);
		font-weight: 300;
		font-size: 18px;
		line-height: 1.4;
		word-break: break-all;
		will-change: transform;
	}

	.sliderbar-holder {
		height: auto;
		width: 200px;

		position: absolute;
		bottom: -100px;
	}
`;
