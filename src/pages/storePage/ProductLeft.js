import React from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import ProductExploreButton from "../../components/Buttons/ProductExploreButton";
import CheckIcon from "@material-ui/icons/Check";
import { useStateValue } from "../../Store/StateProvider";

function ProductLeft() {
	const [_, dispatch] = useStateValue();

	const data = {
		title: "The Mindset",
		subtitle: "Thirteen Foundational Principles of an Attractive Man",
		desc:
			"In sodales vitae tortor vitae tristique. Praesent vel dolor quam. Pellentesque auc arcu a auctor pellentesque. Nunc ullamcorper ante non libero lacinia, in imperdiet nisi volutpat. Quisque nec sem sollicitudin, pharetra nibh blandit, interdum eros. Aliquam orci odi pellentesque id tellus eu, volutpat feugiat quam. Praesent porta molestie leo ut egestas.Lorem ipsum dolor sit amet, consecteturadipiscing elit. Pellentesque commodo a liberoultricies sollicitudin. Aenean vitae lectusnunc. Etiam tincidunt consectetur nunc aeleifend. Pellentesque lacinia nulla neque, idtempus mi consequat sit amet. Ut ut accumsannibh.",
		features: [
			"This is mock feature 1",
			"This is mock feature 2",
			"This is mock feature 3",
			"This is mock feature 4",
		],
		img: { cover: "/book_cover.png", inside: "/book_inside.png" },
	};


	
	return (
		<Wrapper>
			<ContentWrapper>
				<LeftSection>
					<img src="/book_cover.png" alt="Book Cover" />
				</LeftSection>
				<RightSection>
					<RightContent>
						<div className="title">
							<h2>{data.title}</h2>
							<p>{data.subtitle}</p>
						</div>

						<div className="desc">
							<p>
								{`${data.desc.substring(0, 300)}`}{" "}
								<span
									onClick={() =>
										dispatch({
											type: "SET_PRODUCT_MODAL_STATE",
											payload: true,
										})
									}
								>
									Read more.
								</span>
							</p>
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
						</div>

						<div className="explore_btn">
							<ProductExploreButton />
						</div>
					</RightContent>
				</RightSection>
			</ContentWrapper>

			<AnimatedDownArrow color="black" />
		</Wrapper>
	);
}

export default ProductLeft;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	pointer-events: all;
	user-select: text;

	background-color: var(--main-color-white);

	position: relative;

	scroll-snap-align: start;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const ContentWrapper = styled.div`
	height: 86.94%;
	width: 89.37%;

	/* background-color: #c7c7c7; */

	display: flex;
`;

const LeftSection = styled.div`
	height: 100%;
	width: 40%;
	/* background-color: #474747; */

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

const RightSection = styled.div`
	height: 100%;
	width: 60%;
	/* background-color: gray; */

	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const RightContent = styled.div`
	height: auto;
	width: 60%;
	/* background-color: red; */
	margin-right: 50px;

	font-family: "Spectral", sans-serif;

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
	}

	.features {
		ul {
			li {
				display: flex;
				align-items: center;
				list-style-type: none;

				font-weight: 200;

				img {
					height: 10px;
					margin-right: 10px;
				}

				font-size: 15px;
			}
		}
	}

	.explore_btn {
		height: auto;
		width: auto;

		margin-top: 40px;
	}
`;
