import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddToCartProductModalButton from "../../Buttons/AddToCartProductModalButton";

import { useStateValue } from "../../../Store/StateProvider";
import { motion } from "framer-motion";

function ProductModalContent({ info, status }) {
	const [isMobile, setIsMobile] = useState();

	useEffect(() => {
		setIsMobile(window.matchMedia("(max-device-width: 480px)").matches);
	}, []);

	return (
		<Wrapper>
			{info !== {} && status === "fetched" ? (
				<ContentHolder>
					<LeftSection>
						<div className="start">
							<div className="title">
								<h2>{info.title}</h2>
							</div>
							<div className="subtitle">
								<p>{info.subtitle}</p>
							</div>
							<div className="desc">
								<p>{info.productDescription}</p>
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
												<img
													src="/tickmark.svg"
													alt=""
												/>
												{eachFeature}
											</li>
										);
									})}
								</ul>
								{isMobile ? (
									<></>
								) : (
									<ul>
										{[
											info.feature4,
											info.feature5,
											info.feature6,
										].map((eachFeature, i) => {
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
								)}
							</div>
						</div>
						<div className="end">
							<AddToCartProductModalButton
								url={info.gumroadLink}
							/>
						</div>
					</LeftSection>
				</ContentHolder>
			) : (
				<></>
			)}
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

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	@media only screen and (max-device-width: 480px) {
		justify-content: center;
	}
`;

const ContentHolder = styled.div`
	height: 100%;
	width: 89%;

	/* background-color: gray; */

	display: flex;
	justify-content: space-between;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	@media only screen and (max-device-width: 480px) {
		align-items: center;
		justify-content: center;
		width: 100%;
	}
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

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	.start {
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
		}

		.subtitle {
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

			height: 200px;
			overflow: scroll;
			overflow-x: hidden;

			position: relative;
			padding-right: 20px;

			scroll-behavior: smooth;

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

			pointer-events: all !important;
			user-select: text !important;
			--webkit-user-select: text !important;

			ul {
				height: 100%;
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				justify-content: center;

				pointer-events: all !important;
				user-select: text !important;
				--webkit-user-select: text !important;

				li {
					display: flex;
					align-items: center;
					list-style-type: none;

					font-weight: 300;

					font-size: 15px;
					position: relative;

					padding-left: 15px;

					pointer-events: all !important;
					user-select: text !important;
					--webkit-user-select: text !important;

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

	@media only screen and (max-device-width: 480px) {
		width: 85%;
		align-items: center;

		justify-content: flex-start;

		.start {
			.title {
				h2 {
				}
			}

			.subtitle {
				p {
				}
			}

			.desc {
				height: 150px;
			}

			.features {
				height: auto;
				ul {
					width: 100%;

					li {
						padding-left: 10px;
					}
				}

				margin-bottom: 20px;
			}
		}

		justify-content: flex-end;
	}
`;
