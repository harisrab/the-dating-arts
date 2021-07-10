import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductItemDetailsButton from "../../components/Buttons/ProductItemDetailsButton";
import ProductItemAddToCart from "../../components/Buttons/ProductItemAddToCart";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import { useStateValue } from "../../Store/StateProvider";

function FeaturedProducts() {
	const [{ cmsData }, dispatch] = useStateValue();

	const data = [
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		},
	];

	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setProducts(cmsData.data.products);
		}
	}, [cmsData]);

	return (
		<Wrapper>
			{products.length !== 0 && cmsData.status === "fetched" ? (
				<ContentWrapper>
					<div className="title">
						<h2>Featured Picks</h2>
					</div>
					{products.slice(0, 4).map((eachProduct) => {
						return (
							<ProductItem>
								<img src={eachProduct.coverImage.url} alt="" />
								<div className="product_title">
									<p>{eachProduct.title}</p>
								</div>
								<div className="subtitle">
									<p>{eachProduct.subtitle}</p>
								</div>
								<div className="button_group">
									<div className="left">
										<ProductItemDetailsButton />
									</div>
									<div className="right">
										<ProductItemAddToCart />
									</div>
								</div>
							</ProductItem>
						);
					})}
				</ContentWrapper>
			) : (
				<></>
			)}
			<AnimatedDownArrow color="black" />
		</Wrapper>
	);
}

export default FeaturedProducts;

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
	height: 350px;
	width: 90%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	position: relative;

	font-family: "Spectral", sans-serif;

	.title {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: -80px;

		h2 {
			font-weight: 400;
			font-size: 30px;
		}
	}
`;

const ProductItem = styled.div`
	height: auto;
	flex: 1;
	max-width: 300px;
	min-width: 300px;

	transition: 0.2s ease-out;
	&:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
			rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
		scale: 1.2;
	}

	/* background-color: white; */

	margin-right: 10px;
	margin-left: 10px;

	border-radius: 5px;
	border: 1px solid black;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	img {
		height: 220px;
	}

	.product_title {
		width: 100%;

		p {
			font-weight: 500;
			margin-left: 20px;
		}
	}

	.subtitle {
		p {
			font-size: 14px;
			font-weight: 300;
			color: gray;
			margin-left: 20px;
			margin-right: 20px;
		}
	}

	.button_group {
		position: relative;

		margin-top: 30px;
		margin-bottom: 10px;
		margin-left: 20px;
		margin-right: 20px;

		display: flex;
		align-items: center;
		justify-content: space-between;
		height: auto;
		width: 100%;

		.left {
			height: auto;
			width: 50%;
			display: flex;
			justify-content: center;
		}
		.right {
			height: auto;
			width: 50%;
			display: flex;
			justify-content: center;
		}
	}
`;
