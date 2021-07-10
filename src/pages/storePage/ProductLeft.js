import React from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import ProductExploreButton from "../../components/Buttons/ProductExploreButton";
import CheckIcon from "@material-ui/icons/Check";
import { useStateValue } from "../../Store/StateProvider";

function ProductLeft({ info }) {
	const [_, dispatch] = useStateValue();

	const onClickReadMore = () => {
		dispatch({
			type: "SET_SELECTED_PRODUCT_ID",
			payload: info.id,
		});
		dispatch({
			type: "SET_PRODUCT_MODAL_STATE",
			payload: true,
		});
	};

	return (
		<Wrapper>
			<ContentWrapper>
				<LeftSection>
					<img src={info.coverImage.url} alt="Book Cover" />
				</LeftSection>
				<RightSection>
					<RightContent>
						<div className="title">
							<h2>{info.title}</h2>
							<p>{info.subtitle}</p>
						</div>

						<div className="desc">
							<p>
								{`${info.productDescription.substring(0, 300)}`}{" "}
								<span onClick={onClickReadMore}>
									Read more.
								</span>
							</p>
						</div>

						<div className="features">
							<ul>
								{[
									info.feature1,
									info.feature2,
									info.feature3,
								].map((eachFeature, i) => {
									return (
										<li key={i}>
											<img src="/tickmark.svg" alt="" />
											{eachFeature}
										</li>
									);
								})}
							</ul>
						</div>

						<div className="explore_btn">
							<ProductExploreButton id={info.id} />
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
