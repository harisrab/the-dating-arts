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
							<h2 className="storepage">{info.title}</h2>
							<p className="storepage">{info.subtitle}</p>
						</div>

						<div className="desc">
							<p className="storepage">
								{`${info.productDescription.substring(0, 300)}`}{" "}
								<span
									className="storepage"
									onClick={onClickReadMore}
								>
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
										<li className="storepage" key={i}>
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

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	background-color: var(--main-color-white);

	position: relative;

	scroll-snap-align: start;

	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
		height: auto;
		padding-top: 60px;
		padding-bottom: 250px;
	}

	overflow: hidden;
`;

const ContentWrapper = styled.div`
	height: 86.94%;
	width: 89.37%;

	/* background-color: #c7c7c7; */

	display: flex;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	@media only screen and (max-device-width: 480px) {
		flex-direction: column;
	}
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

	@media only screen and (max-device-width: 480px) {
		height: 50%;
		width: 100%;
	}
`;

const RightSection = styled.div`
	height: 100%;
	width: 60%;
	/* background-color: gray; */

	display: flex;
	justify-content: flex-end;
	align-items: center;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	@media only screen and (max-device-width: 480px) {
		height: 50%;
		width: 100%;

		justify-content: center;
	}
`;

const RightContent = styled.div`
	height: auto;
	width: 60%;
	/* background-color: red; */
	margin-right: 50px;

	font-family: "Spectral", sans-serif;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	.title {
		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;
		h2 {
			font-weight: 400;
			font-size: 25px;

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}

		p {
			color: gray;

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;
		}
	}

	.desc {
		margin-top: 25px;
		margin-bottom: 20px;

		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;

		p {
			font-size: 14px;
			font-weight: 200;

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;

			span {
				text-decoration: underline;
				text-decoration-style: dotted;
				color: gray;
				margin-left: 5px;
				transition: 0.3s ease-out;

				pointer-events: all !important;
				user-select: text !important;
				--webkit-user-select: text !important;

				&:hover {
					color: #9b9b9b;
					cursor: pointer;
				}
			}
		}
	}

	.features {
		pointer-events: all !important;
		user-select: text !important;
		--webkit-user-select: text !important;

		ul {
			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;

			li {
				display: flex;
				align-items: center;
				list-style-type: none;

				font-weight: 200;

				pointer-events: all !important;
				user-select: text !important;
				--webkit-user-select: text !important;

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

	@media only screen and (max-device-width: 480px) {
		height: 100%;
		width: 90%;

		margin-right: 0px;

		.title {
			h2 {
			}

			p {
				font-size: 12px;
				width: 100%;
			}
		}
	}
`;
