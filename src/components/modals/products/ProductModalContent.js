import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddToCartProductModalButton from "../../Buttons/AddToCartProductModalButton";

import { useStateValue } from "../../../Store/StateProvider";
import { motion } from "framer-motion";

function ProductModalContent() {
	const [sliderAmount, setSliderAmount] = useState(2);
	const [{ selectedEventId, cmsData }, dispatch] = useStateValue();
	const [eventDetails, setEventDetails] = useState("");

	const data = {
		title: "The Mindset",
		subtitle: "Thirteen Foundational Principles of an Attractive Man",
		desc:
			"In sodales vitae tortor vitae tristique. Praesent vel dolor quam. Pellentesque auc arcu a auctor pellentesque. Nunc ullamcorper ante non libero lacinia, in imperdiet nisi volutpat. Quisque nec sem sollicitudin, pharetra nibh blandit, interdum eros. Aliquam orci odi pellentesque id tellus eu, volutpat feugiat quam. Praesent porta molestie leo ut egestas.Lorem ipsum dolor sit amet, consecteturadipiscing elit. Pellentesque commodo a liberoultricies sollicitudin. Aenean vitae lectusnunc. Etiam tincidunt consectetur nunc aeleifend. Pellentesque lacinia nulla neque, idtempus mi consequat sit amet. Ut ut accumsannibh. Praesent vel dolor quam. Pellentesque auc arcu a auctor pellentesque. Nunc ullamcorper ante non libero lacinia, in imperdiet nisi volutpat. Quisque nec sem sollicitudin, pharetra nibh blandit, interdum eros. Aliquam orci odi pellentesque id tellus eu, volutpat feugiat quam. Praesent porta molestie leo ut egestas.Lorem ipsum dolor sit amet, consecteturadipiscing elit. Pellentesque commodo a liberoultricies sollicitudin. Aenean vitae lectusnunc. Etiam tincidunt consectetur nunc aeleifend. Pellentesque lacinia nulla neque, idtempus mi consequat sit amet. Ut ut accumsannibh.",
		features: [
			"This is mock feature 1",
			"This is mock feature 2",
			"This is mock feature 3",
			"This is mock feature 4",
			"This is mock feature 5",
			"This is mock feature 6",
		],
		img: { cover: "/book_cover.png", inside: "/book_inside.png" },
	};

	return (
		<Wrapper>
			<ContentHolder>
				<LeftSection>
					<div className="start">
						<div className="title">
							<h2>{data.title}</h2>
						</div>
						<div className="subtitle">
							<p>{data.subtitle}</p>
						</div>
						<div className="desc">
							<p>{data.desc}</p>
						</div>

						<div className="features">
							<ul>
								{data.features
									.slice(0, 3)
									.map((eachFeature, i) => {
										return (
											<li key={i}>
												<img
													src="/tickmark.svg"
													alt=""
												/>
												{eachFeature}
											</li>
										);
									})}
							</ul>
							<ul>
								{data.features
									.slice(3, 6)
									.map((eachFeature, i) => {
										return (
											<li key={i}>
												<img
													src="/tickmark.svg"
													alt=""
												/>
												{eachFeature}
											</li>
										);
									})}
							</ul>
						</div>
					</div>
					<div className="end">
						<AddToCartProductModalButton />
					</div>
				</LeftSection>
			</ContentHolder>
		</Wrapper>
	);
}

export default ProductModalContent;

const Wrapper = styled.div`
	width: 100%;
	flex: 1;

	position: relative;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;

	justify-content: flex-end;
`;

const ContentHolder = styled.div`
	height: 100%;
	width: 89%;

	/* background-color: gray; */

	display: flex;
	justify-content: space-between;
`;

const LeftSection = styled.div`
	height: 100%;
	width: 40%;
	/* background-color: #892be26f; */

	font-family: "Spectral", sans-serif;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	.start {
		.title {
			h2 {
				font-weight: 400;
				font-size: 25px;
			}

			p {
				color: gray;
			}
		}

		.desc {
			margin-top: 25px;
			margin-bottom: 20px;

			height: 200px;
			overflow: scroll;
			overflow-x: hidden;

			position: relative;
			padding-right: 20px;

			scroll-behavior: smooth;

			p {
				font-size: 14px;
				font-weight: 200;

				span {
					text-decoration: underline;
					text-decoration-style: dotted;
					color: gray;
					margin-left: 5px;
					transition: 0.3s ease-out;

					&:hover {
						color: #9b9b9b;
						cursor: pointer;
					}
				}
			}

			&::-webkit-scrollbar {
				width: 0.3em;
			}

			&::-webkit-scrollbar-track {
				background: var(--scrollbar-background-color);
			}

			/* Handle */
			&::-webkit-scrollbar-thumb {
				background: #c2c2c2;
				border-radius: 4px;
			}

			/* Handle on hover */
			&::-webkit-scrollbar-thumb:hover {
				background: var(--scrollbar-handle-hover-color);
			}
		}

		.features {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			ul {
				height: 100%;
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				justify-content: center;
				
				li {
					display: flex;
					align-items: center;
					list-style-type: none;

					font-weight: 300;

					font-size: 15px;
					position: relative;

					padding-left: 15px;
					img {
						height: 10px;
						top: 50%;
						left: 0;
						transform: translate(-50%, -50%);
					}
				}
			}

			height: 80px;
			/* background-color: red; */
		}
	}

	.end {
		width: 100%;
	}
`;
